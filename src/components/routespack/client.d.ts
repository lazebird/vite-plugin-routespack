declare module 'virtual:routes' {
  import type { RouteRecordRaw } from 'vue-router';
  const modules: any[];
  const routes: RouteRecordRaw[];
  const froutes: RouteRecordRaw[];
  const flattenRoutes: (_current: RouteRecordRaw, _parent: RouteRecordRaw, _routes: RouteRecordRaw[], _omittedNode: RouteRecordRaw) => RouteRecordRaw[];
  const sortRoutes: (_routes: RouteRecordRaw[]) => void;
  export { modules, routes, froutes, flattenRoutes, sortRoutes };
}
