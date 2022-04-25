import type { AppRouteModule } from '@/router/types';

import { LAYOUT } from '@/router/constant';
import { t } from '@/router/useI18n';

const route: AppRouteModule = {
  path: '/config',
  name: 'Configuration',
  component: LAYOUT,
  redirect: '/config/port',
  meta: {
    orderNo: 20,
    icon: 'config|svg',
    title: t('app.route.config.config'),
  },
  children: [],
};

export default route;
