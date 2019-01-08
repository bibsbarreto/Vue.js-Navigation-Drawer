<template>
  <v-layout fill-height class="main-container">
    <v-flex xs3>
      <nav-drawer-component/>
    </v-flex>
  </v-layout>
</template>

<script>
  import NavDrawerComponent from '@/components/Globals/NavigationDrawer';

  export default {
    name: 'Home',
    components: { NavDrawerComponent },
  };
</script>

<style lang="scss">
  .main-container {
    width: 100%;
    height: 1024px;
    background-color: #F1F5F8;
  }
</style>
