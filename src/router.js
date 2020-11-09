import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: '列表页面',
      component: Home,
    },
    {
      path: '/demo',
      name: 'demo',
      component: () => import('./views/main/demo'),
    },
  ],
});
