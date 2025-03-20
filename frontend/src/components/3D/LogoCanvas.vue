<script setup lang="ts">
import { defineProps } from "vue";
import isMobile from "is-mobile";
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

const isMobileOrTablet: boolean = isMobile() || isMobile({ tablet: true });
const width: number = window.innerWidth;
const height: number = window.innerHeight;
const isPortrait: boolean = width < 750;
const isLandscape: boolean = height < 750;

const logoPosition: [number, number, number] = isPortrait
  ? [-2.3, 6.6, -25]
  : isLandscape
    ? [-9, 1, -25]
    : [-10.5, 1, -25];
const logoRotation: [number, number, number] = isPortrait
  ? [0.5, 0, 0]
  : [0, 0.2, 0];
const logoScale: number = isPortrait ? 25 : isLandscape ? 50 : 60;
const taglinePosition: [number, number, number] = isPortrait
  ? [0, 2, -15]
  : isLandscape
    ? [3, 2.7, -15]
    : [3.5, 3, -15];
const taglineRotation: [number, number, number] = isPortrait
  ? [-0.5, 0, 0]
  : [0, -0.5, 0];
const taglineScale: number = isPortrait ? 0.7 : isLandscape ? 0.8 : 1;
</script>

<template>
  <section
    class="h-[140vh] md:h-[170vh] mb-[-70vh] md:mb-[-80vh] cursor-pointer"
  >
    <h1 class="visually-hidden">Tim RL dot AI</h1>
    <h2 class="visually-hidden">A full stack team in one Tim!</h2>
    <TresCanvas :clear-color="canvasColor" shadows alpha>
      <TresPerspectiveCamera :position="[0, 0, 1]" />
      <OrbitControls
        v-if="!(isMobileOrTablet && isLandscape)"
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
          :position="logoPosition"
          :rotation="logoRotation"
          :scale="logoScale"
        />
      </Suspense>
      <TresMesh
        :position="taglinePosition"
        :rotation="taglineRotation"
        :scale="taglineScale"
      >
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
        <GLCloud v-if="!isMobileOrTablet" />
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
