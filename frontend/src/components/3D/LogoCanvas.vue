<script setup lang="ts">
import {
  type Ref,
  defineProps,
  ref,
  onMounted,
  onUnmounted,
  watchEffect,
} from "vue";
import type { Scene } from "three";
import isMobile from "is-mobile";
import { TresCanvas } from "@tresjs/core";
import { useGLTF, OrbitControls, Text3D } from "@tresjs/cientos";

import type { LogoCanvasProps } from "../../../lib/types";
import constants from "../../../lib/constants/LogoCanvas";
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

const {
  WIDTH_BREAKPOINT,
  HEIGHT_BREAKPOINT,
  PORTRAIT_LOGO_POSITION,
  PORTRAIT_LOGO_ROTATION,
  PORTRAIT_LOGO_SCALE,
  PORTRAIT_TAGLINE_POSITION,
  PORTRAIT_TAGLINE_ROTATION,
  PORTRAIT_TAGLINE_SCALE,
  LANDSCAPE_LOGO_POSITION,
  LANDSCAPE_LOGO_SCALE,
  LANDSCAPE_TAGLINE_POSITION,
  LANDSCAPE_TAGLINE_SCALE,
  DESKTOP_LOGO_POSITION,
  DESKTOP_LOGO_SCALE,
  DESKTOP_TAGLINE_POSITION,
  DESKTOP_TAGLINE_SCALE,
  WIDE_LOGO_ROTATION,
  WIDE_TAGLINE_ROTATION,
} = constants;

let isPortrait: boolean = false;
let isLandscape: boolean = false;
let logoPosition: [number, number, number] = PORTRAIT_LOGO_POSITION;
let logoRotation: [number, number, number] = PORTRAIT_LOGO_ROTATION;
let logoScale: number = PORTRAIT_LOGO_SCALE;
let taglinePosition: [number, number, number] = PORTRAIT_TAGLINE_POSITION;
let taglineRotation: [number, number, number] = PORTRAIT_TAGLINE_ROTATION;
let taglineScale: number = PORTRAIT_TAGLINE_SCALE;

const canvasKey: Ref<string> = ref("logo-canvas");
const isMobileOrTablet: boolean = isMobile() || isMobile({ tablet: true });
const { scene } = await useGLTF(gltfPath, { draco: true });
let logoModel: Scene = scene;

const setPoses = async () => {
  const width: number = window?.innerWidth;
  const height: number = window?.innerHeight;

  if (!width || !height) return;

  isPortrait = width <= WIDTH_BREAKPOINT;
  isLandscape = height <= HEIGHT_BREAKPOINT;

  logoPosition = isPortrait
    ? PORTRAIT_LOGO_POSITION
    : isLandscape
      ? LANDSCAPE_LOGO_POSITION
      : DESKTOP_LOGO_POSITION;
  logoRotation = isPortrait ? PORTRAIT_LOGO_ROTATION : WIDE_LOGO_ROTATION;
  logoScale = isPortrait
    ? PORTRAIT_LOGO_SCALE
    : isLandscape
      ? LANDSCAPE_LOGO_SCALE
      : DESKTOP_LOGO_SCALE;
  taglinePosition = isPortrait
    ? PORTRAIT_TAGLINE_POSITION
    : isLandscape
      ? LANDSCAPE_TAGLINE_POSITION
      : DESKTOP_TAGLINE_POSITION;
  taglineRotation = isPortrait
    ? PORTRAIT_TAGLINE_ROTATION
    : WIDE_TAGLINE_ROTATION;
  taglineScale = isPortrait
    ? PORTRAIT_TAGLINE_SCALE
    : isLandscape
      ? LANDSCAPE_TAGLINE_SCALE
      : DESKTOP_TAGLINE_SCALE;

  const { scene } = await useGLTF(gltfPath, { draco: true });
  logoModel = scene;

  // Regenerate the value of the key prop of the canvas to rerender it after resetting poses
  canvasKey.value = `logo-canvas-${Math.random()}`;
};

onMounted(() => {
  // Reset 3D poses when window resizes or device is rotated
  window.addEventListener("resize", setPoses);
});

onUnmounted(() => {
  window.removeEventListener("resize", setPoses);
});

watchEffect(() => {
  // Reset 3D poses when window loads
  if (window?.innerWidth && window?.innerHeight) setPoses();
});
</script>

<template>
  <section
    class="h-[140vh] md:h-[170vh] mb-[-70vh] md:mb-[-80vh] cursor-pointer"
  >
    <h1 class="visually-hidden">Tim RL dot AI</h1>
    <h2 class="visually-hidden">A full stack team in one Tim!</h2>
    <TresCanvas :key="canvasKey" :clear-color="canvasColor" shadows alpha>
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
      <TresMesh
        :position="logoPosition"
        :rotation="logoRotation"
        :scale="logoScale"
      >
        <Suspense><primitive :object="logoModel" /></Suspense>
      </TresMesh>
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
