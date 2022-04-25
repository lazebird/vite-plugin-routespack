import type { AppRouteRecordRaw } from '@/router/types';

import { t } from '@/router/useI18n';

const route: AppRouteRecordRaw = {
  path: '/routes',
  name: 'Routes',
  component: () => import('@/views/routes.vue'),
  meta: {
    title: t('app.route.basic.routes'),
  },
};

export default route;
