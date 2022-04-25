import type { AppRouteModule } from '@/router/types';

import { t } from '@/router/useI18n';

const route: AppRouteModule = {
  path: '/config/stp',
  name: 'STPConfiguration',
  component: () => import('@/views/test.vue'),
  meta: {
    orderNo: 30,
    title: t('app.stp.stp'),
  },
};

export default route;
