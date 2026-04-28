<script setup lang="ts">
import { defineAsyncComponent } from "vue";
import { Icon } from "@iconify/vue";

import { onSectionStable } from "../../../../lib/functions";

const Lazy = defineAsyncComponent(() => import("../../Common/Lazy.vue"));
const TechnicalSkills = defineAsyncComponent(
  () => import("./TechnicalSkills.vue"),
);
const SoftSkills = defineAsyncComponent(() => import("./SoftSkills.vue"));

const sectionId = "skills";
</script>

<template>
  <Lazy :id="sectionId" :min-height="2000" @stable="onSectionStable(sectionId)">
    <section class="flex flex-col">
      <div
        class="mockup-window bg-secondary/80 text-secondary-content border-4 border-primary rounded-b-none shadow-lg shadow-primary"
      >
        <h1
          class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl uppercase ubuntu-titling mb-4 px-5"
        >
          <Icon icon="mingcute:code-fill" class="inline-block h-[1em]" />
          Skills
        </h1>
      </div>
      <Suspense>
        <TechnicalSkills v-once />
      </Suspense>
      <Suspense>
        <SoftSkills v-once />
      </Suspense>
    </section>
  </Lazy>
</template>

<style scoped lang="scss"></style>
