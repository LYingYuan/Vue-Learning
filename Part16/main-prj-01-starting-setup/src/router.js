import { createRouter, createWebHistory } from 'vue-router';

import CoachDetail from './components/pages/coaches/CoachDetail.vue';
import CoachesList from './components/pages/coaches/CoachesList.vue';
import CoachesRegistration from './components/pages/coaches/CoachesRegistration.vue';
import ContactCoach from './components/pages/requests/ContactCoach.vue';
import RequestsReceived from './components/pages/requests/RequestsReceived.vue';
import NotFound from './components/pages/NotFound.vue';

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
      // 联系某位教师 /coaches/ID/contact
      children: [{ path: 'contact', component: ContactCoach }],
    },
    // 注册成为教师
    { path: '/register', component: CoachesRegistration },
    // 所有请求
    { path: '/requests', component: RequestsReceived },
    // 其他页面
    { path: '/:notfound(.*)', component: NotFound },
  ],
});

export default router;
