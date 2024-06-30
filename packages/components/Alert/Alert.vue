<script setup lang="ts">
import type { AlertProps, AlertEmits, AlertInstance } from "./types";
import MIcon from "../Icon/Icon.vue";
import { typeIconMap } from "@samuel-morph/utils";
import { ref, computed, useSlots } from "vue";
defineOptions({
  name: "MAlert",
});

const props = withDefaults(defineProps<AlertProps>(), {
  effect: "light",
  type: "info",
  closable: true,
});

const emits = defineEmits<AlertEmits>();
const slots = useSlots();

const visible = ref(true);

const iconName = computed(() => typeIconMap.get(props.type) ?? "circle-info");
const withDescription = computed(() => props.description || slots.default);

function close() {
  visible.value = false;
  emits("close");
}

function open() {
  visible.value = true;
}

defineExpose<AlertInstance>({
  close,
  open,
});
</script>

<template>
  <transition name="m-alert-fade">
    <div class="m-alert" v-show="visible" :class="{
      [`m-alert_${type}`]: type,
      [`m-alert_${effect}`]: effect,
      'text_center': center,
    }">
      <m-icon v-if="showIcon" class="m-alert_icon" :class="{ 'big-icon': withDescription }" :icon="iconName" />
      <div class="m-alert_content">
        <span class="m-alert_title" :class="{ 'with-desc': withDescription }"
          :style="{ display: center && !showIcon ? 'flow' : 'inline' }">
          <slot name="title">{{ title }}</slot>
        </span>
        <p class="m-alert_description">
          <slot>{{ description }}</slot>
        </p>
        <div class="m-alert_close" v-if="closable">
          <m-icon @click.stop="close" icon="xmark" />
        </div>
      </div>
    </div>
  </transition>
</template>

<style scoped>
@import "./style.css";
</style>
