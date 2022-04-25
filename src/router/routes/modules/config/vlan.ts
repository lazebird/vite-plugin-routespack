import type { AppRouteModule } from '@/router/types';

import { t } from '@/hooks/web/useI18n';

const route: AppRouteModule = {
  path: '/config/vlan',
  name: 'VLANConfiguration',
  component: () => import('@/views/vlan/config.vue'),
  meta: {
    orderNo: 10,
    title: t('app.route.config.vlan'),
  },
};

export default route;
