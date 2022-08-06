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
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
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
