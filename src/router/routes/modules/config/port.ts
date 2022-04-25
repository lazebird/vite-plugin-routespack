import type { AppRouteModule } from '@/router/types';

import { LAYOUT } from '@/router/constant';
import { t } from '@/hooks/web/useI18n';

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
      component: () => import('@/views/port/config.vue'),
      meta: { title: t('app.port.config') },
    },
    {
      path: 'ratelimit',
      name: 'RateLimit',
      component: () => import('@/views/port/ratelimit.vue'),
      meta: { title: t('app.port.ratelimit') },
    },
    {
      path: 'storm',
      name: 'StormControl',
      component: () => import('@/views/port/storm.vue'),
      meta: { title: t('app.port.storm') },
    },
    {
      path: 'mirror',
      name: 'Mirror',
      component: () => import('@/views/port/mirror.vue'),
      meta: { title: t('app.port.mirror') },
    },
    {
      path: 'isolate',
      name: 'Isolate',
      component: () => import('@/views/port/isolate.vue'),
      meta: { title: t('app.port.isolate') },
    },
    {
      path: 'agg',
      name: 'Aggregation',
      component: () => import('@/views/port/agg.vue'),
      meta: { title: t('app.port.agg') },
    },
  ],
};

export default port;
