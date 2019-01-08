<template>
  <v-navigation-drawer permanent fixed class="nav-container">
    <div class="nav-logo"/>

    <v-list class="pt-0">
      <v-list-tile class="list-tile" v-for="(item, i) in items" :color="item.iconColor"
      @click="goTo(item.name)" @mouseover="mouseOver(i)" @mouseout="mouseOut(i)">
        <v-list-tile-action>
          <component :is="item.type" :iconColor="item.iconColor"/>
        </v-list-tile-action>

        <v-list-tile-content>
          <v-list-tile-title>{{ item.title }}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
  import IconRequestFreight from '@/components/Icons/IconRequestFreight';
  import IconTrucksList from '@/components/Icons/IconTrucksList';
  import IconMyFreights from '@/components/Icons/IconMyFreights';
  import IconMyAccount from '@/components/Icons/IconMyAccount';
  import IconSupport from '@/components/Icons/IconSupport';
  import IconLogout from '@/components/Icons/IconLogout';

  export  default {
    name: 'NavigationDrawer',
    components: { IconRequestFreight, IconTrucksList, IconMyFreights,
      IconMyAccount, IconSupport, IconLogout },
    data() {
      return {
        colorOn: '#07C2DC',
        colorOff: 'rgba(0,0,0,0.38)',
        items: [
          { title: this.$t('navigation_drawer.request_freight'), icon: 'dashboard',
            type: 'IconRequestFreight', name: 'Suggestions', iconColor: 'rgba(0,0,0,0.38)' },

          { title: this.$t('navigation_drawer.trucks_list'), icon: 'question_answer',
            type: 'IconTrucksList', name: 'Suggestions', iconColor: 'rgba(0,0,0,0.38)' },

          { title: this.$t('navigation_drawer.my_freights'), icon: 'question_answer',
            type: 'IconMyFreights', name: 'Suggestions', iconColor: 'rgba(0,0,0,0.38)' },

          { title: this.$t('navigation_drawer.my_account'), icon: 'question_answer',
            type: 'IconMyAccount', name: 'Suggestions', iconColor: 'rgba(0,0,0,0.38)' },

          { title: this.$t('navigation_drawer.support'), icon: 'question_answer',
            type: 'IconSupport', name: 'Suggestions', iconColor: 'rgba(0,0,0,0.38)' },

          { title: this.$t('navigation_drawer.logout'), icon: 'question_answer',
            type: 'IconLogout', name: 'Suggestions', iconColor: 'rgba(0,0,0,0.38)' },
        ],
      };
    },
    methods: {
      mouseOver(id) {
        this.items[id].iconColor = this.colorOn;
      },
      mouseOut(id) {
        this.items[id].iconColor = this.colorOff;
      },
      goTo(routeName) {
        this.$router.push({name: routeName});
      },
    },
  }
</script>

<style lang="scss">
  .nav-container {
    height: 100%;
    font-family: "Open Sans";
    font-size: 16px;
    font-weight: 600;
    color: rgba(0,0,0,0.38);

    .list-tile {
      transition: none !important;

      &:last-child {
        position: fixed;
        bottom: 0;
        width: 100%;
      }
    }
  }

  .nav-logo {
    height: 120px;
    width: auto;
    background: url('~@/assets/images/PNG/cat.png') no-repeat center;
  }
</style>
