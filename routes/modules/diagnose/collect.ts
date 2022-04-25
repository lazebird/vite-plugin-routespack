import type { AppRouteModule } from '@/router/types';

import { t } from '@/router/useI18n';

const route: AppRouteModule = {
  path: '/diag/collect',
  name: 'Collect',
  component: () => import('@/views/test.vue'),
  meta: {
    orderNo: 30,
    title: t('app.collect.title'),
  },
};

export default route;
