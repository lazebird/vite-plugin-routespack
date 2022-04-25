import type { AppRouteModule } from '@/router/types';

import { LAYOUT } from '@/router/constant';
import { t } from '@/hooks/web/useI18n';

const route: AppRouteModule = {
  path: '/diag',
  name: 'Diagnose',
  component: LAYOUT,
  redirect: '/diag/app',
  meta: {
    orderNo: 60,
    icon: 'diagnose|svg',
    title: t('app.route.diagnose.diagnose'),
  },
  children: [],
};

function children_sort(a, b) {
  return a.meta.orderNo - b.meta.orderNo;
}
const modules = import.meta.globEager('./diagnose/*.ts');
Object.keys(modules).forEach((key) => {
  const mod = modules[key].default || {};
  const modList = Array.isArray(mod) ? [...mod] : [mod];
  route.children?.push(...modList);
  route.children?.sort(children_sort);
});

export default route;
