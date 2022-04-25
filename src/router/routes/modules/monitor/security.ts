import type { AppRouteModule } from '@/router/types';

import { t } from '@/hooks/web/useI18n';

const route: AppRouteModule = {
  path: '/monitor/security',
  name: 'Security',
  component: () => import('@/views/security/security.vue'),
  meta: {
    orderNo: 40,
    title: t('app.route.basic.security'),
  },
};

export default route;
