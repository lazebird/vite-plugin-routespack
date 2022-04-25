import type { AppRouteModule } from '@/router/types';

import { LAYOUT } from '@/router/constant';
import { t } from '@/router/useI18n';

const route: AppRouteModule = {
  path: '/diag',
  name: 'Diagnose',
  component: LAYOUT,
  redirect: '/diag/app',
  meta: {
    orderNo: 60,
    icon: 'diagnose|svg',
    title: t('app.route.diagnose.diagnose'),
  },
  children: [],
};

export default route;
