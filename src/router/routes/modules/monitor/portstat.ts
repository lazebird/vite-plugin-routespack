import type { AppRouteModule } from '@/router/types';

import { t } from '@/hooks/web/useI18n';

const route: AppRouteModule = {
  path: '/monitor/portstat',
  name: 'Port Statistics',
  component: () => import('@/views/port/stat.vue'),
  meta: {
    orderNo: 20,
    title: t('app.port.stat'),
  },
};

export default route;
