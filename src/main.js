import { createApp } from "vue";

import "virtual:windi.css";
import "virtual:svg-icons-register";

import App from "./App.vue";
import router from "./router";
import pinia from "./stores";

import "@/styles/index.scss";

import { setupErrorHandler } from "./logic/app";

const app = createApp(App);

app.use(pinia);
app.use(router);

setupErrorHandler(app);

app.mount("#app");
