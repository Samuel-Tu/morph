<script setup lang="ts">
import type { CollapseProps, CollapseEmits, CollapseItemName } from "./types";
import { provide, ref, watch, watchEffect } from "vue";
import { COLLAPSE_CTX_KEY } from "./constants";
import { debugWarn } from "@samuel-morph/utils";

const COMP_NAME = "MCollapse" as const;

defineOptions({
  name: COMP_NAME,
});

const props = defineProps<CollapseProps>();
const emits = defineEmits<CollapseEmits>();
const activeNames = ref<CollapseItemName[]>(props.modelValue);

watchEffect(() => {
  if (props.accordion && activeNames.value.length > 1) {
    debugWarn(COMP_NAME, "accordion mode should only have one active item");
  }
});

function handleItemClick(item: CollapseItemName) {
  let _activeNames = [...activeNames.value];

  if (props.accordion) {
    _activeNames = [_activeNames[0] === item ? "" : item];
    updateActiveNames(_activeNames);
    return;
  }

  const index = _activeNames.indexOf(item);
  if (index > -1) {
    _activeNames.splice(index, 1);
  } else {
    _activeNames.push(item);
  }
  updateActiveNames(_activeNames);
}

function updateActiveNames(newActiveNames: CollapseItemName[]) {
  activeNames.value = newActiveNames;
  emits("update:modelValue", newActiveNames);
  emits("change", newActiveNames);
}

watch(
  () => props.modelValue,
  (newActiveNames) => updateActiveNames(newActiveNames)
);

provide(COLLAPSE_CTX_KEY, {
  activeNames,
  handleItemClick,
});
</script>

<template>
  <div class="m-collapse">
    <slot></slot>
  </div>
</template>

<style scoped>
@import "./style.css";
</style>
