<template>
  <div>
    <div style="text-align: center">
      <label for="showBrief">showBrief</label>
      <input type="checkbox" id="showBrief" v-model="showBrief" />
      <a style="text-decoration: underline; color: blue; margin-left: 40px" onclick="location.href = '/';">Back to Home</a>
    </div>
    <div style="display: flex">
      <div style="width: 33%">
        <div class="copy" @click="copy(JSON.stringify(vModules, showBrief ? moduleReplacer : null, 2))"> Modules <span class="tips">Click to Copy</span> </div>
        <pre>{{ JSON.stringify(vModules, showBrief ? moduleReplacer : null, 2) }}</pre>
      </div>
      <div style="width: 33%">
        <div class="copy" @click="copy(JSON.stringify(vRoutes, showBrief ? routeReplacer : null, 2))"> Routes <span class="tips">Click to Copy</span> </div>
        <pre>{{ JSON.stringify(vRoutes, showBrief ? routeReplacer : null, 2) }}</pre>
      </div>
      <div style="width: 33%">
        <div class="copy" @click="copy(JSON.stringify(fRoutes, showBrief ? routeReplacer : null, 2))"> Flat Routes <span class="tips">Click to Copy</span> </div>
        <pre>{{ JSON.stringify(fRoutes, showBrief ? routeReplacer : null, 2) }}</pre>
      </div>
    </div>
  </div>
</template>
<script setup>
  import { ref } from 'vue';
  // import { routes as vRoutes, modules as vModules } from 'virtual:routes';
  import { modules as vModules, routes as vRoutes, froutes as fRoutes } from '@/components/routespack/code';

  console.log('routes %o, froutes %o', vRoutes, fRoutes);

  const showBrief = ref(true);

  const moduleReplacer = (k, v) => (!k.length || k.includes('.ts') ? v : '...');
  const excludeOpts = [
    { ktype: 'string', kval: 'name' },
    { ktype: 'string', kval: 'meta' },
  ];
  const routeReplacer = (k, v) => (excludeOpts.find((e) => e.ktype === typeof k && e.kval === k) ? undefined : typeof v === 'function' ? v.toString() : v);
  // const routeReplacer = (k, v) => (console.log('type k %s, k %o, type v %s, v %o', typeof k, k, typeof v, v), v); // for children array, typeof k === 'string', k === '0'; for component, typeof v === 'function'

  const copy = (s) => navigator.clipboard?.writeText(s);
</script>
<style scoped>
  .copy {
    font-size: 2em;
    font-weight: bold;
    text-decoration: underline;
  }
  .copy .tips {
    position: absolute;
    z-index: 1;
    font-size: small;
    font-weight: lighter;
    color: blue;
    padding: 10px;
    display: none;
  }
  .copy:hover .tips {
    display: inline;
  }
  pre {
    white-space: pre-wrap;
  }
</style>
