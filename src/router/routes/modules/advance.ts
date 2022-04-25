import type { AppRouteModule } from '@/router/types';

import { LAYOUT } from '@/router/constant';
import { t } from '@/hooks/web/useI18n';

const route: AppRouteModule = {
  path: '/advance',
  name: 'Advance',
  component: LAYOUT,
  redirect: '/advance/app',
  meta: {
    orderNo: 30,
    icon: 'Advanced|svg',
    title: t('app.route.advance.advance'),
  },
  children: [],
};

function children_sort(a, b) {
  return a.meta.orderNo - b.meta.orderNo;
}
const modules = import.meta.globEager('./advance/*.ts');
Object.keys(modules).forEach((key) => {
  const mod = modules[key].default || {};
  const modList = Array.isArray(mod) ? [...mod] : [mod];
  route.children?.push(...modList);
  route.children?.sort(children_sort);
});

export default route;
