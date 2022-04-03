import { createRouter, createWebHistory } from "vue-router";

import CoachPage from "./components/pages/CoachPage.vue";
import RequestPage from "./components/pages/RequestPage.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/coaches" },
    { path: "/coaches", component: CoachPage },
    { path: "/requests", component: RequestPage },
  ],
});

export default router;
