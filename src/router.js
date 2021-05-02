import { createRouter, createWebHistory } from 'vue-router';

import videos from './pages/videos/VideoList.vue';
import login from './pages/login/Login.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/videos' },
        { path: '/videos', component: videos },
        { path: '/login', component: login }
  ]
});

export default router;
