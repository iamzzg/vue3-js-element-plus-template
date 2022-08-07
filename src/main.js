import { createApp } from "vue";
import { createPinia } from "pinia";

import "virtual:windi.css";

import App from "./App.vue";
import router from "./router";

import "@/styles/index.scss";

import { setupErrorHandler } from "./logic/app";

const app = createApp(App);

app.use(createPinia());
app.use(router);

setupErrorHandler(app);

app.mount("#app");
