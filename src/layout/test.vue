<template>
  <div style="display: flex">
    <div style="width: 20%; overflow: auto" :style="`height: ${pageHeight()}px`"> <menuVue :data="routes" /> </div>
    <div style="width: 80%; margin-left: 10px">
      <div>{{ 'Layout URI: ' + route.fullPath }}</div>
      <RouterView :key="route.fullPath" />
    </div>
  </div>
</template>
<script setup>
  import { RouterView, useRoute } from 'vue-router';
  import menuVue from './menu.vue';
  import { routes } from '@/router';
  import { ref } from 'vue';

  // console.log(routes);
  const route = ref(useRoute());

  const pageHeight = () => window.innerHeight - 80;
</script>
