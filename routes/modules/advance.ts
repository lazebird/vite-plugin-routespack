import type { AppRouteModule } from '@/router/types';

import { LAYOUT } from '@/router/constant';
import { t } from '@/router/useI18n';

const route: AppRouteModule = {
  path: '/advance',
  name: 'Advance',
  component: LAYOUT,
  redirect: '/advance/app',
  meta: {
    orderNo: 30,
    icon: 'Advanced|svg',
    title: t('app.route.advance.advance'),
  },
  children: [],
};

export default route;
