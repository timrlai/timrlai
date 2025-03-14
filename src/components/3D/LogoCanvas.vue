<script setup lang="ts">
import { TresCanvas } from "@tresjs/core";
import { OrbitControls, GLTFModel, Text3D } from "@tresjs/cientos";
import LottieSphere from "./LottieSphere.vue";
import GLCloud from "./GLCloud.vue";

const verticalRotationLimit = 1.6;
const horizontalRotationLimit = 6;

const gltfPath = "/models/timrlai_logo.gltf";
const fontPath = "/fonts/ubuntu_titling/Ubuntu_Titlin_Rg_Bold.json";
const fontSize = 1;
</script>

<template>
  <section class="h-[170vh] mb-[-80vh] cursor-pointer">
    <h1 class="visually-hidden">Tim RL dot AI</h1>
    <h2 class="visually-hidden">A full stack team in one Tim!</h2>
    <TresCanvas clear-color="#C0FCF9" shadows alpha>
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
              >A FULL <TresMeshStandardMaterial color="#006177" /></Text3D
          ></TresMesh>
        </Suspense>
        <Suspense
          ><TresMesh :position="[0, 0.7, 0]"
            ><Text3D :font="fontPath" :size="fontSize"
              >STACK <TresMeshStandardMaterial color="#006177" /></Text3D
          ></TresMesh>
        </Suspense>
        <Suspense
          ><TresMesh :position="[0, -0.7, 0]"
            ><Text3D :font="fontPath" :size="fontSize"
              >TEAM iN <TresMeshStandardMaterial color="#006177" /></Text3D
          ></TresMesh>
        </Suspense>
        <Suspense
          ><TresMesh :position="[0, -2, 0]"
            ><Text3D :font="fontPath" :size="fontSize"
              >ONE TiM! <TresMeshStandardMaterial color="#006177" /></Text3D
          ></TresMesh>
        </Suspense>
      </TresMesh>
      <Suspense>
        <GLCloud />
      </Suspense>
      <TresAmbientLight :position="[0, 10, 0]" :intensity="5" color="#C0FCF9" />
      <TresDirectionalLight
        :position="[-4, 8, 4]"
        :rotation="[0, 0, 0]"
        :intensity="10"
        color="#FFFAD4"
      />
    </TresCanvas>
  </section>
</template>

<style scoped></style>
