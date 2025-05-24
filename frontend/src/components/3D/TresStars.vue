<script setup lang="ts">
import { shallowRef } from "vue";
import { useRenderLoop } from "@tresjs/core";
import { Stars } from "@tresjs/cientos";
import type { TresStarsProps } from "../../../lib/types";

const {
  radius = 50,
  depth = 50,
  count = 5000,
  size = 0.3,
} = defineProps<TresStarsProps>();

const yRotation = shallowRef(0);
useRenderLoop().onLoop(({ delta }) => {
  yRotation.value += 0.02 * delta;
});
</script>

<template>
  <Stars
    :rotation="[0, yRotation, 0]"
    :radius="radius"
    :depth="depth"
    :count="count"
    :size="size"
    :size-attenuation="true"
  />
</template>
