import type { AppRouteRecordRaw } from '@/router/types';

import { t } from '@/router/useI18n';

const route: AppRouteRecordRaw = {
  path: '/',
  name: 'Home',
  redirect: '/monitor',
  meta: {
    title: t('app.route.basic.home'),
  },
};

export default route;
