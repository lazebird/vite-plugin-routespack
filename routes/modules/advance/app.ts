import type { AppRouteModule } from '@/router/types';

import { LAYOUT } from '@/router/constant';
import { t } from '@/router/useI18n';

const app: AppRouteModule = {
  path: '/advance/app',
  name: 'Application',
  component: LAYOUT,
  redirect: '/advance/app/dhcp',
  meta: {
    orderNo: 40,
    title: t('app.route.basic.app'),
  },
  children: [
    {
      path: 'dhcp',
      name: 'DHCPServer',
      component: () => import('@/views/test.vue'),
      meta: {
        title: t('app.dhcpsrv.title'),
      },
    },
  ],
};

export default app;
