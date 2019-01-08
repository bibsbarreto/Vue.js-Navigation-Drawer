import Vue from 'vue';
import App from './App.vue';
import router from './router';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import colors from 'vuetify/es5/util/colors';
import 'material-design-icons-iconfont/dist/material-design-icons.css'

Vue.config.productionTip = false;

Vue.use(Vuetify, {
  theme: {
    primary: '#07C2DC',
    secondary: colors.grey.darken4,
    background: '#F1F5F8',
    border: '#CCCCCC',
    surface: colors.shades.white,
    error: colors.red.base,
  },
  iconfont: 'mdi',
});

new Vue({
  el: '#app',
  render: h => h(App),
  components: { App },
  template: '<App/>',
  router,
}).$mount("#app");
