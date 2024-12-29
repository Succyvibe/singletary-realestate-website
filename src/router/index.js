import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Application from "@/views/Application.vue";
import Agents from "@/views/Agents.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/application",
      name: "application",
      component: Application,
    },
    {
      path: "/agents",
      name: "agents",
      component: Agents,
    },
    // {
    //   path: "/agents:id",
    //   name: "agent",
    //   component: () => import("@/views/Agent.vue"),
    // },
    // {
    //   path: "/blogs",
    //   name: "blogs",
    //   component: Blogs,
    // },
    // {
    //   path: "/blogs:id",
    //   name: "blog",
    //   component: () => import("@/views/Blog.vue"),
    // },
  ],
});

export default router;
