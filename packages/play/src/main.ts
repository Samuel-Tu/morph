import { createApp } from "vue";
import App from "./App.vue";
import Morph from "samuel-morph";
import "samuel-morph/dist/index.css";

createApp(App).use(Morph).mount("#app");
