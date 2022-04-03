import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/coaches' },
    // 所有教师列表
    { path: '/coaches', component: null },
    // 教师详情页
    { path: '/coaches:id', component: null },
    // 注册成为教师
    { path: '/register', component: null },
  ],
});

export default router;
