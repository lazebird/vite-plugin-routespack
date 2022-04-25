<template>
  <pkgVue />
  <br />
  <RouterView />
</template>
<script setup>
  import pkgVue from './views/pkg.vue';
  import { RouterView } from 'vue-router';
</script>
