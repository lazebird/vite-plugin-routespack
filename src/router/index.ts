import type { App } from 'vue';

import { createRouter, createWebHashHistory } from 'vue-router';
import { froutes, routes } from '@/components/routespack/code';

export { routes };

export const router = createRouter({
  history: createWebHashHistory(),
  routes: froutes,
  // strict: true,
  // scrollBehavior: () => ({ left: 0, top: 0 }),
});

// console.log(routes, router.getRoutes());

// config router
export function setupRouter(app: App<Element>) {
  app.use(router);
}
