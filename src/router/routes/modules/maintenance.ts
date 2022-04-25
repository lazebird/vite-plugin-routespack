import type { AppRouteModule } from '@/router/types';

import { LAYOUT } from '@/router/constant';
import { t } from '@/hooks/web/useI18n';

const route: AppRouteModule = {
  path: '/maintenance',
  name: 'Maintenance',
  component: LAYOUT,
  redirect: '/maintenance/sysconf',
  meta: {
    orderNo: 50,
    icon: 'maintenance|svg',
    title: t('app.route.maintenance.maintenance'),
  },
  children: [],
};

function children_sort(a, b) {
  return a.meta.orderNo - b.meta.orderNo;
}
const modules = import.meta.globEager('./maintenance/*.ts');
Object.keys(modules).forEach((key) => {
  const mod = modules[key].default || {};
  const modList = Array.isArray(mod) ? [...mod] : [mod];
  route.children?.push(...modList);
  route.children?.sort(children_sort);
});

export default route;
