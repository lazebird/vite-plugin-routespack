<template>
  <div>
    <div v-for="(r, index) in data" :key="index">
      <RouterLink :style="'margin-left: ' + 20 * depth + 'px'" :to="calcPath(prefix, r.path)">{{ r.path }}</RouterLink>
      <Menu v-if="r.children" :data="r.children" :depth="depth + 1" :prefix="calcPath(prefix, r.path)" />
    </div>
  </div>
</template>
<script>
  export default { name: 'Menu' };
</script>
<script setup>
  import { RouterLink } from 'vue-router';

  defineProps({ data: { type: Array, required: true }, depth: { type: Number, default: 0 }, prefix: { type: String, default: '' } });

  const calcPath = (prefix, path) => (path.charAt(0) === '/' ? path : `${prefix}/${path}`);
</script>
