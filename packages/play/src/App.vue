<script setup lang="ts"></script>

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
  <m-tree />
</template>
