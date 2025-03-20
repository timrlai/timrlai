import { createApp } from "vue";
import { createWebHistory, createRouter } from "vue-router";

import "./css/style.css";
import App from "./App.vue";

import Home from "./components/Pages/Home/Home.vue";
import Projects from "./components/Pages/Projects/Projects.vue";
import NotFound from "./components/Pages/Errors/NotFound.vue";

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

createApp(App).use(router).mount("#app");
