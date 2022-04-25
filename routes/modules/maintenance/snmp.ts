import type { AppRouteModule } from '@/router/types';

import { t } from '@/router/useI18n';

const route: AppRouteModule = {
  path: '/maintenance/snmp',
  name: 'SNMPConf',
  component: () => import('@/views/test.vue'),
  meta: {
    orderNo: 70,
    title: t('app.snmp.title'),
  },
};

export default route;
