<template>
  <div>
    <div>{{ 'APP URI: ' + uri }}</div>
  </div>
</template>
<script setup>
  import { ref } from 'vue';
  import { useRoute } from 'vue-router';

  const uri = ref(useRoute().path);
</script>
