import type { Plugin, ViteDevServer } from 'vite';
import type { routespackOpt } from '#/plugin';
import * as Log from './log';

const TmpLocalCode =
  "export const modules = import.meta.globEager('XXX_PATH/**/*.ts');\
  const prefix = 'XXX_PATH';\
  \
  const path2extname = (path) => path.slice(path.lastIndexOf('.'));\
  \
  function file2obj(file, parent) {\
    const extname = path2extname(file.path);\
    if (file.path.slice(-extname.length) !== extname) return;\
    const p = file.path.slice(file.path.charAt(0) === '/' ? 1 : 0, -extname.length);\
    for (const d of p.split('/')) {\
      if (!parent[d]) parent[d] = {};\
      parent = parent[d];\
    }\
    Object.assign(parent, file.data);\
  }\
  function genRoutes() {\
    const fileData = Object.keys(modules).map((k) => ({ path: k.slice(prefix.length), data: modules[k].default }));\
    const routeData = {};\
    for (const f of fileData.filter((f) => f.data)) file2obj(f, routeData);\
    return routeData;\
  }\
  export const routes = genRoutes();\
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
      // localData = collectData(pluginOpt.dir);
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
      // localData = collectData(pluginOpt.dir);
      reload(ctx.file);
    },
  };
}
