import type { AppRouteModule } from '@/router/types';

import { t } from '@/hooks/web/useI18n';

const route: AppRouteModule = {
  path: '/diag/collect',
  name: 'Collect',
  component: () => import('@/views/diag/collect.vue'),
  meta: {
    orderNo: 30,
    title: t('app.collect.title'),
  },
};

export default route;
