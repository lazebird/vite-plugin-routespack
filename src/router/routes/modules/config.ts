import type { AppRouteModule } from '@/router/types';

import { LAYOUT } from '@/router/constant';
import { t } from '@/hooks/web/useI18n';

const route: AppRouteModule = {
  path: '/config',
  name: 'Configuration',
  component: LAYOUT,
  redirect: '/config/port',
  meta: {
    orderNo: 20,
    icon: 'config|svg',
    title: t('app.route.config.config'),
  },
  children: [],
};

function children_sort(a, b) {
  return a.meta.orderNo - b.meta.orderNo;
}
const modules = import.meta.globEager('./config/*.ts');
Object.keys(modules).forEach((key) => {
  const mod = modules[key].default || {};
  const modList = Array.isArray(mod) ? [...mod] : [mod];
  route.children?.push(...modList);
  route.children?.sort(children_sort);
});

export default route;
