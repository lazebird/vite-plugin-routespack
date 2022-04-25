import type { AppRouteModule } from '@/router/types';

import { t } from '@/router/useI18n';
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
      component: () => import('@/views/test.vue'),
      meta: { title: t('app.modbus.title') },
    },
    {
      path: 'ioctl',
      name: 'IoctlConfiguration',
      component: () => import('@/views/test.vue'),
      meta: { title: t('app.ioctl.title') },
    },
  ],
};

export default route;
