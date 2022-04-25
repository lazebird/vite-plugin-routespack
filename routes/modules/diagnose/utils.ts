import type { AppRouteModule } from '@/router/types';

import { t } from '@/router/useI18n';

const route: AppRouteModule = {
  path: '/diag/utils',
  name: 'NetUtils',
  component: () => import('@/views/test.vue'),
  meta: {
    orderNo: 10,
    title: t('app.utils.title'),
  },
};

export default route;
