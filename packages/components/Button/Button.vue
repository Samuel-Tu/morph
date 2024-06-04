<script setup lang="ts">
import MIcon from "../Icon/Icon.vue";
import { ButtonProps, ButtonEmits, ButtonInstance } from "./types";
import { ref, computed, inject } from "vue";
import { throttle } from "lodash-es";
import { BUTTON_GROUP_CTX_KEY } from './contants'

defineOptions({
  name: "MButton",
});

const props = withDefaults(defineProps<ButtonProps>(), {
  tag: "button",
  nativeType: "button",
  useThrottle: true,
  throttleDuration: 500
});
const emits = defineEmits<ButtonEmits>();
const slots = defineSlots();
const ctx = inject(BUTTON_GROUP_CTX_KEY, void 0)
const _ref = ref<HTMLButtonElement>();
const size = computed(() => ctx?.size ?? props?.size ?? '')
const type = computed(() => ctx?.type ?? props?.type ?? '') 
const disabled = computed(() => ctx?.disabled || props?.disabled || false) 
const iconStyle = computed(() => ({marginRight: slots.default ? '6px': '0px'}))

const handleBtnClick = (e: MouseEvent) => emits('click', e);
const handleBtnClickThrottle = throttle(handleBtnClick, props.throttleDuration, { trailing: false })

defineExpose<ButtonInstance>({
  ref: _ref,
  disabled,
  size,
  type
});
</script>

<template>
  <component
    :is="tag"
    :ref="_ref"
    class="m-button"
    :autofocus="autofocus"
    :type="tag === 'button' ? nativeType : void 0"
    :disabled="disabled || loading ? true : void 0"
    :class="{
      [`m-button--${type}`]: type,
      [`m-button--${size}`]: size,
      'is-loading': loading,
      'is-circle': circle,
      'is-plain': plain,
      'is-round': round,
      'is-disabled': disabled,
    }"
    @click="(e: MouseEvent) => useThrottle ? handleBtnClickThrottle(e) : handleBtnClick(e)"
  >
    <template v-if="loading">
      <slot name="loading">
        <m-icon
          class="loading-icon"
          :icon="loadingIcon ?? 'spinner'"
          spin
          :style="iconStyle"
          size="1x"
        />
      </slot>
    </template>
    <m-icon 
      v-if="icon && !loading"
      :icon="icon"
      size="1x"
      :style="iconStyle"
    />
    <slot></slot>
  </component>
</template>

<style scoped>
@import "./style.css";
</style>
