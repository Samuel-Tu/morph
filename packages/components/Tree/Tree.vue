<script setup lang="ts">
import { ref, onBeforeMount } from "vue";
import type {
  TreeProps,
  TreeOptionProps,
  TreeNodeData,
  LoadFunction,
} from "./types";
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
});

const store = ref<TreeStore>(
  new TreeStore({
    data: props.data,
    lazy: props.lazy,
    load: props.load as LoadFunction,
    props: props.props as TreeOptionProps,
    checkStrictly: props.checkStrictly,
  })
);

onBeforeMount(() => {
  console.log(111);
  store.value.initialize();
});

// const emits = defineEmits();
</script>

<template>
  <div class="m-tree">{{ store }}</div>
</template>

<style scoped></style>
