<script setup lang="ts">
import { defineAsyncComponent } from "vue";
import { Box } from "@tresjs/cientos";

import type { AvatarSkillsProps } from "../../../lib/types/index.ts";

const LottieCylinder = defineAsyncComponent(
  () => import("./LottieCylinder.vue"),
);

const {
  avatarPosition,
  avatarRotation,
  avatarScale,
  avatarLottiePath,
  avatarHeight,
  avatarRadius,
  deskPosition,
  deskRotation,
  deskScale,
} = defineProps<AvatarSkillsProps>();
</script>

<template>
  <Suspense>
    <LottieCylinder
      :src="avatarLottiePath"
      :height="avatarHeight"
      :radius-top="avatarRadius"
      :radius-bottom="avatarRadius"
      :position="avatarPosition"
      :rotation="avatarRotation"
      :scale="avatarScale"
    />
  </Suspense>
  <TresGroup
    :position="deskPosition"
    :rotation="deskRotation"
    :scale="deskScale"
  >
    <Suspense>
      <Box
        :args="[2.2, 0.1, 1.6]"
        :position="[0, 2.4, 1.5]"
        :rotation="[2.2, 0.1, 0.05]"
        shadows
      >
        <TresMeshStandardMaterial color="#006177" />
      </Box>
    </Suspense>
    <Suspense>
      <Box
        :args="[2.2, 0.2, 1.6]"
        :position="[0, 1.7, 0]"
        :rotation="[0, 0, 0.05]"
        shadows
      >
        <TresMeshStandardMaterial color="#006177" />
      </Box>
    </Suspense>
    <Suspense>
      <Box :args="[5, 3, 3]" shadows>
        <TresMeshStandardMaterial color="#963600" />
      </Box>
    </Suspense>
  </TresGroup>
</template>
