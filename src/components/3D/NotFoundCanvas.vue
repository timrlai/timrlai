<script setup lang="ts">
import { defineProps } from "vue";
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

const randomNotFoundLottie = `/lottie/404/${notFoundLotties[Math.floor(Math.random() * notFoundLotties.length)]}`;
</script>

<template>
  <section class="h-[100vh] cursor-pointer">
    <h1 class="visually-hidden">Four Oh Four</h1>
    <h2 class="visually-hidden">Oopsie Woopsie!</h2>
    <h3 class="visually-hidden">Page Not Found!</h3>
    <p class="visually-hidden">
      Sorry, the page {{ $route.path }} is not in the cloud.
    </p>
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
        <LottieCylinder
          :src="randomNotFoundLottie"
          :position="[-6, -0.5, -15]"
          :rotation="[0, -0.5, 0]"
        />
      </Suspense>
      <TresMesh :position="[5, 3, -15]" :rotation="[0, -0.5, 0]">
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
