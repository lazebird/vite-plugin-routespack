import type { AppRouteModule } from '@/router/types';

import { t } from '@/hooks/web/useI18n';

const route: AppRouteModule = {
  path: '/maintenance/time',
  name: 'TimeConf',
  component: () => import('@/views/maintenance/time.vue'),
  meta: {
    orderNo: 60,
    title: t('app.time.title'),
  },
};

export default route;
