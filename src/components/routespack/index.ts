import type { Plugin, ViteDevServer } from 'vite';
import type { routespackOpt } from '#/plugin';
import * as Log from './log';

const TmpLocalCode =
  "const modules = import.meta.globEager('XXX_PATH/**/*.ts');\
  const prefix = 'XXX_PATH';\
  \
  function searchParent(path, parent) {\
    for (const c of parent.children ?? []) if (path.includes(c.path)) return searchParent(path, c);\
    return parent;\
  }\
  \
  function file2obj(file, parent) {\
    const nparent = searchParent(file.path, parent); \
    if (nparent.path === file.path || nparent.children?.find((c) => c.path === file.path)) return console.warn('[conflict] drop %s: %s', file.fpath, file.path);\
    nparent.children = [...(nparent.children ?? []), { ...file.data }];\
  }\
  function modules2routes(modules) {\
    const fileData = [];\
    for (const k in modules) {\
      for (const e in modules[k]) {\
        const d = modules[k][e];\
        if (typeof d !== 'object') continue;\
        if (d.path && !k.includes(d.path)) console.warn('[conflict] use configured %s instead of %s', d.path, k);\
        fileData.push({ path: d.path ?? k.slice(prefix.length), data: d, fpath: k });\
      }\
    }\
    const sortedFiles = fileData.sort((a, b) => a.path.localeCompare(b.path));\
    const routeData = {};\
    for (const f of sortedFiles) file2obj(f, routeData);\
    return routeData.children;\
  }\
  \
  const flattenCheck = (c, p) => !c.component || (p?.component && c.component.toString() === p.component.toString());\
  const pathCombine = (p1, p2) => (p2.charAt(0) === '/' ? p2 : p1.charAt(p1.length - 1) === '/' ? `${p1}${p2}` : `${p1}/${p2}`);\
  function flattenRoutes(current, parent, routes, omittedNode) {\
    const flag = flattenCheck(current, parent);\
    let curRoute = routes;\
    if (flag && !current.children) console.log('fatal error for node %o', current);\
    const { component, children, ...other } = current;\
    let node = { ...other };\
    if (omittedNode) node = { ...node, path: pathCombine(omittedNode.path, current.path) };\
    if (!flag) node = { ...node, component };\
    if (!flag && children?.length) node = { ...node, children: [] };\
    routes.push(node);\
    if (!flag) {\
      curRoute = node.children;\
      parent = node;\
    }\
  \
    if (!current.children) return routes;\
    for (const c of current.children) flattenRoutes(c, parent, curRoute, flag ? current : null);\
    return routes;\
  }\
  \
  const getOrder = (a) => (a.meta?.orderNo ? a.meta.orderNo : 1000);\
  function sortRoutes(data, f = (a, b) => getOrder(a) - getOrder(b)) {\
    data.sort(f);\
    for (const r of data) if (r.children) sortRoutes(r.children, f);\
  }\
  \
  const routes = modules2routes(modules);\
  sortRoutes(routes);\
  let froutes = [];\
  for (const r of routes) froutes = flattenRoutes(r, null, froutes);\
  \
  export { modules, routes, froutes, flattenRoutes, sortRoutes };\
";

let pluginOpt: routespackOpt;
let server: ViteDevServer;
const virtualModuleId = 'virtual:routes';
const resolveVirtualModuleId = '\0 @lazebird/vite-plugin-routespack/' + virtualModuleId;

function reload(cause: string) {
  if (!server) return;
  const { moduleGraph, ws } = server;
  const module = moduleGraph.getModuleById(resolveVirtualModuleId);
  if (module) moduleGraph.invalidateModule(module);
  ws.send({ type: 'full-reload' });
  Log.info('reload cause: %s', cause);
}

export default function routespack(opt: routespackOpt): Plugin {
  pluginOpt = opt;
  if (pluginOpt.log) Log.config(pluginOpt.log);
  return {
    name: 'vite-plugin-routespack',
    enforce: 'pre',
    config(_config, env) {
      if (!pluginOpt.mode) pluginOpt.mode = env.mode;
      if (pluginOpt.log?.filters?.length) Log.config({ filters: [] });
      Log.info('vite-plugin-routespack opt %o', pluginOpt);
      if (pluginOpt.log) Log.config(pluginOpt.log);
    },
    resolveId(source, importer) {
      Log.debug('source %s, importer %s', source, importer);
      if (source !== virtualModuleId) return null;
      const id = resolveVirtualModuleId;
      Log.info('replace %s -> %s', source, id);
      return { id };
    },
    load(id) {
      if (id !== resolveVirtualModuleId) return null;
      return TmpLocalCode.replaceAll('XXX_PATH', pluginOpt.dir);
    },
    configureServer(_server: ViteDevServer) {
      server = _server;
    },
    handleHotUpdate(ctx) {
      if (!ctx.file.includes(pluginOpt.dir)) return;
      reload(ctx.file);
    },
  };
}
