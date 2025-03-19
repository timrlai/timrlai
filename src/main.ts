import { createApp } from "vue";
import { createWebHistory, createRouter } from "vue-router";

import "./css/style.css";
import App from "./App.vue";

import Home from "./components/Pages/Home/Home.vue";

const routes = [{ path: "/", component: Home }];

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
