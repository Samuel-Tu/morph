<script setup lang="ts">
const data = [
  {
    label: "Level one 1",
    children: [
      {
        label: "Level two 1-1",
        children: [
          {
            label: "Level three 1-1-1",
          },
        ],
      },
    ],
  },
  {
    label: "Level one 2",
    children: [
      {
        label: "Level two 2-1",
        children: [
          {
            label: "Level three 2-1-1",
          },
        ],
      },
      {
        label: "Level two 2-2",
        children: [
          {
            label: "Level three 2-2-1",
          },
        ],
      },
    ],
  },
  {
    label: "Level one 3",
    children: [
      {
        label: "Level two 3-1",
        children: [
          {
            label: "Level three 3-1-1",
          },
        ],
      },
      {
        label: "Level two 3-2",
        children: [
          {
            label: "Level three 3-2-1",
          },
        ],
      },
    ],
  },
];
</script>

<template>
  <m-button
    type="danger"
    size="default"
    icon="search"
  ></m-button>
  <m-collapse
    accordion
    modelValue="['a']"
  >
    <m-collapse-item
      name="a"
      title="Title a"
    >
      <div>this is content a</div>
    </m-collapse-item>
    <m-collapse-item
      name="b"
      title="title b"
    >
      <div>this is content b</div>
    </m-collapse-item>
    <m-collapse-item
      name="c"
      title="title c  disable"
      disabled
    >
      <div>this is content c</div>
    </m-collapse-item>
  </m-collapse>
  <m-tree :data="data" />
</template>
