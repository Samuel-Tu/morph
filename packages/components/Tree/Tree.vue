<script setup lang="ts">
import { ref, watch } from "vue";
import MTreeNode from "./TreeNode.vue";
import type { TreeProps, TreeOptionProps, LoadFunction } from "./types";
import { TreeNode } from "./model/node";
import TreeStore from "./model/nodeStore";
defineOptions({
  name: "MTree",
});
const props = withDefaults(defineProps<TreeProps>(), {
  data: () => [],
  emptyText: "noData",
  lazy: false,
  highlightCurrent: true,
  showCheckbox: false,
  checkStrictly: true,
  accordion: false,
  indent: 18,
  draggable: false,
  props: () => ({
    children: "children",
    label: "label",
    disabled: "disabled",
  }),
});

const store = ref<TreeStore>(
  new TreeStore({
    key: props.nodeKey as string,
    data: props.data,
    lazy: props.lazy,
    load: props.load as LoadFunction,
    props: props.props as TreeOptionProps,
    checkStrictly: props.checkStrictly,
  })
);

store.value.initialize();

const root = ref<TreeNode | null>(store.value.root);

watch(
  () => props.data,
  (newVal) => {
    console.log(newVal, 222);
  },
  { deep: true }
);
</script>

<template>
  <div class="m-tree">
    <span>{{ store }}</span>
    <m-tree-node
      v-for="child in root?.data"
      :node="child"
    />
  </div>
</template>

<style scoped>
@import "./style.css";
</style>
