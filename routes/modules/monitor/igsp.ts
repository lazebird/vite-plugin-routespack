import type { AppRouteModule } from '@/router/types';

import { t } from '@/router/useI18n';

const route: AppRouteModule = {
  path: '/monitor/igsp',
  name: 'IGSPInfo',
  component: () => import('@/views/test.vue'),
  meta: {
    orderNo: 70,
    title: t('app.igsp.info'),
  },
};

export default route;
