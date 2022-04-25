import type { AppRouteModule } from '@/router/types';

import { t } from '@/hooks/web/useI18n';

const route: AppRouteModule = {
  path: '/monitor/igsp',
  name: 'IGSPInfo',
  component: () => import('@/views/igsp/info.vue'),
  meta: {
    orderNo: 70,
    title: t('app.igsp.info'),
  },
};

export default route;
