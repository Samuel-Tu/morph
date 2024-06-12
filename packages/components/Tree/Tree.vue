<!-- <script setup lang="ts">
import { ref, watch } from "vue";
import { TreeStore, TreeProps, TreeNode, TreeOptionProps } from "./types";
import MTreeNode from "./TreeNode.vue";
defineOptions({
  name: "MTree",
});
const props = defineProps<TreeProps>();
const store = ref<TreeStore>(
  new TreeStore({
    data: props.data,
    emptyText: "no Data",
    highlightCurrent: true,
    defaultExpandAll: false,
    checkOnClickNode: false,
    showCheckbox: false,
    checkStrictly: false,
    accordion: false,
    indent: 18,
    expandOnClickNode: false,
    props: { children: "children", label: "label" },
  })
);
store.value.initialize();
const root = ref<TreeNode>(store.value.root);
</script> -->
<script lang="ts">
import { defineComponent, ref } from "vue";
import { TreeStore, TreeData } from "./types";
export default defineComponent({
  name: "MTree",
  props: {
    data: Object as () => TreeData,
    default: () => [],
  },
  setup(props, ctx) {
    const store = ref<TreeStore>(
      new TreeStore({
        data: props.data!,
        emptyText: "no Data",
        highlightCurrent: true,
        defaultExpandAll: false,
        checkOnClickNode: false,
        showCheckbox: false,
        checkStrictly: false,
        accordion: false,
        indent: 18,
        expandOnClickNode: false,
        props: { children: "children", label: "label" },
      })
    );
    store.value.initialize();
    return {
      store,
    };
  },
});
</script>

<template>
  <div class="m-tree">
    <span>{{ store }}</span>
    <!-- <m-tree-node
      v-for="child in root.data"
      :node="child"
    /> -->
  </div>
</template>

<style scoped>
@import "./style.css";
</style>
