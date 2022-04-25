import type { AppRouteModule } from '@/router/types';

import { t } from '@/hooks/web/useI18n';

const route: AppRouteModule = {
  path: '/maintenance/user',
  name: 'UserConf',
  component: () => import('@/views/maintenance/user.vue'),
  meta: {
    orderNo: 50,
    title: t('app.user.title'),
  },
};

export default route;
