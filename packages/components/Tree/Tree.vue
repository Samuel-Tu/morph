<script setup lang="ts">
import { ref, watch } from "vue";
import { TreeStore, TreeProps, TreeNode } from "./types";
import MTreeNode from "./TreeNode.vue";
defineOptions({
  name: "MTree",
});
const props = defineProps<TreeProps>();
const store = ref<TreeStore>(
  new TreeStore({
    data: props.data,
  })
);
const root = ref<TreeNode>(store.value.root);
</script>

<template>
  <div class="m-tree">
    <span>{{ store }}</span>
    <m-tree-node
      v-for="child in root.data"
      :node="child"
    />
  </div>
</template>

<style scoped>
@import "./style.css";
</style>
