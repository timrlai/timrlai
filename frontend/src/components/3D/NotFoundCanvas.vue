<script setup lang="ts">
import {
  type Ref,
  defineAsyncComponent,
  ref,
  onMounted,
  onUnmounted,
  watchEffect,
} from "vue";
import { storeToRefs } from "pinia";
import isMobile from "is-mobile";
import { LinearSRGBColorSpace } from "three/src/constants.js";
import { TresCanvas } from "@tresjs/core";
import { OrbitControls, Text3D } from "@tresjs/cientos";

import { lottieConstants } from "../../../lib/constants";
import constants from "../../../lib/constants/NotFoundCanvas";
import { useThemeStore } from "../../../lib/stores/theme";

const LottieSphere = defineAsyncComponent(() => import("./LottieSphere.vue"));
const LottieCylinder = defineAsyncComponent(
  () => import("./LottieCylinder.vue"),
);
const GLCloud = defineAsyncComponent(() => import("./GLCloud.vue"));
const TresStars = defineAsyncComponent(() => import("./TresStars.vue"));

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
  TEXT_COLOR_LIGHT,
  TEXT_COLOR_DARK,
  AMBIENT_LIGHT_COLOR_LIGHT,
  AMBIENT_LIGHT_COLOR_DARK,
  DIRECTIONAL_LIGHT_COLOR_LIGHT,
  DIRECTIONAL_LIGHT_COLOR_DARK,
  CLOUD_COLOR_LIGHT,
  CLOUD_COLOR_DARK,
  VERTICAL_ROTATION_LIMIT,
  HORIZONTAL_ROTATION_LIMIT,
  FONT_PATH,
  TITLE_FONT_SIZE,
  EXPLANATION_FONT_SIZE,
  GL_CLOUD_POSITION,
  GL_CLOUD_ROTATION,
  GL_CLOUD_SCALE,
} = constants;

const {
  CLOUDS_LIGHT_LOTTIE_PATH,
  CLOUDS_DARK_LOTTIE_PATH,
  NOT_FOUND_LOTTIE_FOLDER,
  NOT_FOUND_LOTTIES,
} = lottieConstants;

let width: number = window?.innerWidth || WIDTH_BREAKPOINT;
let height: number = window?.innerHeight || HEIGHT_BREAKPOINT;
let isPortrait: boolean = width <= WIDTH_BREAKPOINT && width < height;
let isLandscape: boolean = height <= HEIGHT_BREAKPOINT && height < width;
let lottiePosition: [number, number, number] = isPortrait
  ? PORTRAIT_LOTTIE_POSITION
  : isLandscape
    ? LANDSCAPE_LOTTIE_POSITION
    : DESKTOP_LOTTIE_POSITION;
let lottieRotation: [number, number, number] = isPortrait
  ? PORTRAIT_LOTTIE_ROTATION
  : WIDE_LOTTIE_ROTATION;
let lottieScale: number = isPortrait
  ? PORTRAIT_LOTTIE_SCALE
  : isLandscape
    ? LANDSCAPE_LOTTIE_SCALE
    : DESKTOP_LOTTIE_SCALE;
let explanationPosition: [number, number, number] = isPortrait
  ? PORTRAIT_EXPLANATION_POSITION
  : isLandscape
    ? LANDSCAPE_EXPLANATION_POSITION
    : DESKTOP_EXPLANATION_POSITION;
let explanationRotation: [number, number, number] = isPortrait
  ? PORTRAIT_EXPLANATION_ROTATION
  : WIDE_EXPLANATION_ROTATION;
let explanationScale: number = isPortrait
  ? PORTRAIT_EXPLANATION_SCALE
  : isLandscape
    ? LANDSCAPE_EXPLANATION_SCALE
    : DESKTOP_EXPLANATION_SCALE;

const store = useThemeStore();
const { isNight } = storeToRefs(store);
const canvasKey: Ref<string> = ref("not-found-canvas");
const isMobileOrTablet: boolean = isMobile() || isMobile({ tablet: true });
const randomNotFoundLottie: string = `${NOT_FOUND_LOTTIE_FOLDER}${NOT_FOUND_LOTTIES[Math.floor(Math.random() * NOT_FOUND_LOTTIES.length)]}`;

const setPoses = (event: Event | null = null) => {
  setTimeout(
    () => {
      const currentWidth: number = window?.innerWidth;
      const currentHeight: number = window?.innerHeight;

      if (
        !currentWidth ||
        !currentHeight ||
        (event && event.type === "resize" && currentWidth === width) ||
        (currentWidth === width && currentHeight === height)
      )
        return;

      width = currentWidth;
      height = currentHeight;
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
  <section class="relative z-0 motion-reduce:hidden print:hidden">
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
    <TresCanvas
      :key="canvasKey"
      :output-color-space="LinearSRGBColorSpace"
      :tone-mapping-exposure="1.2"
      shadows
      alpha
    >
      <TresPerspectiveCamera :position="[0, 0, 1]" />
      <OrbitControls
        v-if="!(isLandscape && isMobileOrTablet)"
        :min-distance="0"
        :max-distance="Infinity"
        :min-polar-angle="0"
        :max-polar-angle="Math.PI / VERTICAL_ROTATION_LIMIT"
        :min-azimuth-angle="-(Math.PI / HORIZONTAL_ROTATION_LIMIT)"
        :max-azimuth-angle="Math.PI / HORIZONTAL_ROTATION_LIMIT"
        :enable-zoom="false"
      />
      <Suspense>
        <LottieSphere v-if="!isNight" :src="CLOUDS_LIGHT_LOTTIE_PATH" />
      </Suspense>
      <Suspense>
        <LottieSphere v-if="isNight" :src="CLOUDS_DARK_LOTTIE_PATH" />
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
            ><Text3D :font="FONT_PATH" :size="TITLE_FONT_SIZE"
              >OOPSiE WOOPSiE!
              <TresMeshStandardMaterial
                v-if="!isNight"
                :color="TEXT_COLOR_LIGHT" /><TresMeshStandardMaterial
                v-if="isNight"
                :color="TEXT_COLOR_DARK" /></Text3D
          ></TresMesh>
        </Suspense>
        <Suspense
          ><TresMesh :position="[0, -2.7, 0]"
            ><Text3D :font="FONT_PATH" :size="TITLE_FONT_SIZE"
              >PAGE NOT FOUND!
              <TresMeshStandardMaterial
                v-if="!isNight"
                :color="TEXT_COLOR_LIGHT" /><TresMeshStandardMaterial
                v-if="isNight"
                :color="TEXT_COLOR_DARK" /></Text3D
          ></TresMesh>
        </Suspense>
        <Suspense
          ><TresMesh :position="[0, -4.7, 0]"
            ><Text3D :font="FONT_PATH" :size="EXPLANATION_FONT_SIZE"
              >Sowwy, the page "{{ $route.path }}"
              <TresMeshStandardMaterial
                v-if="!isNight"
                :color="TEXT_COLOR_LIGHT" /><TresMeshStandardMaterial
                v-if="isNight"
                :color="TEXT_COLOR_DARK" /></Text3D
          ></TresMesh>
        </Suspense>
        <Suspense
          ><TresMesh :position="[0, -6, 0]"
            ><Text3D :font="FONT_PATH" :size="EXPLANATION_FONT_SIZE"
              >is not in the cloud.
              <TresMeshStandardMaterial
                v-if="!isNight"
                :color="TEXT_COLOR_LIGHT" /><TresMeshStandardMaterial
                v-if="isNight"
                :color="TEXT_COLOR_DARK" /></Text3D
          ></TresMesh>
        </Suspense>
      </TresMesh>
      <Suspense>
        <GLCloud
          v-if="!isMobileOrTablet && !isNight"
          :color="CLOUD_COLOR_LIGHT"
          :position="GL_CLOUD_POSITION"
          :rotation="GL_CLOUD_ROTATION"
          :scale="GL_CLOUD_SCALE"
        />
      </Suspense>
      <Suspense>
        <GLCloud
          v-if="!isMobileOrTablet && isNight"
          :color="CLOUD_COLOR_DARK"
          :position="GL_CLOUD_POSITION"
          :rotation="GL_CLOUD_ROTATION"
          :scale="GL_CLOUD_SCALE"
        />
      </Suspense>
      <TresAmbientLight
        :position="[0, 5, 0]"
        :intensity="isNight ? 8 : 5"
        :color="isNight ? AMBIENT_LIGHT_COLOR_DARK : AMBIENT_LIGHT_COLOR_LIGHT"
      />
      <TresDirectionalLight
        :position="[-4, 10, 8]"
        :rotation="[0, 0, 0]"
        :intensity="isNight ? 4 : 10"
        :color="
          isNight ? DIRECTIONAL_LIGHT_COLOR_DARK : DIRECTIONAL_LIGHT_COLOR_LIGHT
        "
      />
      <Suspense>
        <TresStars v-if="isNight" />
      </Suspense>
    </TresCanvas>
  </section>
</template>

<style scoped lang="scss">
section {
  cursor: pointer;
  height: 90vh;
  contain-intrinsic-height: 90vh;
  margin-bottom: -20vh;
  @media (width >= 48rem /* 768px */) {
    height: 100vh;
    contain-intrinsic-height: 100vh;
    margin-bottom: -10vh;
  }
}
</style>
