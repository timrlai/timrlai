<script setup lang="ts">
import { onMounted } from "vue";
import type { Mesh } from "three";

import type { LogoProps } from "../../../lib/types/index";

const { position, rotation, scale, isNight, lightModel, darkModel } =
  defineProps<LogoProps>();

const meshes: Mesh[] = [];

onMounted(() => {
  if (lightModel) {
    lightModel.traverse((obj) => {
      if ((obj as Mesh).isMesh) {
        const mesh = obj as Mesh;
        meshes.push(mesh);
      }
    });
  }

  if (darkModel) {
    darkModel.traverse((obj) => {
      if ((obj as Mesh).isMesh) {
        const mesh = obj as Mesh;
        meshes.push(mesh);
      }
    });
  }
});

defineExpose({ meshes });
</script>

<template>
  <TresGroup :position="position" :rotation="rotation" :scale="scale">
    <Suspense><primitive v-if="!isNight" :object="lightModel" /></Suspense>
    <Suspense><primitive v-if="isNight" :object="darkModel" /></Suspense>
  </TresGroup>
</template>
