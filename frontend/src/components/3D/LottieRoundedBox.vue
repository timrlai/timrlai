<script setup lang="ts">
import { defineProps } from "vue";
import { ClampToEdgeWrapping, FrontSide } from "three/src/constants.js";
import { LottieLoader } from "three/addons/loaders/LottieLoader.js";
import { type LoaderProto, useLoader } from "@tresjs/core";
import { RoundedBox } from "@tresjs/cientos";
import type { LottieTexture, LottieRoundedBoxProps } from "../../../lib/types";

const {
  src,
  repeatX = 1,
  repeatY = 1,
  wrapS = ClampToEdgeWrapping,
  wrapT = ClampToEdgeWrapping,
  width = 10,
  height = 10,
  depth = 5,
  segments = 2,
  radius = 0.8,
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  scale = [1, 1, 1],
  renderOrder = 1,
  side = FrontSide,
  material = "basic",
  transparent = true,
  depthWrite = false,
} = defineProps<LottieRoundedBoxProps>();

const lottieTexture: LottieTexture = (await useLoader(
  LottieLoader as LoaderProto<LottieTexture>,
  src,
)) as LottieTexture;

lottieTexture.repeat.x = repeatX;
lottieTexture.repeat.y = repeatY;
lottieTexture.wrapS = wrapS;
lottieTexture.wrapT = wrapT;
</script>

<template>
  <Suspense>
    <RoundedBox
      :args="[width, height, depth, segments, radius]"
      :position="position"
      :rotation="rotation"
      :scale="scale"
      :renderOrder="renderOrder"
    >
      <MeshBasicMaterial
        v-if="material === 'basic'"
        :map="lottieTexture"
        :side="side"
        :transparent="transparent"
        :depthWrite="depthWrite"
      />
      <MeshStandardMaterial
        v-if="material === 'standard'"
        :map="lottieTexture"
        :side="side"
        :transparent="transparent"
        :depthWrite="depthWrite"
      />
      <MeshToonMaterial
        v-if="material === 'toon'"
        :map="lottieTexture"
        :side="side"
        :transparent="transparent"
        :depthWrite="depthWrite"
      />
    </RoundedBox>
  </Suspense>
</template>
