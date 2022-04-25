import type { AppRouteModule } from '@/router/types';

import { LAYOUT } from '@/router/constant';
import { t } from '@/hooks/web/useI18n';

const app: AppRouteModule = {
  path: '/advance/l3',
  name: 'Layer3',
  component: LAYOUT,
  redirect: '/advance/l3/arp',
  meta: {
    orderNo: 30,
    title: t('app.route.basic.l3'),
  },
  children: [
    {
      path: 'arp',
      name: 'ARPConf',
      component: () => import('@/views/arp/config.vue'),
      meta: {
        title: t('app.arp.conf'),
      },
    },
    {
      path: 'sroute',
      name: 'SRouteConf',
      component: () => import('@/views/sroute/config.vue'),
      meta: {
        title: t('app.sroute.conf'),
      },
    },
  ],
};

export default app;
