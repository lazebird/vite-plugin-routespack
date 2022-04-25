import type { AppRouteModule } from '@/router/types';

import { t } from '@/router/useI18n';

const route: AppRouteModule = {
  path: '/maintenance/file',
  name: 'FileMgmt',
  component: () => import('@/views/test.vue'),
  meta: {
    orderNo: 40,
    title: t('app.file.title'),
  },
};

export default route;
