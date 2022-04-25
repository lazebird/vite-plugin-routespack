import type { AppRouteModule } from '@/router/types';

import { t } from '@/hooks/web/useI18n';

const route: AppRouteModule = {
  path: '/maintenance/snmp',
  name: 'SNMPConf',
  component: () => import('@/views/maintenance/snmp.vue'),
  meta: {
    orderNo: 70,
    title: t('app.snmp.title'),
  },
};

export default route;
