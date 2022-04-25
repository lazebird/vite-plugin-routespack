import type { AppRouteModule } from '@/router/types';

import { LAYOUT } from '@/router/constant';
import { t } from '@/hooks/web/useI18n';

const route: AppRouteModule = {
  path: '/monitor',
  name: 'Monitor',
  component: LAYOUT,
  redirect: '/monitor/dashboard',
  meta: {
    orderNo: 10,
    icon: 'monitoring|svg',
    title: t('app.route.monitor.monitor'),
  },
  children: [],
};

function children_sort(a, b) {
  return a.meta.orderNo - b.meta.orderNo;
}
const modules = import.meta.globEager('./monitor/*.ts');
Object.keys(modules).forEach((key) => {
  const mod = modules[key].default || {};
  const modList = Array.isArray(mod) ? [...mod] : [mod];
  route.children?.push(...modList);
  route.children?.sort(children_sort);
});
// console.log('[monitor] modules %s, children %s', JSON.stringify(modules), JSON.stringify(route.children));

export default route;
