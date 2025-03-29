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
import { OrbitControls, Text3D } from "@tresjs/cientos";
import type { NotFoundCanvasProps } from "../../../lib/types";
import { notFoundLotties } from "../../../lib/constants";
import LottieSphere from "./LottieSphere.vue";
import LottieCylinder from "./LottieCylinder.vue";
import GLCloud from "./GLCloud.vue";

const {
  canvasColor = "#C0FCF9",
  textColor = "#006177",
  ambientLightColor = "#C0FCF9",
  directionalLightColor = "#FFFAD4",
  verticalRotationLimit = 1.6,
  horizontalRotationLimit = 6,
  fontPath = "/fonts/ubuntu_titling/Ubuntu_Titlin_Rg_Bold.json",
  titleFontSize = 1,
  explanationFontSize = 0.7,
} = defineProps<NotFoundCanvasProps>();

let isPortrait: boolean = false;
let isLandscape: boolean = false;
let lottiePosition: [number, number, number] = [-6, 0, -15];
let lottieRotation: [number, number, number] = [0, -0.5, 0];
let lottieScale: number = 1;
let explanationPosition: [number, number, number] = [5, 3.5, -15];
let explanationRotation: [number, number, number] = [0, -0.5, 0];
let explanationScale: number = 1;
const canvasKey: Ref<string> = ref("not-found-canvas");
const isMobileOrTablet: boolean = isMobile() || isMobile({ tablet: true });
const randomNotFoundLottie = `/lottie/404/${notFoundLotties[Math.floor(Math.random() * notFoundLotties.length)]}`;

const setPoses = () => {
  const width: number = window?.innerWidth;
  const height: number = window?.innerHeight;

  if (!width || !height) return;

  isPortrait = width < 750;
  isLandscape = height < 750;

  lottiePosition = isPortrait
    ? [0, 3.7, -15]
    : isLandscape
      ? [-5, 0, -15]
      : [-6, 0, -15];
  lottieRotation = isPortrait ? [0.5, -0.7, 0] : [0, -0.5, 0];
  lottieScale = isPortrait ? 0.6 : isLandscape ? 0.8 : 1;
  explanationPosition = isPortrait
    ? [0, -0.3, -15]
    : isLandscape
      ? [3, 2, -15]
      : [5, 3.5, -15];
  explanationRotation = isPortrait ? [-0.5, 0, 0] : [0, -0.5, 0];
  explanationScale = isPortrait ? 0.5 : isLandscape ? 0.8 : 1;
  // Regenerate the value of the key prop of the canvas to rerender it after resetting poses
  canvasKey.value = `not-found-canvas-${Math.random()}`;
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
    class="h-[90vh] md:h-[100vh] mb-[-20vh] md:mb-[-10vh] cursor-pointer"
  >
    <h1 class="visually-hidden">Four Oh Four</h1>
    <h2 class="visually-hidden">Oopsie Woopsie!</h2>
    <h3 class="visually-hidden">Page Not Found!</h3>
    <p class="visually-hidden">
      Sorry, the page {{ $route.path }} is not in the cloud.
    </p>
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
        <LottieCylinder
          :src="randomNotFoundLottie"
          :position="lottiePosition"
          :rotation="lottieRotation"
          :scale="lottieScale"
        />
      </Suspense>
      <TresMesh
        :position="explanationPosition"
        :rotation="explanationRotation"
        :scale="explanationScale"
      >
        <Suspense
          ><TresMesh :position="[0, -1, 0]"
            ><Text3D :font="fontPath" :size="titleFontSize"
              >OOPSiE WOOPSiE!
              <TresMeshStandardMaterial :color="textColor" /></Text3D
          ></TresMesh>
        </Suspense>
        <Suspense
          ><TresMesh :position="[0, -2.7, 0]"
            ><Text3D :font="fontPath" :size="titleFontSize"
              >PAGE NOT FOUND!
              <TresMeshStandardMaterial :color="textColor" /></Text3D
          ></TresMesh>
        </Suspense>
        <Suspense
          ><TresMesh :position="[0, -4.7, 0]"
            ><Text3D :font="fontPath" :size="explanationFontSize"
              >Sowwy, the page "{{ $route.path }}"
              <TresMeshStandardMaterial :color="textColor" /></Text3D
          ></TresMesh>
        </Suspense>
        <Suspense
          ><TresMesh :position="[0, -6, 0]"
            ><Text3D :font="fontPath" :size="explanationFontSize"
              >is not in the cloud.
              <TresMeshStandardMaterial :color="textColor" /></Text3D
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
