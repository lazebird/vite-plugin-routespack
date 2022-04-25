import type { AppRouteModule } from '@/router/types';

import { t } from '@/router/useI18n';

const route: AppRouteModule = {
  path: '/monitor/loop-protection',
  name: 'Loop Protection',
  component: () => import('@/views/test.vue'),
  meta: {
    orderNo: 30,
    title: t('app.route.basic.loopProtect'),
  },
};

export default route;
