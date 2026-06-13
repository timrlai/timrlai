<script setup lang="ts">
import { Text3D } from "@tresjs/cientos";

import type { TaglineProps } from "../../../lib/types/index.ts";

const {
  position,
  rotation,
  scale,
  isNight,
  fontPath,
  fontSize,
  textColorLight,
  textColorDark,
} = defineProps<TaglineProps>();
</script>

<template>
  <TresGroup :position="position" :rotation="rotation" :scale="scale">
    <Suspense
      ><TresGroup :position="[0, 2, 0]"
        ><Text3D :font="fontPath" :size="fontSize"
          >A FULL
          <TresMeshStandardMaterial
            v-if="!isNight"
            :color="textColorLight" /><TresMeshStandardMaterial
            v-if="isNight"
            :color="textColorDark" /></Text3D
      ></TresGroup>
    </Suspense>
    <Suspense
      ><TresGroup :position="[0, 0.7, 0]"
        ><Text3D :font="fontPath" :size="fontSize"
          >STACK
          <TresMeshStandardMaterial
            v-if="!isNight"
            :color="textColorLight" /><TresMeshStandardMaterial
            v-if="isNight"
            :color="textColorDark" /></Text3D
      ></TresGroup>
    </Suspense>
    <Suspense
      ><TresGroup :position="[0, -0.7, 0]"
        ><Text3D :font="fontPath" :size="fontSize"
          >TEAM iN
          <TresMeshStandardMaterial
            v-if="!isNight"
            :color="textColorLight" /><TresMeshStandardMaterial
            v-if="isNight"
            :color="textColorDark" /></Text3D
      ></TresGroup>
    </Suspense>
    <Suspense
      ><TresGroup :position="[0, -2, 0]"
        ><Text3D :font="fontPath" :size="fontSize"
          >ONE TiM!
          <TresMeshStandardMaterial
            v-if="!isNight"
            :color="textColorLight" /><TresMeshStandardMaterial
            v-if="isNight"
            :color="textColorDark" /></Text3D
      ></TresGroup>
    </Suspense>
  </TresGroup>
</template>
