import type { AppRouteModule } from '@/router/types';

import { LAYOUT } from '@/router/constant';
import { t } from '@/router/useI18n';

const port: AppRouteModule = {
  path: '/config/port',
  name: 'Port',
  component: LAYOUT,
  redirect: '/config/port/config',
  meta: {
    orderNo: 20,
    title: t('app.port.port'),
  },
  children: [
    {
      path: 'config',
      name: 'Configuration',
      component: () => import('@/views/test.vue'),
      meta: { title: t('app.port.config') },
    },
    {
      path: 'ratelimit',
      name: 'RateLimit',
      component: () => import('@/views/test.vue'),
      meta: { title: t('app.port.ratelimit') },
    },
    {
      path: 'storm',
      name: 'StormControl',
      component: () => import('@/views/test.vue'),
      meta: { title: t('app.port.storm') },
    },
    {
      path: 'mirror',
      name: 'Mirror',
      component: () => import('@/views/test.vue'),
      meta: { title: t('app.port.mirror') },
    },
    {
      path: 'isolate',
      name: 'Isolate',
      component: () => import('@/views/test.vue'),
      meta: { title: t('app.port.isolate') },
    },
    {
      path: 'agg',
      name: 'Aggregation',
      component: () => import('@/views/test.vue'),
      meta: { title: t('app.port.agg') },
    },
  ],
};

export default port;
