import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/info',
    name: 'info',
    component: () => import(/* webpackChunkName: "about" */ '../views/Info.vue'),
  },
  {
    path: '/works',
    name: 'works',
    component: () => import(/* webpackChunkName: "about" */ '../views/Works.vue'),
    children: [
      {
        path: 'illustrations',
        component: () => import(/* webpackChunkName: "about" */ '../sections/illustrations.vue'),
      },
      {
        path: 'prototypes',
        component: () => import(/* webpackChunkName: "about" */ '../sections/prototypes.vue'),
      },
    ],
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
Object.freeze(routes);
export { routes };
