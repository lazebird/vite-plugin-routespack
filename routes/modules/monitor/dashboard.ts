import type { AppRouteModule } from '@/router/types';

import { t } from '@/router/useI18n';

const dashboard: AppRouteModule = {
  path: '/monitor/dashboard',
  name: 'Dashboard',
  component: () => import('@/views/test.vue'),
  meta: {
    // affix: true,
    orderNo: 10,
    title: t('app.route.monitor.dashboard'),
    ignoreKeepAlive: true,
  },
};

export default dashboard;
