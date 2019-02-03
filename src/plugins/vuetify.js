import Vue from 'vue';
import Vuetify from 'vuetify';
import colors from 'vuetify/es5/util/colors';
import 'vuetify/src/stylus/main.styl';
import '@mdi/font/css/materialdesignicons.css';

Vue.use(Vuetify, {
  theme: {
    primary: '#188BF1',
    secondary: '#07C2DC',
    lightSecondary: '#30CDE2',
    lightGrey: '#CCCCCC',
    grey: '#9B9B9B',
    white: '#FFFFFF',
    background: '#F1F5F8',
    border: '#CCCCCC',
    surface: colors.shades.white,
    error: colors.red.base,
  },
  iconfont: 'mdi mdi-',
});
