import type { AppRouteModule } from '@/router/types';

import { t } from '@/router/useI18n';
import { LAYOUT } from '@/router/constant';

const route: AppRouteModule = {
  path: '/config/security',
  name: 'Security',
  component: LAYOUT,
  redirect: '/config/security/psec',
  meta: {
    orderNo: 50,
    title: t('app.route.basic.security'),
  },
  children: [
    {
      path: 'psec',
      name: 'PortSecurityConfiguration',
      component: () => import('@/views/test.vue'),
      meta: { title: t('app.psec.title') },
    },
    {
      path: 'ipsg',
      name: 'IPSGConfiguration',
      component: () => import('@/views/test.vue'),
      meta: { title: t('app.ipsg.title') },
    },
    {
      path: 'dot1x',
      name: 'Dot1xConfiguration',
      component: () => import('@/views/test.vue'),
      meta: { title: t('app.dot1x.title') },
    },
    {
      path: 'macauth',
      name: 'MacAuthConfiguration',
      component: () => import('@/views/test.vue'),
      meta: { title: t('app.macauth.title') },
    },
    {
      path: 'rad',
      name: 'RadConfiguration',
      component: () => import('@/views/test.vue'),
      meta: { title: t('app.rad.title') },
    },
  ],
};

export default route;
