<script setup lang="ts">
import type { LogoProps } from "../../../lib/types/index.ts";

const { position, rotation, scale, isNight, lightModel, darkModel } =
  defineProps<LogoProps>();
</script>

<template>
  <TresGroup :position="position" :rotation="rotation" :scale="scale">
    <Suspense><primitive v-if="!isNight" :object="lightModel" /></Suspense>
    <Suspense><primitive v-if="isNight" :object="darkModel" /></Suspense>
  </TresGroup>
</template>
