<script setup lang="ts">
import { type Ref, ref, onMounted, onUnmounted, watchEffect } from "vue";
import type { Scene } from "three";
import isMobile from "is-mobile";
import { TresCanvas } from "@tresjs/core";
import { useGLTF, OrbitControls, Text3D } from "@tresjs/cientos";

import { lottieConstants } from "../../../lib/constants";
import constants from "../../../lib/constants/LogoCanvas";
import LottieSphere from "./LottieSphere.vue";
import GLCloud from "./GLCloud.vue";

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
  CANVAS_COLOR,
  TEXT_COLOR,
  AMBIENT_LIGHT_COLOR,
  DIRECTIONAL_LIGHT_COLOR,
  VERTICAL_ROTATION_LIMIT,
  HORIZONTAL_ROTATION_LIMIT,
  FONT_PATH,
  FONT_SIZE,
  LOGO_GLTF_PATH,
} = constants;

const { CLOUDS_LOTTIE_PATH } = lottieConstants;

let width: number = window?.innerWidth || WIDTH_BREAKPOINT;
let height: number = window?.innerHeight || HEIGHT_BREAKPOINT;
let isPortrait: boolean = true;
let isLandscape: boolean = false;
let logoPosition: [number, number, number] = PORTRAIT_LOGO_POSITION;
let logoRotation: [number, number, number] = PORTRAIT_LOGO_ROTATION;
let logoScale: number = PORTRAIT_LOGO_SCALE;
let taglinePosition: [number, number, number] = PORTRAIT_TAGLINE_POSITION;
let taglineRotation: [number, number, number] = PORTRAIT_TAGLINE_ROTATION;
let taglineScale: number = PORTRAIT_TAGLINE_SCALE;

const canvasKey: Ref<string> = ref("logo-canvas");
const isMobileOrTablet: boolean = isMobile() || isMobile({ tablet: true });
const { scene } = await useGLTF(LOGO_GLTF_PATH, { draco: true });
let logoModel: Scene = scene;

const setPoses = (event: Event | null = null) => {
  setTimeout(
    async () => {
      const currentWidth: number = window?.innerWidth;
      const currentHeight: number = window?.innerHeight;

      if (
        !currentWidth ||
        !currentHeight ||
        (event && event.type === "resize" && currentWidth === width)
      )
        return;

      width = currentWidth;
      height = currentHeight;
      isPortrait = width <= WIDTH_BREAKPOINT && width < height;
      isLandscape = height <= HEIGHT_BREAKPOINT && height < width;

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

      const { scene } = await useGLTF(LOGO_GLTF_PATH, { draco: true });
      logoModel = scene;

      // Regenerate the value of the key prop of the canvas to rerender it after resetting poses
      canvasKey.value = `logo-canvas-${Math.random()}`;
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
  // Reset 3D poses when window loads
  if (window?.innerWidth && window?.innerHeight) setPoses();
});
</script>

<template>
  <section
    class="relative z-0 h-[140vh] md:h-[170vh] mb-[-70vh] md:mb-[-80vh] cursor-pointer"
  >
    <div
      v-if="isLandscape && isMobileOrTablet"
      class="absolute z-10 top-0 left-0 w-full h-full"
    ></div>
    <h1 class="visually-hidden">Tim RL dot AI</h1>
    <h2 class="visually-hidden">A full stack team in one Tim!</h2>
    <TresCanvas :key="canvasKey" :clear-color="CANVAS_COLOR" shadows alpha>
      <TresPerspectiveCamera :position="[0, 0, 1]" />
      <OrbitControls
        v-if="!(isLandscape && isMobileOrTablet)"
        :minDistance="0"
        :maxDistance="Infinity"
        :minPolarAngle="0"
        :maxPolarAngle="Math.PI / VERTICAL_ROTATION_LIMIT"
        :minAzimuthAngle="-(Math.PI / HORIZONTAL_ROTATION_LIMIT)"
        :maxAzimuthAngle="Math.PI / HORIZONTAL_ROTATION_LIMIT"
      />
      <Suspense>
        <LottieSphere :src="CLOUDS_LOTTIE_PATH" />
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
            ><Text3D :font="FONT_PATH" :size="FONT_SIZE"
              >A FULL <TresMeshStandardMaterial :color="TEXT_COLOR" /></Text3D
          ></TresMesh>
        </Suspense>
        <Suspense
          ><TresMesh :position="[0, 0.7, 0]"
            ><Text3D :font="FONT_PATH" :size="FONT_SIZE"
              >STACK <TresMeshStandardMaterial :color="TEXT_COLOR" /></Text3D
          ></TresMesh>
        </Suspense>
        <Suspense
          ><TresMesh :position="[0, -0.7, 0]"
            ><Text3D :font="FONT_PATH" :size="FONT_SIZE"
              >TEAM iN <TresMeshStandardMaterial :color="TEXT_COLOR" /></Text3D
          ></TresMesh>
        </Suspense>
        <Suspense
          ><TresMesh :position="[0, -2, 0]"
            ><Text3D :font="FONT_PATH" :size="FONT_SIZE"
              >ONE TiM! <TresMeshStandardMaterial :color="TEXT_COLOR" /></Text3D
          ></TresMesh>
        </Suspense>
      </TresMesh>
      <Suspense>
        <GLCloud v-if="!isMobileOrTablet" />
      </Suspense>
      <TresAmbientLight
        :position="[0, 10, 0]"
        :intensity="5"
        :color="AMBIENT_LIGHT_COLOR"
      />
      <TresDirectionalLight
        :position="[-4, 8, 4]"
        :rotation="[0, 0, 0]"
        :intensity="10"
        :color="DIRECTIONAL_LIGHT_COLOR"
      />
    </TresCanvas>
  </section>
</template>

<style scoped></style>
