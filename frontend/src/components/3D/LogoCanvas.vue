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
import type { Scene } from "three/src/scenes/Scene.d.ts";
import { LinearSRGBColorSpace } from "three/src/constants.js";
import { TresCanvas } from "@tresjs/core";
import { useGLTF, OrbitControls, Text3D, Box } from "@tresjs/cientos";

import { lottieConstants } from "../../../lib/constants";
import constants from "../../../lib/constants/LogoCanvas";
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
  PORTRAIT_LOGO_POSITION,
  PORTRAIT_LOGO_ROTATION,
  PORTRAIT_LOGO_SCALE,
  PORTRAIT_TAGLINE_POSITION,
  PORTRAIT_TAGLINE_ROTATION,
  PORTRAIT_TAGLINE_SCALE,
  PORTRAIT_AVATAR_WAVE_POSITION,
  PORTRAIT_AVATAR_WAVE_ROTATION,
  PORTRAIT_AVATAR_WAVE_SCALE,
  PORTRAIT_AVATAR_SUMMARY_POSITION,
  PORTRAIT_AVATAR_SUMMARY_ROTATION,
  PORTRAIT_AVATAR_SUMMARY_SCALE,
  PORTRAIT_AVATAR_SKILLS_POSITION,
  PORTRAIT_AVATAR_SKILLS_ROTATION,
  PORTRAIT_AVATAR_SKILLS_SCALE,
  PORTRAIT_AVATAR_SKILLS_SOFT_POSITION,
  PORTRAIT_AVATAR_SKILLS_SOFT_ROTATION,
  PORTRAIT_AVATAR_SKILLS_SOFT_SCALE,
  PORTRAIT_BAT_POSITION,
  PORTRAIT_BAT_ROTATION,
  PORTRAIT_BAT_SCALE,
  PORTRAIT_BAT_SUMMARY_POSITION,
  PORTRAIT_BAT_SUMMARY_ROTATION,
  PORTRAIT_BAT_SUMMARY_SCALE,
  PORTRAIT_BAT_SKILLS_POSITION,
  PORTRAIT_BAT_SKILLS_ROTATION,
  PORTRAIT_BAT_SKILLS_SCALE,
  PORTRAIT_BAT_SKILLS_SOFT_POSITION,
  PORTRAIT_BAT_SKILLS_SOFT_ROTATION,
  PORTRAIT_BAT_SKILLS_SOFT_SCALE,
  PORTRAIT_DESK_POSITION,
  PORTRAIT_DESK_ROTATION,
  PORTRAIT_DESK_SCALE,
  LANDSCAPE_LOGO_POSITION,
  LANDSCAPE_LOGO_SCALE,
  LANDSCAPE_TAGLINE_POSITION,
  LANDSCAPE_TAGLINE_SCALE,
  LANDSCAPE_AVATAR_WAVE_POSITION,
  LANDSCAPE_AVATAR_WAVE_SCALE,
  LANDSCAPE_AVATAR_SUMMARY_POSITION,
  LANDSCAPE_AVATAR_SUMMARY_SCALE,
  LANDSCAPE_AVATAR_SKILLS_POSITION,
  LANDSCAPE_AVATAR_SKILLS_SCALE,
  LANDSCAPE_AVATAR_SKILLS_SOFT_POSITION,
  LANDSCAPE_AVATAR_SKILLS_SOFT_SCALE,
  LANDSCAPE_BAT_POSITION,
  LANDSCAPE_BAT_SCALE,
  LANDSCAPE_BAT_SUMMARY_POSITION,
  LANDSCAPE_BAT_SUMMARY_SCALE,
  LANDSCAPE_BAT_SKILLS_POSITION,
  LANDSCAPE_BAT_SKILLS_SCALE,
  LANDSCAPE_BAT_SKILLS_SOFT_POSITION,
  LANDSCAPE_BAT_SKILLS_SOFT_SCALE,
  LANDSCAPE_DESK_POSITION,
  LANDSCAPE_DESK_SCALE,
  DESKTOP_LOGO_POSITION,
  DESKTOP_LOGO_SCALE,
  DESKTOP_TAGLINE_POSITION,
  DESKTOP_TAGLINE_SCALE,
  DESKTOP_AVATAR_WAVE_POSITION,
  DESKTOP_AVATAR_WAVE_SCALE,
  DESKTOP_AVATAR_SUMMARY_POSITION,
  DESKTOP_AVATAR_SUMMARY_SCALE,
  DESKTOP_AVATAR_SKILLS_POSITION,
  DESKTOP_AVATAR_SKILLS_SCALE,
  DESKTOP_AVATAR_SKILLS_SOFT_POSITION,
  DESKTOP_AVATAR_SKILLS_SOFT_SCALE,
  DESKTOP_BAT_POSITION,
  DESKTOP_BAT_SCALE,
  DESKTOP_BAT_SUMMARY_POSITION,
  DESKTOP_BAT_SUMMARY_SCALE,
  DESKTOP_BAT_SKILLS_POSITION,
  DESKTOP_BAT_SKILLS_SCALE,
  DESKTOP_BAT_SKILLS_SOFT_POSITION,
  DESKTOP_BAT_SKILLS_SOFT_SCALE,
  DESKTOP_DESK_POSITION,
  DESKTOP_DESK_SCALE,
  WIDE_LOGO_ROTATION,
  WIDE_TAGLINE_ROTATION,
  WIDE_AVATAR_WAVE_ROTATION,
  WIDE_AVATAR_SUMMARY_ROTATION,
  WIDE_AVATAR_SKILLS_ROTATION,
  WIDE_AVATAR_SKILLS_SOFT_ROTATION,
  WIDE_BAT_ROTATION,
  WIDE_BAT_SUMMARY_ROTATION,
  WIDE_BAT_SKILLS_ROTATION,
  WIDE_BAT_SKILLS_SOFT_ROTATION,
  WIDE_DESK_ROTATION,
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
  FONT_SIZE,
  LOGO_LIGHT_GLTF_PATH,
  LOGO_DARK_GLTF_PATH,
  AVATAR_WAVE_HEIGHT,
  AVATAR_WAVE_RADIUS,
  AVATAR_SUMMARY_HEIGHT,
  AVATAR_SUMMARY_RADIUS,
  AVATAR_SKILLS_HEIGHT,
  AVATAR_SKILLS_RADIUS,
  AVATAR_SKILLS_SOFT_HEIGHT,
  AVATAR_SKILLS_SOFT_RADIUS,
  BAT_HEIGHT,
  BAT_RADIUS,
  BAT_SUMMARY_HEIGHT,
  BAT_SUMMARY_RADIUS,
  BAT_SKILLS_HEIGHT,
  BAT_SKILLS_RADIUS,
  BAT_SKILLS_SOFT_HEIGHT,
  BAT_SKILLS_SOFT_RADIUS,
  GL_CLOUD_POSITION,
  GL_CLOUD_ROTATION,
  GL_CLOUD_SCALE,
} = constants;

const {
  CLOUDS_LIGHT_LOTTIE_PATH,
  CLOUDS_DARK_LOTTIE_PATH,
  AVATAR_WAVE_LOTTIE_PATH,
  AVATAR_SUMMARY_LOTTIE_PATH,
  AVATAR_SKILLS_LEGS_LOTTIE_PATH,
  AVATAR_SKILLS_SOFT_LOTTIE_PATH,
  BAT_LOTTIE_PATH,
  BAT_SUMMARY_LOTTIE_PATH,
  BAT_SKILLS_LOTTIE_PATH,
  BAT_SKILLS_SOFT_LOTTIE_PATH,
} = lottieConstants;

let width: number = window?.innerWidth || WIDTH_BREAKPOINT;
let height: number = window?.innerHeight || HEIGHT_BREAKPOINT;
let isPortrait: boolean = width <= WIDTH_BREAKPOINT && width < height;
let isLandscape: boolean = height <= HEIGHT_BREAKPOINT && height < width;
let logoPosition: [number, number, number] = isPortrait
  ? PORTRAIT_LOGO_POSITION
  : isLandscape
    ? LANDSCAPE_LOGO_POSITION
    : DESKTOP_LOGO_POSITION;
let logoRotation: [number, number, number] = isPortrait
  ? PORTRAIT_LOGO_ROTATION
  : WIDE_LOGO_ROTATION;
let logoScale: number = isPortrait
  ? PORTRAIT_LOGO_SCALE
  : isLandscape
    ? LANDSCAPE_LOGO_SCALE
    : DESKTOP_LOGO_SCALE;
let taglinePosition: [number, number, number] = isPortrait
  ? PORTRAIT_TAGLINE_POSITION
  : isLandscape
    ? LANDSCAPE_TAGLINE_POSITION
    : DESKTOP_TAGLINE_POSITION;
let taglineRotation: [number, number, number] = isPortrait
  ? PORTRAIT_TAGLINE_ROTATION
  : WIDE_TAGLINE_ROTATION;
let taglineScale: number = isPortrait
  ? PORTRAIT_TAGLINE_SCALE
  : isLandscape
    ? LANDSCAPE_TAGLINE_SCALE
    : DESKTOP_TAGLINE_SCALE;
let avatarWavePosition: [number, number, number] = isPortrait
  ? PORTRAIT_AVATAR_WAVE_POSITION
  : isLandscape
    ? LANDSCAPE_AVATAR_WAVE_POSITION
    : DESKTOP_AVATAR_WAVE_POSITION;
let avatarWaveRotation: [number, number, number] = isPortrait
  ? PORTRAIT_AVATAR_WAVE_ROTATION
  : WIDE_AVATAR_WAVE_ROTATION;
let avatarWaveScale: number = isPortrait
  ? PORTRAIT_AVATAR_WAVE_SCALE
  : isLandscape
    ? LANDSCAPE_AVATAR_WAVE_SCALE
    : DESKTOP_AVATAR_WAVE_SCALE;
let avatarSummaryPosition: [number, number, number] = isPortrait
  ? PORTRAIT_AVATAR_SUMMARY_POSITION
  : isLandscape
    ? LANDSCAPE_AVATAR_SUMMARY_POSITION
    : DESKTOP_AVATAR_SUMMARY_POSITION;
let avatarSummaryRotation: [number, number, number] = isPortrait
  ? PORTRAIT_AVATAR_SUMMARY_ROTATION
  : WIDE_AVATAR_SUMMARY_ROTATION;
let avatarSummaryScale: number = isPortrait
  ? PORTRAIT_AVATAR_SUMMARY_SCALE
  : isLandscape
    ? LANDSCAPE_AVATAR_SUMMARY_SCALE
    : DESKTOP_AVATAR_SUMMARY_SCALE;
let avatarSkillsPosition: [number, number, number] = isPortrait
  ? PORTRAIT_AVATAR_SKILLS_POSITION
  : isLandscape
    ? LANDSCAPE_AVATAR_SKILLS_POSITION
    : DESKTOP_AVATAR_SKILLS_POSITION;
let avatarSkillsRotation: [number, number, number] = isPortrait
  ? PORTRAIT_AVATAR_SKILLS_ROTATION
  : WIDE_AVATAR_SKILLS_ROTATION;
let avatarSkillsScale: number = isPortrait
  ? PORTRAIT_AVATAR_SKILLS_SCALE
  : isLandscape
    ? LANDSCAPE_AVATAR_SKILLS_SCALE
    : DESKTOP_AVATAR_SKILLS_SCALE;
let avatarDeskPosition: [number, number, number] = isPortrait
  ? PORTRAIT_DESK_POSITION
  : isLandscape
    ? LANDSCAPE_DESK_POSITION
    : DESKTOP_DESK_POSITION;
let avatarDeskRotation: [number, number, number] = isPortrait
  ? PORTRAIT_DESK_ROTATION
  : WIDE_DESK_ROTATION;
let avatarDeskScale: number = isPortrait
  ? PORTRAIT_DESK_SCALE
  : isLandscape
    ? LANDSCAPE_DESK_SCALE
    : DESKTOP_DESK_SCALE;
let avatarSkillsSoftPosition: [number, number, number] = isPortrait
  ? PORTRAIT_AVATAR_SKILLS_SOFT_POSITION
  : isLandscape
    ? LANDSCAPE_AVATAR_SKILLS_SOFT_POSITION
    : DESKTOP_AVATAR_SKILLS_SOFT_POSITION;
let avatarSkillsSoftRotation: [number, number, number] = isPortrait
  ? PORTRAIT_AVATAR_SKILLS_SOFT_ROTATION
  : WIDE_AVATAR_SKILLS_SOFT_ROTATION;
let avatarSkillsSoftScale: number = isPortrait
  ? PORTRAIT_AVATAR_SKILLS_SOFT_SCALE
  : isLandscape
    ? LANDSCAPE_AVATAR_SKILLS_SOFT_SCALE
    : DESKTOP_AVATAR_SKILLS_SOFT_SCALE;
let batPosition: [number, number, number] = isPortrait
  ? PORTRAIT_BAT_POSITION
  : isLandscape
    ? LANDSCAPE_BAT_POSITION
    : DESKTOP_BAT_POSITION;
let batRotation: [number, number, number] = isPortrait
  ? PORTRAIT_BAT_ROTATION
  : WIDE_BAT_ROTATION;
let batScale: number = isPortrait
  ? PORTRAIT_BAT_SCALE
  : isLandscape
    ? LANDSCAPE_BAT_SCALE
    : DESKTOP_BAT_SCALE;
let batSummaryPosition: [number, number, number] = isPortrait
  ? PORTRAIT_BAT_SUMMARY_POSITION
  : isLandscape
    ? LANDSCAPE_BAT_SUMMARY_POSITION
    : DESKTOP_BAT_SUMMARY_POSITION;
let batSummaryRotation: [number, number, number] = isPortrait
  ? PORTRAIT_BAT_SUMMARY_ROTATION
  : WIDE_BAT_SUMMARY_ROTATION;
let batSummaryScale: number = isPortrait
  ? PORTRAIT_BAT_SUMMARY_SCALE
  : isLandscape
    ? LANDSCAPE_BAT_SUMMARY_SCALE
    : DESKTOP_BAT_SUMMARY_SCALE;
let batSkillsPosition: [number, number, number] = isPortrait
  ? PORTRAIT_BAT_SKILLS_POSITION
  : isLandscape
    ? LANDSCAPE_BAT_SKILLS_POSITION
    : DESKTOP_BAT_SKILLS_POSITION;
let batSkillsRotation: [number, number, number] = isPortrait
  ? PORTRAIT_BAT_SKILLS_ROTATION
  : WIDE_BAT_SKILLS_ROTATION;
let batSkillsScale: number = isPortrait
  ? PORTRAIT_BAT_SKILLS_SCALE
  : isLandscape
    ? LANDSCAPE_BAT_SKILLS_SCALE
    : DESKTOP_BAT_SKILLS_SCALE;
let batSkillsSoftPosition: [number, number, number] = isPortrait
  ? PORTRAIT_BAT_SKILLS_SOFT_POSITION
  : isLandscape
    ? LANDSCAPE_BAT_SKILLS_SOFT_POSITION
    : DESKTOP_BAT_SKILLS_SOFT_POSITION;
let batSkillsSoftRotation: [number, number, number] = isPortrait
  ? PORTRAIT_BAT_SKILLS_SOFT_ROTATION
  : WIDE_BAT_SKILLS_SOFT_ROTATION;
let batSkillsSoftScale: number = isPortrait
  ? PORTRAIT_BAT_SKILLS_SOFT_SCALE
  : isLandscape
    ? LANDSCAPE_BAT_SKILLS_SOFT_SCALE
    : DESKTOP_BAT_SKILLS_SOFT_SCALE;

const store = useThemeStore();
const { isNight } = storeToRefs(store);
const canvasKey: Ref<string> = ref("logo-canvas");
const isMobileOrTablet: boolean = isMobile() || isMobile({ tablet: true });
const { scene: logoLightScene } = await useGLTF(LOGO_LIGHT_GLTF_PATH, {
  draco: true,
});
const { scene: logoDarkScene } = await useGLTF(LOGO_DARK_GLTF_PATH, {
  draco: true,
});
let logoLightModel: Scene = logoLightScene;
let logoDarkModel: Scene = logoDarkScene;

const setPoses = (event: Event | null = null) => {
  setTimeout(
    async () => {
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
      avatarWavePosition = isPortrait
        ? PORTRAIT_AVATAR_WAVE_POSITION
        : isLandscape
          ? LANDSCAPE_AVATAR_WAVE_POSITION
          : DESKTOP_AVATAR_WAVE_POSITION;
      avatarWaveRotation = isPortrait
        ? PORTRAIT_AVATAR_WAVE_ROTATION
        : WIDE_AVATAR_WAVE_ROTATION;
      avatarWaveScale = isPortrait
        ? PORTRAIT_AVATAR_WAVE_SCALE
        : isLandscape
          ? LANDSCAPE_AVATAR_WAVE_SCALE
          : DESKTOP_AVATAR_WAVE_SCALE;
      avatarSummaryPosition = isPortrait
        ? PORTRAIT_AVATAR_SUMMARY_POSITION
        : isLandscape
          ? LANDSCAPE_AVATAR_SUMMARY_POSITION
          : DESKTOP_AVATAR_SUMMARY_POSITION;
      avatarSummaryRotation = isPortrait
        ? PORTRAIT_AVATAR_SUMMARY_ROTATION
        : WIDE_AVATAR_SUMMARY_ROTATION;
      avatarSummaryScale = isPortrait
        ? PORTRAIT_AVATAR_SUMMARY_SCALE
        : isLandscape
          ? LANDSCAPE_AVATAR_SUMMARY_SCALE
          : DESKTOP_AVATAR_SUMMARY_SCALE;
      avatarSkillsPosition = isPortrait
        ? PORTRAIT_AVATAR_SKILLS_POSITION
        : isLandscape
          ? LANDSCAPE_AVATAR_SKILLS_POSITION
          : DESKTOP_AVATAR_SKILLS_POSITION;
      avatarSkillsRotation = isPortrait
        ? PORTRAIT_AVATAR_SKILLS_ROTATION
        : WIDE_AVATAR_SKILLS_ROTATION;
      avatarSkillsScale = isPortrait
        ? PORTRAIT_AVATAR_SKILLS_SCALE
        : isLandscape
          ? LANDSCAPE_AVATAR_SKILLS_SCALE
          : DESKTOP_AVATAR_SKILLS_SCALE;
      avatarDeskPosition = isPortrait
        ? PORTRAIT_DESK_POSITION
        : isLandscape
          ? LANDSCAPE_DESK_POSITION
          : DESKTOP_DESK_POSITION;
      avatarDeskRotation = isPortrait
        ? PORTRAIT_DESK_ROTATION
        : WIDE_DESK_ROTATION;
      avatarDeskScale = isPortrait
        ? PORTRAIT_DESK_SCALE
        : isLandscape
          ? LANDSCAPE_DESK_SCALE
          : DESKTOP_DESK_SCALE;
      avatarSkillsSoftPosition = isPortrait
        ? PORTRAIT_AVATAR_SKILLS_SOFT_POSITION
        : isLandscape
          ? LANDSCAPE_AVATAR_SKILLS_SOFT_POSITION
          : DESKTOP_AVATAR_SKILLS_SOFT_POSITION;
      avatarSkillsSoftRotation = isPortrait
        ? PORTRAIT_AVATAR_SKILLS_SOFT_ROTATION
        : WIDE_AVATAR_SKILLS_SOFT_ROTATION;
      avatarSkillsSoftScale = isPortrait
        ? PORTRAIT_AVATAR_SKILLS_SOFT_SCALE
        : isLandscape
          ? LANDSCAPE_AVATAR_SKILLS_SOFT_SCALE
          : DESKTOP_AVATAR_SKILLS_SOFT_SCALE;
      batPosition = isPortrait
        ? PORTRAIT_BAT_POSITION
        : isLandscape
          ? LANDSCAPE_BAT_POSITION
          : DESKTOP_BAT_POSITION;
      batRotation = isPortrait ? PORTRAIT_BAT_ROTATION : WIDE_BAT_ROTATION;
      batScale = isPortrait
        ? PORTRAIT_BAT_SCALE
        : isLandscape
          ? LANDSCAPE_BAT_SCALE
          : DESKTOP_BAT_SCALE;
      batSummaryPosition = isPortrait
        ? PORTRAIT_BAT_SUMMARY_POSITION
        : isLandscape
          ? LANDSCAPE_BAT_SUMMARY_POSITION
          : DESKTOP_BAT_SUMMARY_POSITION;
      batSummaryRotation = isPortrait
        ? PORTRAIT_BAT_SUMMARY_ROTATION
        : WIDE_BAT_SUMMARY_ROTATION;
      batSummaryScale = isPortrait
        ? PORTRAIT_BAT_SUMMARY_SCALE
        : isLandscape
          ? LANDSCAPE_BAT_SUMMARY_SCALE
          : DESKTOP_BAT_SUMMARY_SCALE;
      batSkillsPosition = isPortrait
        ? PORTRAIT_BAT_SKILLS_POSITION
        : isLandscape
          ? LANDSCAPE_BAT_SKILLS_POSITION
          : DESKTOP_BAT_SKILLS_POSITION;
      batSkillsRotation = isPortrait
        ? PORTRAIT_BAT_SKILLS_ROTATION
        : WIDE_BAT_SKILLS_ROTATION;
      batSkillsScale = isPortrait
        ? PORTRAIT_BAT_SKILLS_SCALE
        : isLandscape
          ? LANDSCAPE_BAT_SKILLS_SCALE
          : DESKTOP_BAT_SKILLS_SCALE;
      batSkillsSoftPosition = isPortrait
        ? PORTRAIT_BAT_SKILLS_SOFT_POSITION
        : isLandscape
          ? LANDSCAPE_BAT_SKILLS_SOFT_POSITION
          : DESKTOP_BAT_SKILLS_SOFT_POSITION;
      batSkillsSoftRotation = isPortrait
        ? PORTRAIT_BAT_SKILLS_SOFT_ROTATION
        : WIDE_BAT_SKILLS_SOFT_ROTATION;
      batSkillsSoftScale = isPortrait
        ? PORTRAIT_BAT_SKILLS_SOFT_SCALE
        : isLandscape
          ? LANDSCAPE_BAT_SKILLS_SOFT_SCALE
          : DESKTOP_BAT_SKILLS_SOFT_SCALE;

      const { scene: logoLightScene } = await useGLTF(LOGO_LIGHT_GLTF_PATH, {
        draco: true,
      });
      const { scene: logoDarkScene } = await useGLTF(LOGO_DARK_GLTF_PATH, {
        draco: true,
      });
      logoLightModel = logoLightScene;
      logoDarkModel = logoDarkScene;

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
  <section class="relative z-0 motion-reduce:hidden print:hidden">
    <div
      v-if="isLandscape && isMobileOrTablet"
      class="absolute z-10 top-0 left-0 w-full h-full"
    ></div>
    <h1 class="visually-hidden">Tim R. Lai</h1>
    <h2 class="visually-hidden">A full stack team in one Tim!</h2>
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
      <TresMesh
        :position="logoPosition"
        :rotation="logoRotation"
        :scale="logoScale"
      >
        <Suspense
          ><primitive v-if="!isNight" :object="logoLightModel"
        /></Suspense>
        <Suspense
          ><primitive v-if="isNight" :object="logoDarkModel"
        /></Suspense>
      </TresMesh>
      <TresMesh
        :position="taglinePosition"
        :rotation="taglineRotation"
        :scale="taglineScale"
      >
        <Suspense
          ><TresMesh :position="[0, 2, 0]"
            ><Text3D :font="FONT_PATH" :size="FONT_SIZE"
              >A FULL
              <TresMeshStandardMaterial
                v-if="!isNight"
                :color="TEXT_COLOR_LIGHT" /><TresMeshStandardMaterial
                v-if="isNight"
                :color="TEXT_COLOR_DARK" /></Text3D
          ></TresMesh>
        </Suspense>
        <Suspense
          ><TresMesh :position="[0, 0.7, 0]"
            ><Text3D :font="FONT_PATH" :size="FONT_SIZE"
              >STACK
              <TresMeshStandardMaterial
                v-if="!isNight"
                :color="TEXT_COLOR_LIGHT" /><TresMeshStandardMaterial
                v-if="isNight"
                :color="TEXT_COLOR_DARK" /></Text3D
          ></TresMesh>
        </Suspense>
        <Suspense
          ><TresMesh :position="[0, -0.7, 0]"
            ><Text3D :font="FONT_PATH" :size="FONT_SIZE"
              >TEAM iN
              <TresMeshStandardMaterial
                v-if="!isNight"
                :color="TEXT_COLOR_LIGHT" /><TresMeshStandardMaterial
                v-if="isNight"
                :color="TEXT_COLOR_DARK" /></Text3D
          ></TresMesh>
        </Suspense>
        <Suspense
          ><TresMesh :position="[0, -2, 0]"
            ><Text3D :font="FONT_PATH" :size="FONT_SIZE"
              >ONE TiM!
              <TresMeshStandardMaterial
                v-if="!isNight"
                :color="TEXT_COLOR_LIGHT" /><TresMeshStandardMaterial
                v-if="isNight"
                :color="TEXT_COLOR_DARK" /></Text3D
          ></TresMesh>
        </Suspense>
      </TresMesh>
      <Suspense>
        <LottieCylinder
          :src="AVATAR_WAVE_LOTTIE_PATH"
          :height="AVATAR_WAVE_HEIGHT"
          :radius-top="AVATAR_WAVE_RADIUS"
          :radius-bottom="AVATAR_WAVE_RADIUS"
          :position="avatarWavePosition"
          :rotation="avatarWaveRotation"
          :scale="avatarWaveScale"
        />
      </Suspense>
      <Suspense>
        <LottieCylinder
          :src="AVATAR_SUMMARY_LOTTIE_PATH"
          :height="AVATAR_SUMMARY_HEIGHT"
          :radius-top="AVATAR_SUMMARY_RADIUS"
          :radius-bottom="AVATAR_SUMMARY_RADIUS"
          :position="avatarSummaryPosition"
          :rotation="avatarSummaryRotation"
          :scale="avatarSummaryScale"
        />
      </Suspense>
      <Suspense>
        <LottieCylinder
          :src="AVATAR_SKILLS_SOFT_LOTTIE_PATH"
          :height="AVATAR_SKILLS_SOFT_HEIGHT"
          :radius-top="AVATAR_SKILLS_SOFT_RADIUS"
          :radius-bottom="AVATAR_SKILLS_SOFT_RADIUS"
          :position="avatarSkillsSoftPosition"
          :rotation="avatarSkillsSoftRotation"
          :scale="avatarSkillsSoftScale"
        />
      </Suspense>
      <Suspense>
        <LottieCylinder
          :src="AVATAR_SKILLS_LEGS_LOTTIE_PATH"
          :height="AVATAR_SKILLS_HEIGHT"
          :radius-top="AVATAR_SKILLS_RADIUS"
          :radius-bottom="AVATAR_SKILLS_RADIUS"
          :position="avatarSkillsPosition"
          :rotation="avatarSkillsRotation"
          :scale="avatarSkillsScale"
        />
      </Suspense>
      <TresMesh
        :position="avatarDeskPosition"
        :rotation="avatarDeskRotation"
        :scale="avatarDeskScale"
      >
        <Suspense>
          <Box
            :args="[2.2, 0.1, 1.6]"
            :position="[0, 2.4, 1.5]"
            :rotation="[2.2, 0.1, 0.05]"
            shadows
          >
            <TresMeshStandardMaterial color="#006177" />
          </Box>
        </Suspense>
        <Suspense>
          <Box
            :args="[2.2, 0.2, 1.6]"
            :position="[0, 1.7, 0]"
            :rotation="[0, 0, 0.05]"
            shadows
          >
            <TresMeshStandardMaterial color="#006177" />
          </Box>
        </Suspense>
        <Suspense>
          <Box :args="[5, 3, 3]" shadows>
            <TresMeshStandardMaterial color="#963600" />
          </Box>
        </Suspense>
      </TresMesh>
      <Suspense>
        <LottieCylinder
          v-if="isNight"
          :src="BAT_LOTTIE_PATH"
          :height="BAT_HEIGHT"
          :radius-top="BAT_RADIUS"
          :radius-bottom="BAT_RADIUS"
          :position="batPosition"
          :rotation="batRotation"
          :scale="batScale"
        />
      </Suspense>
      <Suspense>
        <LottieCylinder
          v-if="isNight"
          :src="BAT_SUMMARY_LOTTIE_PATH"
          :height="BAT_SUMMARY_HEIGHT"
          :radius-top="BAT_SUMMARY_RADIUS"
          :radius-bottom="BAT_SUMMARY_RADIUS"
          :position="batSummaryPosition"
          :rotation="batSummaryRotation"
          :scale="batSummaryScale"
        />
      </Suspense>
      <Suspense>
        <LottieCylinder
          v-if="isNight"
          :src="BAT_SKILLS_SOFT_LOTTIE_PATH"
          :height="BAT_SKILLS_SOFT_HEIGHT"
          :radius-top="BAT_SKILLS_SOFT_RADIUS"
          :radius-bottom="BAT_SKILLS_SOFT_RADIUS"
          :position="batSkillsSoftPosition"
          :rotation="batSkillsSoftRotation"
          :scale="batSkillsSoftScale"
        />
      </Suspense>
      <Suspense>
        <LottieCylinder
          v-if="isNight"
          :src="BAT_SKILLS_LOTTIE_PATH"
          :height="BAT_SKILLS_HEIGHT"
          :radius-top="BAT_SKILLS_RADIUS"
          :radius-bottom="BAT_SKILLS_RADIUS"
          :position="batSkillsPosition"
          :rotation="batSkillsRotation"
          :scale="batSkillsScale"
        />
      </Suspense>
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
  height: 140vh;
  contain-intrinsic-height: 140vh;
  margin-bottom: -70vh;
  @media (width >= 48rem /* 768px */) {
    height: 170vh;
    contain-intrinsic-height: 170vh;
    margin-bottom: -80vh;
  }
}
</style>
