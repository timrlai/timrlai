import { defineAsyncComponent } from "vue";
import { createWebHistory, createRouter } from "vue-router";

const Home = defineAsyncComponent(
  () => import("./components/Pages/Home/Home.vue"),
);
const Experience = defineAsyncComponent(
  () => import("./components/Pages/Experience/Experience.vue"),
);
const Projects = defineAsyncComponent(
  () => import("./components/Pages/Projects/Projects.vue"),
);
const NotFound = defineAsyncComponent(
  () => import("./components/Pages/Errors/NotFound.vue"),
);

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/experience", name: "Experience", component: Experience },
  { path: "/projects", name: "Projects", component: Projects },
  // will match everything and put it under `route.params.pathMatch`
  { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      return new Promise((resolve) => {
        setTimeout(
          () =>
            resolve({
              el: to.hash,
              top: 100,
              behavior: "smooth",
            }),
          500,
        );
      });
    } else {
      return new Promise((resolve) => {
        setTimeout(
          () =>
            resolve({
              top: 0,
              behavior: "smooth",
            }),
          500,
        );
      });
    }
  },
});

export default router;
