<script setup lang="ts">
import { TreeNodeProps } from "./types";
defineOptions({
  name: "MTreeNode",
});
const props = defineProps<TreeNodeProps>();
</script>

<template>
  <div class="m-tree-node">{{ props.node }}</div>
</template>

<style scoped>
@import "./style.css";
</style>
