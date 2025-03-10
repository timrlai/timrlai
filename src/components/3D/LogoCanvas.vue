<script setup lang="ts">
import { TresCanvas } from "@tresjs/core";
import { OrbitControls, GLTFModel, Text3D } from "@tresjs/cientos";

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
        <GLTFModel
          :path="gltfPath"
          draco
          :scale="60"
          :position="[-10.5, 1, -25]"
          :rotation="[0, 0.2, 0]"
          receive-shadow
        />
      </Suspense>
      <TresMesh :position="[3.5, 3, -15]" :rotation="[0, -0.5, 0]">
        <Suspense
          ><TresMesh :position="[0, 2, 0]"
            ><Text3D :font="fontPath" :size="fontSize" receive-shadow
              >A FULL <TresMeshStandardMaterial color="#006177" /></Text3D
          ></TresMesh>
        </Suspense>
        <Suspense
          ><TresMesh :position="[0, 0.7, 0]"
            ><Text3D :font="fontPath" :size="fontSize" receive-shadow
              >STACK <TresMeshStandardMaterial color="#006177" /></Text3D
          ></TresMesh>
        </Suspense>
        <Suspense
          ><TresMesh :position="[0, -0.7, 0]"
            ><Text3D :font="fontPath" :size="fontSize" receive-shadow
              >TEAM iN <TresMeshStandardMaterial color="#006177" /></Text3D
          ></TresMesh>
        </Suspense>
        <Suspense
          ><TresMesh :position="[0, -2, 0]"
            ><Text3D :font="fontPath" :size="fontSize" receive-shadow
              >ONE TiM! <TresMeshStandardMaterial color="#006177" /></Text3D
          ></TresMesh>
        </Suspense>
      </TresMesh>
      <TresAmbientLight
        :position="[0, 10, 0]"
        :intensity="5"
        color="#C0FCF9"
        cast-shadow
      />
      <TresDirectionalLight
        :position="[-4, 8, 4]"
        :rotation="[0, 0, 0]"
        :intensity="10"
        color="#FFFAD4"
        cast-shadow
      />
    </TresCanvas>
  </section>
</template>

<style scoped></style>
