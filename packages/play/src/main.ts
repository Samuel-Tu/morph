import { createApp } from "vue";
import App from "./App.vue";
import Morph from "samuel-morph";
import "samuel-morph/dist/umd/index.css";

createApp(App).use(Morph).mount("#app");
