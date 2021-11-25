import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/home/Home.vue';
import KnowMore from '../views/knowMore/KnowMore.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/knowmore',
    name: 'KnowMore',
    component: KnowMore,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
