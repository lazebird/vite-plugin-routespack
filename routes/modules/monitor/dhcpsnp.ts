import type { AppRouteModule } from '@/router/types';

import { t } from '@/router/useI18n';

const route: AppRouteModule = {
  path: '/monitor/dhcpsnp',
  name: 'DHCPSNPInfo',
  component: () => import('@/views/test.vue'),
  meta: {
    orderNo: 80,
    title: t('app.dhcpsnp.info'),
  },
};

export default route;
