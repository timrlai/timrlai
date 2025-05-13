import { defineAsyncComponent } from "vue";
import { createWebHistory, createRouter } from "vue-router";

import type { ScrollPosition } from "../lib/types";

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

const setScrollPosition = (
  position: ScrollPosition,
  delay: number,
): Promise<ScrollPosition> =>
  new Promise((resolve) => {
    setTimeout(
      () =>
        resolve({
          ...(position.el && { el: position.el }),
          left: position.left,
          top: position.top,
          behavior: position.behavior,
        }),
      delay,
    );
  });

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from) {
    let delay = 500;
    if (to.path === from.path) delay = 0;
    if (to.hash) {
      return setScrollPosition(
        {
          el: to.hash,
          top: 100,
          behavior: "smooth",
        },
        delay,
      );
    } else {
      return setScrollPosition(
        {
          top: 0,
          behavior: "smooth",
        },
        delay,
      );
    }
  },
});

export default router;
