import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import Components from 'unplugin-vue-components/vite';
// import vitePluginroutespack from './src/components/routespack/index';

import visualizer from 'rollup-plugin-visualizer';
const plugins = [];
if (process.env.REPORT === 'true') plugins.push(visualizer({ open: true, gzipSize: true, brotliSize: true }));

function pathResolve(dir: string) {
  return resolve(process.cwd(), '.', dir);
}

const buildlib = {
  lib: {
    entry: pathResolve('src/components/routespack/index.ts'),
    name: 'vite-plugin-routespack',
    fileName: (format) => `vite-plugin-routespack.${format}.js`,
  },
  sourcemap: true,
  rollupOptions: {
    external: ['vue', 'fs', 'path'],
    output: { globals: { vue: 'Vue', fs: 'fs', path: 'path' } },
  },
};
const builddemo = {};

export default defineConfig(({ command, mode }) => {
  // if (mode !== 'build') plugins.push(vitePluginroutespack({ dir: '/routes', log: { level: 6, filters: ['/node_modules/'], maxLen: 200 } }));
  console.log('[vite.config.ts] command %s, mode %s, plugins %s', command, mode, JSON.stringify(plugins));
  return {
    base: './',
    resolve: {
      alias: [
        { find: /@\//, replacement: pathResolve('src') + '/' },
        { find: /#\//, replacement: pathResolve('types') + '/' },
      ],
    },
    plugins: [vue(), Components({}), ...plugins],
    build: mode === 'demo' ? builddemo : buildlib,
    server: { host: true },
  };
});
