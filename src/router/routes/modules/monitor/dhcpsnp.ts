import type { AppRouteModule } from '@/router/types';

import { t } from '@/hooks/web/useI18n';

const route: AppRouteModule = {
  path: '/monitor/dhcpsnp',
  name: 'DHCPSNPInfo',
  component: () => import('@/views/dhcpsnp/info.vue'),
  meta: {
    orderNo: 80,
    title: t('app.dhcpsnp.info'),
  },
};

export default route;
