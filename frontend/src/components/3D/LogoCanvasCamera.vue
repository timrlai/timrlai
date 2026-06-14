<script setup lang="ts">
import { onMounted, onBeforeUnmount, nextTick, ref } from "vue";
import { Mesh } from "three";
import { useLoop, useTresContext } from "@tresjs/core";
import { OrbitControls } from "@tresjs/cientos";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ColliderDesc,
  RigidBodyDesc,
  RigidBodyType,
} from "@dimforge/rapier3d-compat";

import type { LogoCanvasCameraProps } from "../../../lib/types/index.ts";
import useScrollTriggers from "../../../lib/gsap/useScrollTriggers.ts";
import useRapier from "../../../lib/rapier/useRapier.ts";

const {
  sectionId,
  scrollTrackId,
  isLandscape,
  isMobileOrTablet,
  verticalRotationLimit,
  horizontalRotationLimit,
  meshes,
} = defineProps<LogoCanvasCameraProps>();

const { camera } = useTresContext();

let scrollTriggers: ScrollTrigger[] = [];
const {
  belowSmall,
  addScrollTrigger,
  refreshScrollTriggers,
  killAllScrollTriggers,
  buildThreeScrollTriggerConfig,
} = useScrollTriggers();
let logoDropped = false;
const orbitRef = ref<typeof OrbitControls>();

const { initRapier, step, addRigidBody } = useRapier();
const { onRender } = useLoop();

onMounted(async () => {
  await nextTick();

  if (orbitRef.value?.instance) orbitRef.value.instance.enabled = false;

  await initRapier();

  const mesh = new Mesh();
  const floorDesc = RigidBodyDesc.fixed().setTranslation(0, -0.08, 0);
  const floorCollider = ColliderDesc.cuboid(10, 0.05, 10);

  addRigidBody(mesh, floorDesc, floorCollider);

  const timelineSettings: gsap.TimelineVars = {
    scrollTrigger: buildThreeScrollTriggerConfig(
      sectionId,
      scrollTrackId,
      (self: ScrollTrigger) => {
        if (self.progress > 0.99 && !logoDropped && meshes) {
          logoDropped = true;
          meshes.forEach((mesh) => {
            const desc = RigidBodyDesc.kinematicPositionBased();
            const points = new Float32Array(
              mesh.geometry.attributes.position.array,
            );
            const collider = ColliderDesc.convexHull(points);
            if (!collider) return;
            setTimeout(() => {
              const body = addRigidBody(mesh, desc, collider);
              if (!body) return;
              body.setBodyType(RigidBodyType.Dynamic, true);
              body.applyImpulse({ x: 0, y: -0.5, z: 0.5 }, true);
            }, 1000);
          });
        }
        if (
          !isMobileOrTablet &&
          orbitRef.value?.instance &&
          self.progress === 1
        ) {
          orbitRef.value.instance.enabled = true;
        }
      },
    ),
  };

  const timeline = gsap.timeline(timelineSettings);

  if (timeline) {
    addScrollTrigger(timeline, scrollTriggers);
    const initialX = 0;
    const initialY = belowSmall ? 0.4 : 1;
    timeline
      .fromTo(
        camera.activeCamera.value.rotation,
        {
          y: initialY,
        },
        {
          x: initialX + 0.5,
          y: belowSmall ? initialY - 0.1 : initialY - 0.5,
        },
      )
      .to(camera.activeCamera.value.rotation, {
        y: belowSmall ? initialY - 0.4 : initialY - 1,
      })
      .to(camera.activeCamera.value.rotation, {
        x: initialX + 0.5,
        y: belowSmall ? initialY - 1 : initialY - 1.5,
      })
      .to(camera.activeCamera.value.rotation, {
        x: initialX,
      })
      .to(camera.activeCamera.value.rotation, {
        y: 0,
      });
  }

  refreshScrollTriggers();
});

onRender(({ delta }: { delta: number }) => {
  step(delta);
});

onBeforeUnmount(() => killAllScrollTriggers(scrollTriggers));
</script>

<template>
  <TresPerspectiveCamera :position="[0, 0, 1]" />
  <OrbitControls
    v-if="!(isLandscape && isMobileOrTablet)"
    ref="orbitRef"
    :min-distance="0"
    :max-distance="Infinity"
    :min-polar-angle="0"
    :max-polar-angle="Math.PI / verticalRotationLimit"
    :min-azimuth-angle="-(Math.PI / horizontalRotationLimit)"
    :max-azimuth-angle="Math.PI / horizontalRotationLimit"
    :enable-zoom="false"
  />
</template>
