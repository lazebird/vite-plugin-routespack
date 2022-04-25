import type { AppRouteModule } from '@/router/types';

import { t } from '@/router/useI18n';

const route: AppRouteModule = {
  path: '/monitor/control',
  name: 'Control',
  component: () => import('@/views/test.vue'),
  meta: {
    orderNo: 50,
    title: t('app.route.basic.control'),
  },
};

export default route;
