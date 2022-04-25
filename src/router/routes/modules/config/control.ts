import type { AppRouteModule } from '@/router/types';

import { t } from '@/hooks/web/useI18n';
import { LAYOUT } from '@/router/constant';

const route: AppRouteModule = {
  path: '/config/control',
  name: 'Control',
  component: LAYOUT,
  redirect: '/config/control/modbus',
  meta: {
    orderNo: 60,
    title: t('app.route.basic.control'),
  },
  children: [
    {
      path: 'modbus',
      name: 'ModbusConfiguration',
      component: () => import('@/views/control/modbus/config.vue'),
      meta: { title: t('app.modbus.title') },
    },
    {
      path: 'ioctl',
      name: 'IoctlConfiguration',
      component: () => import('@/views/control/ioctl/config.vue'),
      meta: { title: t('app.ioctl.title') },
    },
  ],
};

export default route;
