<template>
  <div>
    <div v-for="(r, index) in data" :key="index">
      <div :style="containerCss + calcCss(prefix, r.path)">
        <RouterLink :style="linkCss + calcCss(prefix, r.path)" :to="calcPath(prefix, r.path)">{{ calcLabel(r.path) }}</RouterLink>
      </div>
      <Menu v-if="r.children" :data="r.children" :depth="depth + 1" :prefix="calcPath(prefix, r.path)" />
    </div>
  </div>
</template>
<script>
  export default { name: 'Menu' };
</script>
<script setup>
  import { RouterLink, useRoute } from 'vue-router';

  const props = defineProps({ data: { type: Array, required: true }, depth: { type: Number, default: 0 }, prefix: { type: String, default: '' } });

  const calcPath = (prefix, path) => (path.charAt(0) === '/' ? path : `${prefix}/${path}`);
  const calcLabel = (path) => (path !== '/' && path.lastIndexOf('/') >= 0 ? path.slice(path.lastIndexOf('/') + 1) : path);

  const containerCss = `width: 100%; padding: 3px 0px;`;
  const linkCss = `padding-left: ${20 * props.depth}px;`;
  const matchPage = (prefix, path) => useRoute().path === calcPath(prefix, path);
  const matchParent = (prefix, path) => useRoute().path.includes(calcPath(prefix, path) + '/');
  const calcCss = (prefix, path) => (matchPage(prefix, path) ? 'color: white; background: blue' : matchParent(prefix, path) ? 'color: blue' : 'color: gray');
</script>
