<script setup lang="ts">
import { defineProps } from "vue";
import { TresCanvas } from "@tresjs/core";
import { OrbitControls, GLTFModel, Text3D } from "@tresjs/cientos";
import type { LogoCanvasProps } from "../../../lib/types";
import LottieSphere from "./LottieSphere.vue";
import GLCloud from "./GLCloud.vue";

const {
  canvasColor = "#C0FCF9",
  textColor = "#006177",
  ambientLightColor = "#C0FCF9",
  directionalLightColor = "#FFFAD4",
  verticalRotationLimit = 1.6,
  horizontalRotationLimit = 6,
  gltfPath = "/models/timrlai_logo.gltf",
  fontPath = "/fonts/ubuntu_titling/Ubuntu_Titlin_Rg_Bold.json",
  fontSize = 1,
} = defineProps<LogoCanvasProps>();
</script>

<template>
  <section class="h-[170vh] mb-[-80vh] cursor-pointer">
    <h1 class="visually-hidden">Tim RL dot AI</h1>
    <h2 class="visually-hidden">A full stack team in one Tim!</h2>
    <TresCanvas :clear-color="canvasColor" shadows alpha>
      <TresPerspectiveCamera :position="[0, 0, 1]" />
      <OrbitControls
        :minDistance="0"
        :maxDistance="Infinity"
        :minPolarAngle="0"
        :maxPolarAngle="Math.PI / verticalRotationLimit"
        :minAzimuthAngle="-(Math.PI / horizontalRotationLimit)"
        :maxAzimuthAngle="Math.PI / horizontalRotationLimit"
      />
      <Suspense>
        <LottieSphere src="/lottie/clouds_lottie.json" />
      </Suspense>
      <Suspense>
        <GLTFModel
          :path="gltfPath"
          draco
          :scale="60"
          :position="[-10.5, 1, -25]"
          :rotation="[0, 0.2, 0]"
        />
      </Suspense>
      <TresMesh :position="[3.5, 3, -15]" :rotation="[0, -0.5, 0]">
        <Suspense
          ><TresMesh :position="[0, 2, 0]"
            ><Text3D :font="fontPath" :size="fontSize"
              >A FULL <TresMeshStandardMaterial :color="textColor" /></Text3D
          ></TresMesh>
        </Suspense>
        <Suspense
          ><TresMesh :position="[0, 0.7, 0]"
            ><Text3D :font="fontPath" :size="fontSize"
              >STACK <TresMeshStandardMaterial :color="textColor" /></Text3D
          ></TresMesh>
        </Suspense>
        <Suspense
          ><TresMesh :position="[0, -0.7, 0]"
            ><Text3D :font="fontPath" :size="fontSize"
              >TEAM iN <TresMeshStandardMaterial :color="textColor" /></Text3D
          ></TresMesh>
        </Suspense>
        <Suspense
          ><TresMesh :position="[0, -2, 0]"
            ><Text3D :font="fontPath" :size="fontSize"
              >ONE TiM! <TresMeshStandardMaterial :color="textColor" /></Text3D
          ></TresMesh>
        </Suspense>
      </TresMesh>
      <Suspense>
        <GLCloud />
      </Suspense>
      <TresAmbientLight
        :position="[0, 10, 0]"
        :intensity="5"
        :color="ambientLightColor"
      />
      <TresDirectionalLight
        :position="[-4, 8, 4]"
        :rotation="[0, 0, 0]"
        :intensity="10"
        :color="directionalLightColor"
      />
    </TresCanvas>
  </section>
</template>

<style scoped></style>
