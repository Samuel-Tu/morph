import type { App } from "vue";
import { ElementPlusContainer } from "@vitepress-demo-preview/component";
import DefaultTheme from "vitepress/theme";
import Morph from "samuel-morph";

import "@vitepress-demo-preview/component/dist/style.css";
import "samuel-morph/dist/umd/index.css";

export default {
  ...DefaultTheme,

  enhanceApp({ app }: { app: App }) {
    app.component("demo-preview", ElementPlusContainer);
    app.use(Morph);
  },
};
