<script setup lang="ts">
import * as THREE from "three";
import { LottieLoader } from "three/addons/loaders/LottieLoader.js";
import type { LoaderProto } from "@tresjs/core";
import { useLoader } from "@tresjs/core";
import { Sphere } from "@tresjs/cientos";
import type { LottieTexture, LottieSphereProps } from "../../../lib/types";

const {
  src,
  repeatX = 6,
  repeatY = 6,
  wrapS = THREE.RepeatWrapping,
  wrapT = THREE.RepeatWrapping,
  radius = 500,
  segments = 16,
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  scale = [-1, 1, 1],
  renderOrder = 0,
  material = "standard",
  side = THREE.BackSide,
  transparent = true,
  depthWrite = false,
} = defineProps<LottieSphereProps>();

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
    <Sphere
      :args="[radius, segments, segments]"
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
    </Sphere>
  </Suspense>
</template>
