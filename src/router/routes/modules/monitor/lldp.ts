import type { AppRouteModule } from '@/router/types';

import { t } from '@/hooks/web/useI18n';

const route: AppRouteModule = {
  path: '/monitor/lldp',
  name: 'LLDPInfo',
  component: () => import('@/views/lldp/info.vue'),
  meta: {
    orderNo: 60,
    title: t('app.lldp.info'),
  },
};

export default route;
