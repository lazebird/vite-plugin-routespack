export const modules = import.meta.globEager('/routes/**/*.ts'); // XXX_PATH
const prefix = 'XXX_PATH';

const path2dir = (path) => (path.lastIndexOf('/') >= 0 ? path.slice(0, path.lastIndexOf('/')) : '');
const path2name = (path) => (path.lastIndexOf('/') >= 0 ? path.slice(path.lastIndexOf('/') + 1) : path);
// const name2ext = (name) => (name.lastIndexOf('.') >= 0 ? name.slice(name.lastIndexOf('.')) : name);
const name2str = (name) => (name.lastIndexOf('.') >= 0 ? name.slice(0, name.lastIndexOf('.')) : name);

function file2obj(file, parent) {
  // console.log('file %o, parent %o', file, parent);
  const path = file.data.path?.length ? file.data.path : file.path;
  const dir = path2dir(path);
  const name = name2str(path2name(path));
  for (const g of dir.split('/')) {
    if (!parent.children?.find((c) => c.rpath === g)) parent.children = [...(parent.children ?? []), { rpath: g }];
    parent = parent.children.find((c) => c.rpath === g);
  }
  const index = parent.children?.findIndex((c) => c.rpath === name);
  if (index >= 0) parent.children[index] = { ...parent.children[index], ...file.data };
  else parent.children = [...(parent.children ?? []), { ...file.data, path, rpath: name }];
}
function modules2routes(modules) {
  const fileData = Object.keys(modules).map((k) => ({ path: k.slice(prefix.length), data: modules[k].default }));
  const routeData = {};
  for (const f of fileData.filter((f) => f.data)) file2obj(f, routeData);
  return routeData;
}

const flattenCheck = (c, p) => p?.component && c.component.toString() === p.component.toString();
const pathCombine = (p1, p2) => (p2.charAt(0) === '/' ? p2 : p1.charAt(p1.length - 1) === '/' ? `${p1}${p2}` : `${p1}/${p2}`);

function flattenRoutes(current, parent, routes, omittedNode) {
  const flag = flattenCheck(current, parent);
  let curRoute = routes;
  if (flag && !current.children) console.log('fatal error for node %o', current);

  if (!flag) {
    if (!routes.children) routes.children = [];
    const info = omittedNode ? { path: pathCombine(omittedNode.path, current.path) } : {};
    routes.children.push({ ...current, ...info, children: undefined });
    curRoute = routes.children[routes.children.length - 1];
  } else {
    if (parent.redirect && current.redirect) {
      if (current.redirect.includes(parent.redirect)) parent.redirect = current.redirect;
      else if (current.redirect.charAt(0) !== '/') parent.redirect = parent.redirect + '/' + current.redirect;
    }
  }
  // console.log('current path %s, flag %o, omittedNode path %s, curRoute path %s', current.path, flag, omittedNode?.path, curRoute.path);

  if (!current.children) return routes;
  for (const c of current.children) flattenRoutes(c, curRoute, curRoute, flag ? current : null);
  return routes;
}

function trimRoutes(data) {
  for (const r of data) {
    r.children = r.children?.filter((c) => c);
    if (!r.children?.length) r.children = undefined;
    else trimRoutes(r.children);
  }
}
function sortRoutes(data, f = (a, b) => b.meta?.orderNo ?? 10000 - a.meta?.orderNo ?? 10000) {
  data.sort(f);
  for (const r of data) if (r.children) sortRoutes(r.children, f);
}

const routes = modules2routes(modules);
sortRoutes(routes.children);
const froutes = flattenRoutes(routes, null, {}, '');
// console.log(froutes.children[0].children[0]);

export { routes, froutes, flattenRoutes, trimRoutes, sortRoutes };
