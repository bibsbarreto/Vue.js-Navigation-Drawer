<template>
  <v-app>
    <home/>
  </v-app>
</template>

<script>
  import Home from '@/views/Home';

  export default {
    name: 'App',
    components: { Home },
  };
</script>

<style lang="scss">
  @import './assets/scss/main';
</style>
