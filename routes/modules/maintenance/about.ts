import type { AppRouteModule } from '@/router/types';

import { LAYOUT } from '@/router/constant';
import { t } from '@/router/useI18n';

const dashboard: AppRouteModule = {
  path: '/maintenance/about',
  name: 'About',
  component: LAYOUT,
  redirect: '/maintenance/about/index',
  meta: {
    hideMenu: true,
    hideBreadcrumb: true,
    hideChildrenInMenu: true,
    title: t('app.route.maintenance.about'),
    orderNo: 100000,
  },
  children: [
    {
      path: 'index',
      name: 'AboutPage',
      component: () => import('@/views/test.vue'),
      meta: {
        title: t('app.route.maintenance.about'),
        icon: 'simple-icons:about-dot-me',
        hideMenu: true,
        hideBreadcrumb: true,
      },
    },
  ],
};

export default dashboard;
