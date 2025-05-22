<script setup lang="ts">
import { defineAsyncComponent } from "vue";
import { Icon } from "@iconify/vue";

const Lazy = defineAsyncComponent(() => import("../../Common/Lazy.vue"));
const TechnicalSkills = defineAsyncComponent(
  () => import("./TechnicalSkills.vue"),
);
const SoftSkills = defineAsyncComponent(() => import("./SoftSkills.vue"));
</script>

<template>
  <section id="skills" class="flex flex-col">
    <Lazy :min-height="2000">
      <div
        class="mockup-window bg-secondary text-secondary-content border-4 border-primary rounded-b-none shadow-lg shadow-primary"
      >
        <h1
          class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl uppercase ubuntu-titling mb-4 px-5"
        >
          <Icon icon="mingcute:code-fill" class="inline-block h-[1em]" />
          Skills
        </h1>
      </div>
      <Lazy>
        <Suspense>
          <TechnicalSkills v-once />
        </Suspense>
      </Lazy>
      <Lazy>
        <Suspense>
          <SoftSkills v-once />
        </Suspense>
      </Lazy>
    </Lazy>
  </section>
</template>

<style scoped lang="scss"></style>
