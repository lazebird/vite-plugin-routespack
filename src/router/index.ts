import type { App } from 'vue';

import { createRouter, createWebHashHistory } from 'vue-router';
import { froutes as fRoutes } from '@/components/routespack/code';

export const routes = [...fRoutes.children[0].children[0].children];
// routes.push({ path: '/', redirect: '/routes', component: () => import('@/layout/test.vue'), children: [{ path: 'routes', component: () => import('@/views/routes.vue') }] });
routes.push({ path: '/', redirect: '/monitor' });
routes.push({ path: '/routes', component: () => import('@/views/routes.vue') });

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
  // strict: true,
  // scrollBehavior: () => ({ left: 0, top: 0 }),
});

// console.log(routes, router.getRoutes());

// config router
export function setupRouter(app: App<Element>) {
  app.use(router);
}
