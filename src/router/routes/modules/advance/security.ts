import type { AppRouteModule } from '@/router/types';

import { LAYOUT } from '@/router/constant';
import { t } from '@/hooks/web/useI18n';

const app: AppRouteModule = {
  path: '/advance/security',
  name: 'Security',
  component: LAYOUT,
  redirect: '/advance/security/acl',
  meta: {
    orderNo: 30,
    title: t('app.route.basic.security'),
  },
  children: [
    {
      path: 'acl',
      name: 'ACLConf',
      component: () => import('@/views/acl/config.vue'),
      meta: {
        title: t('app.acl.conf'),
      },
    },
    {
      path: 'qos',
      name: 'QOSConf',
      component: () => import('@/views/qos/config.vue'),
      meta: {
        title: t('app.qos.conf'),
      },
    },
  ],
};

export default app;
