import type { AppRouteModule } from '@/router/types';

import { t } from '@/hooks/web/useI18n';

const dashboard: AppRouteModule = {
  path: '/monitor/dashboard',
  name: 'Dashboard',
  component: () => import('@/views/dashboard/index.vue'),
  meta: {
    // affix: true,
    orderNo: 10,
    title: t('app.route.monitor.dashboard'),
    ignoreKeepAlive: true,
  },
};

export default dashboard;
