import type { AppRouteModule } from '@/router/types';

import { t } from '@/hooks/web/useI18n';

const route: AppRouteModule = {
  path: '/config/erps',
  name: 'ERPSConfiguration',
  component: () => import('@/views/erps/config.vue'),
  meta: {
    orderNo: 35,
    title: t('app.erps.erps'),
  },
};

export default route;
