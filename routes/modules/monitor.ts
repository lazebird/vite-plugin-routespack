import type { AppRouteModule } from '@/router/types';

import { LAYOUT } from '@/router/constant';
import { t } from '@/router/useI18n';

const route: AppRouteModule = {
  path: '/monitor',
  name: 'Monitor',
  component: LAYOUT,
  redirect: '/monitor/dashboard',
  meta: {
    orderNo: 10,
    icon: 'monitoring|svg',
    title: t('app.route.monitor.monitor'),
  },
  children: [],
};

export default route;
