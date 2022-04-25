import type { AppRouteModule } from '@/router/types';

import { t } from '@/router/useI18n';

const route: AppRouteModule = {
  path: '/config/vlan',
  name: 'VLANConfiguration',
  component: () => import('@/views/test.vue'),
  meta: {
    orderNo: 10,
    title: t('app.route.config.vlan'),
  },
};

export default route;
