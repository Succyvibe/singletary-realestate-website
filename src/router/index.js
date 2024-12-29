import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Application from "@/views/Application.vue";
import Agents from "@/views/agents/Agents.vue";
import Agentss from "@/views/agents/AgentDetails.vue";
import Blogs from "@/views/blogs/Blogs.vue";
import BlogDetails from "@/views/blogs/BlogDetails.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/agents/:id",
      name: "agentss",
      component: Agentss,
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
    //   path: "/agents/:id",
    //   name: "AgentDetails",
    //   component: "AgentDetails",
    // },

    {
      path: "/blogs",
      name: "Blogs",
      component: Blogs,
    },
    {
      path: "/blogs/:id",
      name: "BlogDetails",
      component: BlogDetails,
    },
  ],
});

export default router;
