<template>
  <div>
    <div>{{ 'APP URI: ' + uri }}</div>
    <div style="text-decoration: underline; color: blue" onclick="location.href = '/';">Back to Home</div>
  </div>
</template>
<script setup>
  import { ref } from 'vue';
  import { useRoute } from 'vue-router';

  const uri = ref(useRoute().path);
</script>
