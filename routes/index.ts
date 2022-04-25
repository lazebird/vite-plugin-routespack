import type { AppRouteRecordRaw } from '@/router/types';

import { t } from '@/router/useI18n';

export const RootRoute: AppRouteRecordRaw = {
  path: '/',
  name: 'Root',
  redirect: '/monitor/dashboard',
  meta: {
    title: 'Root',
  },
};

export const LoginRoute: AppRouteRecordRaw = {
  path: '/login',
  name: 'Login',
  component: () => import('@/views/test.vue'),
  meta: {
    title: t('app.route.basic.login'),
  },
};

export const WaitRoute: AppRouteRecordRaw = {
  path: '/wait',
  name: 'Wait',
  component: () => import('@/views/test.vue'),
  meta: {
    title: t('app.route.basic.wait'),
  },
};
