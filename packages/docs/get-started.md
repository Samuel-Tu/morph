---
search: false
next:
  link: /components/button
  text: Button 按钮
---
# 最新 Vue3 + TS 高仿 ElementPlus 打造自己的组件库

## 安装


```bash
npm i samuel-morph --save
```

## 开始使用

**全局使用**


```js
import { createApp } from "vue";
import App from "./App.vue";

//引入所有组件库
import Morph from "samuel-morph";
//引入样式
import "samuel-morph/dist/umd/index.css";
//全局使用
createApp(App).use(Morph).mount("#app");
```

```vue
<template>
    <m-button> 我是 Button </m-button>
</template>
```

**组件按需引用**
```vue
<script>
    import { MButton } from "samuel-morph"
    import "samuel-morph/dist/es/theme/Button.css"
</script>
<template>
    <m-button> 我是 Button </m-button>
</template>
```

## 亮点

::: details
- Vite + Vitest + Vitepress 工具链
- monorepo 分包管理
- github actions 实现 CI/CD 自动化部署
- 大模型辅助：使用大模型辅助完成需求分析，设计思路，快速实现组件，提升开发效率。
- 当然，也会展示 发布“开箱即用” 的 npm 包
:::
