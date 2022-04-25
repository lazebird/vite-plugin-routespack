import type { AppRouteModule } from '@/router/types';

import { t } from '@/router/useI18n';

const route: AppRouteModule = {
  path: '/monitor/arp',
  name: 'ARPInfo',
  component: () => import('@/views/test.vue'),
  meta: {
    orderNo: 100,
    title: t('app.arp.info'),
  },
};

export default route;
