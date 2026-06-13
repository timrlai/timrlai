<script setup lang="ts">
import { onMounted, onBeforeUnmount, nextTick, ref } from "vue";
import { useTresContext } from "@tresjs/core";
import { OrbitControls } from "@tresjs/cientos";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import useScrollTriggers from "../../../lib/gsap/useScrollTriggers.ts";

const {
  sectionId,
  scrollTrackId,
  isLandscape,
  isMobileOrTablet,
  verticalRotationLimit,
  horizontalRotaitonLimit,
} = defineProps<{
  sectionId: string;
  scrollTrackId: string;
  isLandscape: boolean;
  isMobileOrTablet: boolean;
  verticalRotationLimit: number;
  horizontalRotaitonLimit: number;
}>();

const { camera } = useTresContext();

let scrollTriggers: ScrollTrigger[] = [];
const {
  belowSmall,
  addScrollTrigger,
  refreshScrollTriggers,
  killAllScrollTriggers,
  buildThreeScrollTriggerConfig,
} = useScrollTriggers();

const orbitRef = ref<typeof OrbitControls>();

onMounted(async () => {
  await nextTick();

  if (orbitRef.value?.instance) orbitRef.value.instance.enabled = false;

  const timelineSettings: gsap.TimelineVars = {
    scrollTrigger: buildThreeScrollTriggerConfig(
      sectionId,
      scrollTrackId,
      (self: ScrollTrigger) => {
        if (
          !isMobileOrTablet &&
          orbitRef.value?.instance &&
          self.progress === 1
        )
          orbitRef.value.instance.enabled = true;
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
    :min-azimuth-angle="-(Math.PI / horizontalRotaitonLimit)"
    :max-azimuth-angle="Math.PI / horizontalRotaitonLimit"
    :enable-zoom="false"
  />
</template>
