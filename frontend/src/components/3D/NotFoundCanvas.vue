<script setup lang="ts">
import {
  type Ref,
  defineProps,
  ref,
  onMounted,
  onUnmounted,
  watchEffect,
} from "vue";
import isMobile from "is-mobile";
import { TresCanvas } from "@tresjs/core";
import { OrbitControls, Text3D } from "@tresjs/cientos";

import type { NotFoundCanvasProps } from "../../../lib/types";
import { notFoundLotties } from "../../../lib/constants";
import constants from "../../../lib/constants/NotFoundCanvas";
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

const {
  WIDTH_BREAKPOINT,
  HEIGHT_BREAKPOINT,
  PORTRAIT_LOTTIE_POSITION,
  PORTRAIT_LOTTIE_ROTATION,
  PORTRAIT_LOTTIE_SCALE,
  PORTRAIT_EXPLANATION_POSITION,
  PORTRAIT_EXPLANATION_ROTATION,
  PORTRAIT_EXPLANATION_SCALE,
  LANDSCAPE_LOTTIE_POSITION,
  LANDSCAPE_LOTTIE_SCALE,
  LANDSCAPE_EXPLANATION_POSITION,
  LANDSCAPE_EXPLANATION_SCALE,
  DESKTOP_LOTTIE_POSITION,
  DESKTOP_LOTTIE_SCALE,
  DESKTOP_EXPLANATION_POSITION,
  DESKTOP_EXPLANATION_SCALE,
  WIDE_LOTTIE_ROTATION,
  WIDE_EXPLANATION_ROTATION,
} = constants;

let isPortrait: boolean = true;
let isLandscape: boolean = false;
let lottiePosition: [number, number, number] = PORTRAIT_LOTTIE_POSITION;
let lottieRotation: [number, number, number] = PORTRAIT_LOTTIE_ROTATION;
let lottieScale: number = PORTRAIT_LOTTIE_SCALE;
let explanationPosition: [number, number, number] =
  PORTRAIT_EXPLANATION_POSITION;
let explanationRotation: [number, number, number] =
  PORTRAIT_EXPLANATION_ROTATION;
let explanationScale: number = PORTRAIT_EXPLANATION_SCALE;

const canvasKey: Ref<string> = ref("not-found-canvas");
const isMobileOrTablet: boolean = isMobile() || isMobile({ tablet: true });
const randomNotFoundLottie: string = `/lottie/404/${notFoundLotties[Math.floor(Math.random() * notFoundLotties.length)]}`;

const setPoses = () => {
  setTimeout(
    () => {
      const width: number = window?.innerWidth;
      const height: number = window?.innerHeight;

      if (!width || !height) return;

      isPortrait = width <= WIDTH_BREAKPOINT && width < height;
      isLandscape = height <= HEIGHT_BREAKPOINT && height < width;

      lottiePosition = isPortrait
        ? PORTRAIT_LOTTIE_POSITION
        : isLandscape
          ? LANDSCAPE_LOTTIE_POSITION
          : DESKTOP_LOTTIE_POSITION;
      lottieRotation = isPortrait
        ? PORTRAIT_LOTTIE_ROTATION
        : WIDE_LOTTIE_ROTATION;
      lottieScale = isPortrait
        ? PORTRAIT_LOTTIE_SCALE
        : isLandscape
          ? LANDSCAPE_LOTTIE_SCALE
          : DESKTOP_LOTTIE_SCALE;
      explanationPosition = isPortrait
        ? PORTRAIT_EXPLANATION_POSITION
        : isLandscape
          ? LANDSCAPE_EXPLANATION_POSITION
          : DESKTOP_EXPLANATION_POSITION;
      explanationRotation = isPortrait
        ? PORTRAIT_EXPLANATION_ROTATION
        : WIDE_EXPLANATION_ROTATION;
      explanationScale = isPortrait
        ? PORTRAIT_EXPLANATION_SCALE
        : isLandscape
          ? LANDSCAPE_EXPLANATION_SCALE
          : DESKTOP_EXPLANATION_SCALE;

      // Regenerate the value of the key prop of the canvas to rerender it after resetting poses
      canvasKey.value = `not-found-canvas-${Math.random()}`;
    },
    // Wait 1ms on mobile to ensure window has loaded
    isMobileOrTablet ? 1 : 0,
  );
};

onMounted(() => {
  // Reset 3D poses when window resizes or device is rotated
  window.addEventListener("resize", setPoses);
});

onUnmounted(() => {
  window.removeEventListener("resize", setPoses);
});

watchEffect(() => {
  // Reset 3D poses when window with and height are set
  if (window?.innerWidth && window?.innerHeight) setPoses();
});
</script>

<template>
  <section
    class="relative z-0 h-[90vh] md:h-[100vh] mb-[-20vh] md:mb-[-10vh] cursor-pointer"
  >
    <div
      v-if="isLandscape && isMobileOrTablet"
      class="absolute z-10 top-0 left-0 w-full h-full"
    ></div>
    <h1 class="visually-hidden">Four Oh Four</h1>
    <h2 class="visually-hidden">Oopsie Woopsie!</h2>
    <h3 class="visually-hidden">Page Not Found!</h3>
    <p class="visually-hidden">
      Sorry, the page {{ $route.path }} is not in the cloud.
    </p>
    <TresCanvas :key="canvasKey" :clear-color="canvasColor" shadows alpha>
      <TresPerspectiveCamera :position="[0, 0, 1]" />
      <OrbitControls
        v-if="!(isLandscape && isMobileOrTablet)"
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
