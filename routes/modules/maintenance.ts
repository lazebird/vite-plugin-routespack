import type { AppRouteModule } from '@/router/types';

import { LAYOUT } from '@/router/constant';
import { t } from '@/router/useI18n';

const route: AppRouteModule = {
  path: '/maintenance',
  name: 'Maintenance',
  component: LAYOUT,
  redirect: '/maintenance/sysconf',
  meta: {
    orderNo: 50,
    icon: 'maintenance|svg',
    title: t('app.route.maintenance.maintenance'),
  },
  children: [],
};

export default route;
