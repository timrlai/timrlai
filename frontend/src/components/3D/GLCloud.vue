<script setup lang="ts">
import { ref } from "vue";
import type { Camera } from "three/src/cameras/Camera.d.ts";
import { Vector3 } from "three/src/math/Vector3.js";
import { Data3DTexture } from "three/src/textures/Data3DTexture.js";
import {
  RedFormat,
  LinearFilter,
  GLSL3,
  BackSide,
} from "three/src/constants.js";
import { Color } from "three/src/math/Color.js";
import { ImprovedNoise } from "three/addons/math/ImprovedNoise.js";
import { useTresContext, useRenderLoop } from "@tresjs/core";
import { Box } from "@tresjs/cientos";

import type { GLCloudProps } from "../../../lib/types";
import vertexShader from "../../assets/shaders/cloud_vertex_shader.glsl";
import fragmentShader from "../../assets/shaders/cloud_fragment_shader.glsl";

const {
  color,
  position = [0, -0.4, -0.3],
  rotation = [2, 0, 0],
  scale = 1,
  args = [10, 10, 10],
} = defineProps<GLCloudProps>();

const { scene, camera: cameraRef, renderer } = useTresContext();
const cameraValue = cameraRef.value as Camera;

const { onLoop } = useRenderLoop();

// Texture

const size = 128;
const data = new Uint8Array(size * size * size);

let i = 0;
const textureScale = 0.05;
const perlin = new ImprovedNoise();
const vector = new Vector3();

for (let z = 0; z < size; z++) {
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const d =
        1.0 -
        vector
          .set(x, y, z)
          .subScalar(size / 2)
          .divideScalar(size)
          .length();
      data[i] =
        (128 +
          128 *
            perlin.noise(
              (x * textureScale) / 1.5,
              y * textureScale,
              (z * textureScale) / 1.5,
            )) *
        d *
        d;
      i++;
    }
  }
}

const texture = new Data3DTexture(data, size, size, size);
texture.format = RedFormat;
texture.minFilter = LinearFilter;
texture.magFilter = LinearFilter;
texture.unpackAlignment = 1;
texture.needsUpdate = true;

// Material

const uniforms = {
  base: { value: new Color(color) },
  map: { value: texture },
  cameraPos: { value: new Vector3() },
  threshold: { value: 0.25 },
  opacity: { value: 0.25 },
  range: { value: 0.1 },
  steps: { value: 100 },
  frame: { value: 0 },
};

const glslVersion = GLSL3;
const side = BackSide;

const mesh = ref();

function animate(elapsed: number) {
  mesh.value.material.uniforms.uTime.value = elapsed;
  mesh.value.material.uniforms.cameraPos.value.copy(cameraValue.position);
  mesh.value.rotation.y = -performance.now() / 7500;

  mesh.value.material.uniforms.frame.value++;

  renderer.value.render(scene.value, cameraValue);
}

onLoop(({ elapsed }) => {
  if (mesh.value) {
    animate(elapsed);
  }
});
</script>

<template>
  <Suspense>
    <TresMesh
      :ref="mesh"
      :position="position"
      :rotation="rotation"
      :scale="scale"
    >
      <Box :args="args" :renderOrder="1">
        <TresRawShaderMaterial
          :vertex-shader="vertexShader"
          :fragment-shader="fragmentShader"
          :uniforms="uniforms"
          :glsl-version="glslVersion"
          :side="side"
          transparent
          :depthWrite="false"
        />
      </Box>
    </TresMesh>
  </Suspense>
</template>
