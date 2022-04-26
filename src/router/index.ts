import type { App } from 'vue';

import { createRouter, createWebHashHistory } from 'vue-router';
// import { froutes, routes } from '@/components/routespack/code';
import { froutes, routes } from 'virtual:routes';

export { routes };

export const router = createRouter({ history: createWebHashHistory(), routes: froutes });
export const setupRouter = (app: App<Element>) => app.use(router);
