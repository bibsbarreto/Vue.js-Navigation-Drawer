import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home';

Vue.use(Router);
const router = new Router({
  routes: [
    {
      path: '',
      name: 'Home',
      component: Home,
    },
  ],
});

router.beforeEach((to, from, next) => {
  next({name: 'Home'});
});

export default router;
