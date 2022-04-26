# @lazebird/vite-plugin-routespack

## 介绍

- 自动将项目路由目录转换为路由数据对象，支持路由扁平化
- <a href="https://lazebird.github.io/vite-plugin-routespack/" target="_blank">预览</a>
- <a href="https://www.npmjs.com/package/@lazebird/vite-plugin-routespack" target="_blank">npmjs</a>

## 安装

- `pnpm i -D @lazebird/vite-plugin-routespack`

## 用法

- 详细内容可以参考项目示例和源码；有问题请提 issue

```
// vite.config.ts
import vitePluginroutespack from '@lazebird/vite-plugin-routespack';
plugins.push(vitePluginroutespack({ dir: '/routes'}));
// 业务
import {froutes} from 'virtual:routes';
export const router = createRouter({ history: createWebHashHistory(), routes: froutes });
export const setupRouter = (app: App<Element>) => app.use(router);
```

## Todo

- [ ] 支持调试信息控制
- [ ] 支持多目录路由
- [ ] 支持路由数据校验
- [ ] 重构，在插件中进行数据处理，代替现在返回大段处理代码的方式

## 问题
