import { defineConfig } from "vitepress";
import {
  containerPreview,
  componentPreview,
} from "@vitepress-demo-preview/plugin";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Morph",
  description:
    "Morph 是一个高效、灵活且易于使用的前端组件库，为开发者提供了一套精心设计的组件，以快速构建美观、响应式的用户界面。",
  base: "/morph/",
  appearance: false,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "开始使用", link: "/get-started" },
      { text: "组件", link: "/components/button" },
    ],
    search: {
      provider: "local",
    },
    sidebar: [
      {
        text: "指南",
        items: [{ text: "快速开始", link: "/get-started" }],
      },
      {
        text: "基础组件",
        // collapsed: false,
        items: [{ text: "Button 按钮", link: "/component/button" }],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/Samuel-Tu/morph.git" },
    ],
  },
  markdown: {
    theme: "github-light",
    config: (md) => {
      md.use(containerPreview);
      md.use(componentPreview);
    },
  },
});
