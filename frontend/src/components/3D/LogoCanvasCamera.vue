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
  isMobileOrTablet,
  verticalRotationLimit,
  horizontalRotationLimit,
  meshes,
} = defineProps<LogoCanvasCameraProps>();

const { camera, scene } = useTresContext();

let scrollTriggers: ScrollTrigger[] = [];
const {
  belowSmall,
  addScrollTrigger,
  refreshScrollTriggers,
  killAllScrollTriggers,
  buildThreeScrollTriggerConfig,
} = useScrollTriggers();
let logoCollapsed = false;
let scrollFinished = true;
const orbitRef = ref<typeof OrbitControls>();

const { world, bodies, initRapier, step, addRigidBody } = useRapier();
const { onRender } = useLoop();

onMounted(async () => {
  await nextTick();

  if (orbitRef.value?.instance) orbitRef.value.instance.enabled = false;

  await initRapier();

  const mesh = new Mesh();
  scene.value.add(mesh);
  const floorDesc = RigidBodyDesc.fixed().setTranslation(0, -0.08, 0);
  const floorCollider = ColliderDesc.cuboid(10, 0.05, 10);

  addRigidBody(mesh, floorDesc, floorCollider);

  const timelineSettings: gsap.TimelineVars = {
    scrollTrigger: buildThreeScrollTriggerConfig(
      sectionId,
      scrollTrackId,
      (self: ScrollTrigger) => {
        scrollFinished = self.progress === 1;
        if (scrollFinished && !logoCollapsed && meshes) {
          meshes.forEach((mesh) => {
            const desc = RigidBodyDesc.kinematicPositionBased();
            const points = mesh.geometry.attributes.position
              .array as Float32Array;
            const collider = ColliderDesc.convexHull(points);
            if (!collider) return;
            const body = addRigidBody(mesh, desc, collider);
            if (!body) return;
            body.setBodyType(RigidBodyType.Dynamic, true);
            body.applyImpulse({ x: 0, y: -0.5, z: 0.5 }, true);
            logoCollapsed = true;
          });
        }
        if (!isMobileOrTablet && orbitRef.value?.instance && scrollFinished) {
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
          y: 0,
        },
      )
      .to(camera.activeCamera.value.rotation, {
        x: initialX + 0.5,
        y: belowSmall ? initialY - 0.1 : initialY - 0.5,
      })
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

onRender(() => {
  let activeBodies = 0;

  bodies.forEach(({ body }) => {
    if (body.isDynamic() && !body.isSleeping()) {
      activeBodies++;
    }
  });

  if (activeBodies > 0) {
    step();
  } else if (logoCollapsed) {
    bodies.length = 0;
  }
});

onBeforeUnmount(() => {
  bodies.length = 0;

  killAllScrollTriggers(scrollTriggers);

  if (world.value) {
    world.value.free();
    world.value = null;
  }
});
</script>

<template>
  <TresPerspectiveCamera :position="[0, 0, 1]" v-once />
  <OrbitControls
    v-if="!isMobileOrTablet && scrollFinished"
    ref="orbitRef"
    :min-distance="0"
    :max-distance="Infinity"
    :min-polar-angle="0"
    :max-polar-angle="Math.PI / verticalRotationLimit"
    :min-azimuth-angle="-(Math.PI / horizontalRotationLimit)"
    :max-azimuth-angle="Math.PI / horizontalRotationLimit"
    :enable-zoom="false"
    v-once
  />
</template>
