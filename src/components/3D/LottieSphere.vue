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
  radius = 500,
  segments = 16,
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  scale = [-1, 1, 1],
  side = THREE.BackSide,
  transparent = true,
} = defineProps<LottieSphereProps>();

const lottieTexture: LottieTexture = (await useLoader(
  LottieLoader as LoaderProto<LottieTexture>,
  src,
)) as LottieTexture;

lottieTexture.repeat.x = repeatX;
lottieTexture.repeat.y = repeatY;
lottieTexture.wrapS = THREE.RepeatWrapping;
lottieTexture.wrapT = THREE.RepeatWrapping;
</script>

<template>
  <Suspense>
    <Sphere
      :args="[radius, segments, segments]"
      :position="position"
      :rotation="rotation"
      :scale="scale"
    >
      <MeshStandardMaterial
        :map="lottieTexture"
        :side="side"
        :transparent="transparent"
      />
    </Sphere>
  </Suspense>
</template>
