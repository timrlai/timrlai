import { defineAsyncComponent } from "vue";
import { createWebHistory, createRouter } from "vue-router";

const Home = defineAsyncComponent(
  () => import("./components/Pages/Home/Home.vue"),
);
const Projects = defineAsyncComponent(
  () => import("./components/Pages/Projects/Projects.vue"),
);
const NotFound = defineAsyncComponent(
  () => import("./components/Pages/Errors/NotFound.vue"),
);

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/projects", name: "Projects", component: Projects },
  // will match everything and put it under `route.params.pathMatch`
  { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to) {
    console.log(to.hash);
    if (to.hash) {
      return {
        el: to.hash,
        top: 100,
        behavior: "smooth",
      };
    } else {
      return {
        top: 0,
        behavior: "smooth",
      };
    }
  },
});

export default router;
