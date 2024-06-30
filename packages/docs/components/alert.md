# Alert 提示

用于页面中展示重要的提示信息。

### 基础用法

Alert 组件不属于浮层元素，不会自动消失或关闭。

Alert 组件提供四种类型，由 `type` 属性指定，默认值为 `info`。

::: preview
demo-preview=../demo/alert/Basic.vue
:::

### 主题

Alert 组件提供了两个不同的主题：`light` 和 `dark`。

通过设置 `effect` 属性来改变主题，默认为 `light`。

::: preview
demo-preview=../demo/alert/Effect.vue
:::

### 使用图标

你可以通过为 Alert 组件添加图标来提高可读性。

通过设置 `show-icon` 属性来显示 Alert 的 icon ，这能更有效地向用户展示你的显示意图。

::: preview
demo-preview=../demo/alert/ShowIcon.vue
:::

### 文字居中

使用 `center` 属性来让文字水平居中。

::: preview
demo-preview=../demo/alert/Center.vue
:::

### 文字描述

为 Alert 组件添加一个更加详细的描述来使用户了解更多信息。

除了必填的 `title` 属性外，你可以设置 `description` 属性来帮助你更好地介绍，我们称之为辅助性文字。辅助性文字只能存放文本内容，当内容超出长度限制时会自动换行显示。

::: preview
demo-preview=../demo/alert/Description.vue
:::

### 带图标和描述

在最后，这是一个带有图标和描述的例子。

::: preview
demo-preview=../demo/alert/IconAndDescription.vue
:::


## Alert API

### Props

| Name        | Description  | Type                                                 | Default |
| ----------- | ------------ | ---------------------------------------------------- | ------- |
| title       | Alert 标题   | `string`                                             | —       |
| type        | Alert 类型   | `enum` - `'success'\| 'warning'\| 'danger'\| 'info'` | info    |
| description | 描述性文本   | `string`                                             | —       |
| closable    | 是否可以关闭 | `boolean`                                            | true    |
| center      | 文字是否居中 | `boolean`                                            | false   |
| show-icon   | 是否展示图标 | `boolean`                                            | false   |
| effect      | 主题样式     | `enum` - `'light'\|'dark'`                          | light   |

### Events

| Name  | Description             | Type                         |
| ----- | ----------------------- | ---------------------------- |
| close | 关闭 Alert 时触发的事件 | `(event: MouseEvent)=> void` |

### Slots

| Name    | Description                         |
| ------- | ----------------------------------- |
| default | 默认插槽，用于设置 Alert 的内容描述 |
| title   | 标题的内容                          |

### Expose

| Name  | Description | Type         |
| ----- | ----------- | ------------ |
| open  | 打开 Alert  | `() => void` |
| close | 关闭 Alert  | `() => void` |