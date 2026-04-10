import { createApp } from "vue";
import { createPinia } from "pinia";
import { extend } from "@tresjs/core";
import { Stars } from "@tresjs/cientos";

import "./css/style.css";
import App from "./App.vue";
import router from "./router";

extend({ Stars });

const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
app.use(router);
app.mount("#app");
