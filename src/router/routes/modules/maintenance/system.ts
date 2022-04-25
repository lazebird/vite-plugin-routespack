import type { AppRouteModule } from '@/router/types';

import { t } from '@/hooks/web/useI18n';

const route: AppRouteModule = {
  path: '/maintenance/sysconf',
  name: 'SysConf',
  component: () => import('@/views/system/config.vue'),
  meta: {
    orderNo: 30,
    title: t('app.sys.config'),
  },
};

export default route;
