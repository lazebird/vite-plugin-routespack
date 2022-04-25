import type { AppRouteModule } from '@/router/types';

import { LAYOUT } from '@/router/constant';
import { t } from '@/hooks/web/useI18n';

const app: AppRouteModule = {
  path: '/advance/l2',
  name: 'Layer2',
  component: LAYOUT,
  redirect: '/advance/l2/lldp',
  meta: {
    orderNo: 20,
    title: t('app.route.basic.l2'),
  },
  children: [
    {
      path: 'lldp',
      name: 'LLDPConf',
      component: () => import('@/views/lldp/config.vue'),
      meta: {
        title: t('app.lldp.conf'),
      },
    },
    {
      path: 'igsp',
      name: 'IGSPConf',
      component: () => import('@/views/igsp/config.vue'),
      meta: {
        title: t('app.igsp.conf'),
      },
    },
    {
      path: 'macmgmt',
      name: 'MACConf',
      component: () => import('@/views/mac/config.vue'),
      meta: {
        title: t('app.mac.conf'),
      },
    },
    {
      path: 'dhcpsnp',
      name: 'DHCPSNPConf',
      component: () => import('@/views/dhcpsnp/config.vue'),
      meta: {
        title: t('app.dhcpsnp.conf'),
      },
    },
    {
      path: 'qinq',
      name: 'QINQConf',
      component: () => import('@/views/qinq/config.vue'),
      meta: {
        title: t('app.qinq.conf'),
      },
    },
  ],
};

export default app;
