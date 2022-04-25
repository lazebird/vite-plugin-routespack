import type { AppRouteModule } from '@/router/types';

import { t } from '@/hooks/web/useI18n';

const route: AppRouteModule = {
  path: '/monitor/arp',
  name: 'ARPInfo',
  component: () => import('@/views/arp/info.vue'),
  meta: {
    orderNo: 100,
    title: t('app.arp.info'),
  },
};

export default route;
