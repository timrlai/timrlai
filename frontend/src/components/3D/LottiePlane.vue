<script setup lang="ts">
import { defineProps } from "vue";
import * as THREE from "three";
import { LottieLoader } from "three/addons/loaders/LottieLoader.js";
import type { LoaderProto } from "@tresjs/core";
import { useLoader } from "@tresjs/core";
import { Plane } from "@tresjs/cientos";
import type { LottieTexture, LottiePlaneProps } from "../../../lib/types";

const {
  src,
  repeatX = 1,
  repeatY = 1,
  wrapS = THREE.ClampToEdgeWrapping,
  wrapT = THREE.ClampToEdgeWrapping,
  width = 10,
  height = 10,
  widthSegments = 1,
  heightSegments = 1,
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  scale = [1, 1, 1],
  renderOrder = 1,
  side = THREE.FrontSide,
  material = "basic",
  transparent = true,
  depthWrite = false,
} = defineProps<LottiePlaneProps>();

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
    <Plane
      :args="[width, height, widthSegments, heightSegments]"
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
    </Plane>
  </Suspense>
</template>
