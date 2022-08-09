import { createRouter, createWebHistory } from 'vue-router';

// Routes
import Index from '@/views/Index.vue';
// Project Routes
import BolusCalculator from '@/views/Projects/BolusCalculator.vue';

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index
  },
  // Project Routes
  {
    path: '/Projects/BolusCalculator',
    name: 'BolusCalculator',
    component: BolusCalculator
  },
//   {
//     path: '/about',
//     name: 'About',
//     // route level code-splitting
//     // this generates a separate chunk (about.[hash].js) for this route
//     // which is lazy-loaded when the route is visited.
//     component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
//   }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    scrollBehavior(to, from, savedPosition) {
        if (!to.hash) return;

        return { el: to.hash };
    },
    routes
})

export default router;
