<script setup lang="ts">
import { Icon } from "@iconify/vue";

import type { VimeoVideoProps } from "../../../lib/types";

const {
  videoId,
  badge = 0,
  autoPause = 0,
  playerId = 0,
  appId,
  title,
  height = "100%",
  width = "100%",
} = defineProps<VimeoVideoProps>();
</script>

<template>
  <section class="w-full">
    <h1 class="text-xl md:text-2xl mb-2 ubuntu-titling">
      <a
        :href="`https://player.vimeo.com/video/${videoId}`"
        target="_blank"
        class="link link-info link-hover"
        ><Icon
          icon="entypo-social:vimeo-with-circle"
          class="inline-block h-[1em]"
        />
        {{ title }} on Vimeo</a
      >
    </h1>
    <div
      class="flex items-center w-full h-[30vh] lg:h-[70vh] bg-slate-900 rounded-lg border-4 border-primary overflow-hidden"
    >
      <div class="w-full h-[29vh] lg:h-[69vh] glass rounded-md">
        <Suspense>
          <iframe
            :src="`https://player.vimeo.com/video/${videoId}?badge=${badge}&amp;autopause=${autoPause}&amp;player_id=${playerId}&amp;app_id=${appId}`"
            loading="lazy"
            frameborder="0"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
            :title="title"
            :height="height"
            :width="width"
            class="w-full h-full opacity-80"
          ></iframe>
        </Suspense>
      </div>
    </div>
  </section>
  <script
    src="https://player.vimeo.com/api/player.js"
    crossorigin="anonymous"
    async
  ></script>
</template>

<style scoped></style>
