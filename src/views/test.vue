<template>
  <div>
    <button style="float: right; margin-right: 40px" onclick="location.href = '/';">Home</button>
    <div>APP route: </div> <pre>{{ JSON.stringify(route, null, 2) }}</pre>
  </div>
</template>
<script setup>
  import { ref } from 'vue';
  import { useRoute } from 'vue-router';

  const route = ref(useRoute());
</script>
