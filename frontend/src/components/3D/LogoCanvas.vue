<script setup lang="ts">
import {
  type Ref,
  defineProps,
  ref,
  onActivated,
  onDeactivated,
  onMounted,
  onUnmounted,
} from "vue";
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

const WIDTH_BREAKPOINT: number = 950;
const HEIGHT_BREAKPOINT: number = 750;

const PORTRAIT_LOGO_POSITION: [number, number, number] = [-2.3, 6.6, -25];
const PORTRAIT_LOGO_ROTATION: [number, number, number] = [0.5, 0, 0];
const PORTRAIT_LOGO_SCALE: number = 25;
const PORTRAIT_TAGLINE_POSITION: [number, number, number] = [0, 2, -15];
const PORTRAIT_TAGLINE_ROTATION: [number, number, number] = [-0.5, 0, 0];
const PORTRAIT_TAGLINE_SCALE: number = 0.7;

const LANDSCAPE_LOGO_POSITION: [number, number, number] = [-9, 1, -25];
const LANDSCAPE_LOGO_SCALE: number = 50;
const LANDSCAPE_TAGLINE_POSITION: [number, number, number] = [3, 2.7, -15];
const LANDSCAPE_TAGLINE_SCALE: number = 0.8;

const DESKTOP_LOGO_POSITION: [number, number, number] = [-10.5, 1, -25];
const DESKTOP_LOGO_SCALE: number = 60;
const DESKTOP_TAGLINE_POSITION: [number, number, number] = [3.5, 3, -15];
const DESKTOP_TAGLINE_SCALE: number = 1;

const WIDE_LOGO_ROTATION: [number, number, number] = [0, 0.2, 0];
const WIDE_TAGLINE_ROTATION: [number, number, number] = [0, -0.5, 0];

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

const setPoses = () => {
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

  // Regenerate the value of the key prop of the canvas to rerender it after resetting poses
  canvasKey.value = `logo-canvas-${Math.random()}`;
};

onActivated(() => {
  // Reset 3D poses when window loads - necessary for mobile Firefox to detect window width and height
  window.addEventListener("load", setPoses);
});

onDeactivated(() => {
  window.removeEventListener("load", setPoses);
});

onMounted(() => {
  // Reset 3D poses when window resizes or device is rotated
  window.addEventListener("resize", setPoses);
});

onUnmounted(() => {
  window.removeEventListener("resize", setPoses);
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
