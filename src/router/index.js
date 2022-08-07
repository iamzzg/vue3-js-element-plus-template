import {
  createRouter,
  // createWebHistory,
  createWebHashHistory
} from "vue-router";
import HomeView from "../views/HomeView.vue";
const router = createRouter({
  // hash路由
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue")
    },
    {
      path: "/test",
      name: "test",
      component: () => import("../views/TestView.vue")
    }
  ]
});

export default router;
