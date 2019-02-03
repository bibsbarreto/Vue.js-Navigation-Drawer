import Vue from 'vue';
import VueI18n from 'vue-i18n';
import messages from '@/utils/pt-BR/translations';

Vue.use(VueI18n);

export default new VueI18n({
  locale: 'pt_BR',
  messages,
});
