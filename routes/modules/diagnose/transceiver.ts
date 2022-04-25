import type { AppRouteModule } from '@/router/types';

import { t } from '@/router/useI18n';

const route: AppRouteModule = {
  path: '/diag/transceiver',
  name: 'Transceiver',
  component: () => import('@/views/test.vue'),
  meta: {
    orderNo: 20,
    title: t('app.transceiver.title'),
  },
};

export default route;
