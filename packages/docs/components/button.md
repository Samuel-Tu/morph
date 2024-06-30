---
title: Button
description: Button 按钮

next:
  link: /components/icon
  text: Icon 图标

prev:
  link: /get-started
  text: 快速开始
---

# Button 按钮

常见的操作按钮。

### 基础用法

使用 `type` 、 `plain` 、 `round` 和 `circle` 来定义按钮的样式。

::: preview
demo-preview=../demo/button/Basic.vue
:::

### 禁用状态

你可以使用 `disabled` 属性来定义按钮是否被禁用。
使用 `disabled` 属性来控制按钮是否为禁用状态。该属性接受一个 `Boolean` 类型的值。

::: preview
demo-preview=../demo/button/Disabled.vue
:::

### 图标按钮
使用图标为按钮添加更多的含义。 你也可以单独使用图标不添加文字来节省显示区域占用。

使用 `icon` 属性为按钮添加图标。您可以在 `Icon` 组件中找到所需图标。

::: preview
demo-preview=../demo/button/Icon.vue
:::

### 按钮组
以按钮组的方式出现，常用于多项类似操作。

使用 `<m-button-group>` 对多个按钮分组。

::: preview
demo-preview=../demo/button/Group.vue
:::

### 加载状态按钮

点击按钮来加载数据，并向用户反馈加载状态。

通过设置 `loading` 属性为 `true` 来显示加载中状态。

> [!TIP]
> 您可以使用 `loading` 插槽或 `loadingIcon` 属性自定义您的 loading 图标。
>
> PS : `loading` 插槽的优先级高于 `loadingIcon` 属性。

::: preview
demo-preview=../demo/button/Loading.vue
:::

### 调整尺寸

除了默认的大小，按钮组件还提供了几种额外的尺寸可供选择，以便适配不同的场景。

使用 `size` 属性可以配置尺寸，可选的值有 `large` 和 `small` 。

::: preview
demo-preview=../demo/button/Size.vue
:::

### Tag

你可以自定义元素标签。例如按钮，div，路由链接。

::: preview
demo-preview=../demo/button/Tag.vue
:::


## Button API

### Button 属性

| Name              | Description                       | Type                                                             | Default |
| ----------------- | --------------------------------- | ---------------------------------------------------------------- | ------- |
| size              | 尺寸                              | `enum` - `'large'\| 'default'\| 'small'`                         | —       |
| type              | 类型                              | `enum` - `'primary'\| 'success'\| 'warning'\| 'danger'\| 'info'` | info    |
| plain             | 是否为朴素按钮                    | `boolean`                                                        | false   |
| round             | 是否为圆角按钮                    | `boolean`                                                        | false   |
| circle            | 是否为圆形按钮                    | `boolean`                                                        | false   |
| loading           | 是否为加载中状态                  | `boolean`                                                        | false   |
| loading-icon      | 自定义加载中状态图标组件          | `string`                                                         | spinner |
| disabled          | 按钮是否为禁用状态                | `boolean`                                                        | false   |
| icon              | 按钮图标                          | `string`                                                         | -       |
| autofocus         | 是否自动聚焦(原生`autofocus`属性) | `boolean`                                                        | false   |
| native-type       | 原生 type 属性                    | `enum` - `'button'\| 'submit'\| 'reset'`                         | button  |
| tag               | 自定义元素标签                    | `string`\/`Component`                                            | button  |
| use-throttle      | 是否使用节流模式                  | `boolean`                                                        | true    |
| throttle-duration | 节流模式下，节流时间间隔(ms)      | `number`                                                         | 500     |

### Button 事件

| Name  | Description  | Type                         |
| ----- | ------------ | ---------------------------- |
| click | 按钮点击事件 | `(event: MouseEvent)=> void` |

### Button 插槽

| Name    | Description        |
| ------- | ------------------ |
| default | 默认插槽, 按钮内容 |
| loading | 自定义加载图标     |

### Button 方法

| Name     | Description    | Type                                 |
| -------- | -------------- | ------------------------------------ |
| ref      | 按钮 html 元素 | `Ref<HTMLButtonElement>`             |
| size     | 按钮尺寸       | `ComputedRef<''\|'small' \|'large'>` |
| type     | 按钮类型       | `ComputedRef<''\|'primary' \|'success' \|'warning' \|'danger' \|'info'>`   |
| disabled | 按钮禁用状态   | `ComputedRef<boolean>`               |

## ButtonGroup API

### ButtonGroup 属性

| Name     | Description          | Type                                                             | Default |
| -------- | -------------------- | ---------------------------------------------------------------- | ------- |
| size     | 尺寸                 | `enum` - `'large'\| 'default'\| 'small'`                         | —       |
| type     | 类型                 | `enum` - `'primary'\| 'success'\| 'warning'\| 'danger'\| 'info'` | info    |
| disabled | 按钮组是否为禁用状态 | `boolean`                                                        | false   |

### ButtonGroup 插槽

| Name    | Description | Sub Component |
| ------- | ----------- | ------------- |
| default | 默认插槽    | Button        |
