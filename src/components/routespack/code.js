export const modules = import.meta.globEager('/routes/**/*.ts'); // XXX_PATH
const prefix = '';

function searchParent(path, parent) {
  for (const c of parent.children ?? []) if (c.path !== '/' && path.includes(c.path)) return searchParent(path, c); // '/' keep root path alone
  return parent;
}

function file2obj(file, parent) {
  const nparent = searchParent(file.path, parent); // keep in order, parent first,
  // console.log('path %s, parent %o, nparent %o', file.path, parent, nparent);
  if (nparent.path === file.path || nparent.children?.find((c) => c.path === file.path)) return console.warn('[conflict] drop %s: %s', file.fpath, file.path); // no dup supported
  nparent.children = [...(nparent.children ?? []), { ...file.data }];
}
function modules2routes(modules) {
  const fileData = [];
  for (const k in modules) {
    for (const e in modules[k]) {
      const d = modules[k][e];
      if (typeof d !== 'object') continue;
      if (d.path && !k.includes(d.path)) console.warn('[conflict] use configured %s instead of %s', d.path, k);
      fileData.push({ path: d.path ?? k.slice(prefix.length), data: d, fpath: k });
    }
  }
  const sortedFiles = fileData.sort((a, b) => a.path.localeCompare(b.path));
  const routeData = {};
  for (const f of sortedFiles) file2obj(f, routeData);
  return routeData.children;
}

const flattenCheck = (c, p) => p?.component && c.component.toString() === p.component.toString();
const pathCombine = (p1, p2) => (p2.charAt(0) === '/' ? p2 : p1.charAt(p1.length - 1) === '/' ? `${p1}${p2}` : `${p1}/${p2}`);

function flattenRoutes(current, parent, routes, omittedNode) {
  const flag = flattenCheck(current, parent);
  let curRoute = routes;
  if (flag && !current.children) console.log('fatal error for node %o', current);

  if (!flag) {
    const info = omittedNode ? { path: pathCombine(omittedNode.path, current.path) } : {};
    parent = { ...current, ...info, children: [] };
    routes.push(parent);
    curRoute = parent.children;
  } else {
    if (parent.redirect && current.redirect) {
      if (current.redirect.includes(parent.redirect)) parent.redirect = current.redirect;
      else if (current.redirect.charAt(0) !== '/') parent.redirect = parent.redirect + '/' + current.redirect;
    }
  }
  // console.log('current path %s, flag %o, omittedNode path %s, curRoute path %s', current.path, flag, omittedNode?.path, curRoute.path);

  if (!current.children) return routes;
  for (const c of current.children) flattenRoutes(c, parent, curRoute, flag ? current : null);
  return routes;
}

function trimRoutes(data) {
  for (const r of data) {
    r.children = r.children?.filter((c) => c);
    if (!r.children?.length) r.children = undefined;
    else trimRoutes(r.children);
  }
}
const getOrder = (a) => (a.meta?.orderNo ? a.meta.orderNo : 1000);
const routeCmp = (a, b) => getOrder(a) - getOrder(b);
function sortRoutes(data, f = routeCmp) {
  data.sort(f);
  for (const r of data) if (r.children) sortRoutes(r.children, f);
}

const routes = modules2routes(modules);
sortRoutes(routes);
let froutes = [];
for (const r of routes) froutes = flattenRoutes(r, null, froutes);
trimRoutes(froutes);
// console.log(froutes);

export { routes, froutes, flattenRoutes, trimRoutes, sortRoutes };
