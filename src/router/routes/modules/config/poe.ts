import type { AppRouteModule } from '@/router/types';

import { t } from '@/hooks/web/useI18n';

const route: AppRouteModule = {
  path: '/config/poe',
  name: 'PoEConfiguration',
  component: () => import('@/views/poe/config.vue'),
  meta: {
    orderNo: 40,
    title: t('app.poe.title'),
  },
};

export default route;
