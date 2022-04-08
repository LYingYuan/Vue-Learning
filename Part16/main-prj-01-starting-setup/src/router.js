import { createRouter, createWebHistory } from 'vue-router';

import CoachDetail from './pages/coaches/CoachDetail.vue';
import CoachesList from './pages/coaches/CoachesList.vue';
import CoachRegistration from './pages/coaches/CoachRegistration.vue';
import ContactCoach from './pages/requests/ContactCoach.vue';
import RequestsReceived from './pages/requests/RequestsReceived.vue';
import UserAuth from './pages/auth/UserAuth.vue';
import NotFound from './pages/NotFound.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/coaches' },
    // 所有教师列表
    { path: '/coaches', component: CoachesList },
    // 教师详情页
    {
      path: '/coaches/:id',
      component: CoachDetail,
      props: true,
      // 联系某位教师 /coaches/ID/contact
      children: [{ path: 'contact', component: ContactCoach }],
    },
    // 注册成为教师
    { path: '/register', component: CoachRegistration },
    // 所有请求
    { path: '/requests', component: RequestsReceived },
    // 登录注册
    { path: '/auth', component: UserAuth },
    // 其他页面
    { path: '/:notfound(.*)', component: NotFound },
  ],
});

export default router;
