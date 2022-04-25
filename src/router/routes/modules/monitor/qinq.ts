import type { AppRouteModule } from '@/router/types';

import { t } from '@/hooks/web/useI18n';

const route: AppRouteModule = {
  path: '/monitor/qinq',
  name: 'QINQInfo',
  component: () => import('@/views/qinq/info.vue'),
  meta: {
    orderNo: 90,
    title: t('app.qinq.info'),
  },
};

export default route;
