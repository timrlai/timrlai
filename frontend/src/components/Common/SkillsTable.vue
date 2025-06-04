<script setup lang="ts">
import { useTemplateRef } from "vue";
import { Icon } from "@iconify/vue";

import {
  languageSkills,
  databaseSkills,
  frameworkSkills,
  cmsSkills,
  editorSkills,
  designSkills,
  hostingSkills,
  generalSkills,
} from "../../../lib/constants";

const tableCheckbox = useTemplateRef("table-checkbox");

const checkboxKeyPress = (event: KeyboardEvent) => {
  if (event.code === "Enter" && tableCheckbox.value) {
    tableCheckbox.value.checked = !tableCheckbox.value.checked;
  }
};
</script>

<template>
  <div class="collapse collapse-plus mt-5">
    <input
      ref="table-checkbox"
      id="table-checkbox"
      type="checkbox"
      :onkeypress="checkboxKeyPress"
    />
    <label
      for="table-checkbox"
      class="collapse-title text-base sm:text-lg md:text-xl ubuntu-titling bg-neutral text-neutral-content"
    >
      <Icon icon="mingcute:table-2-line" class="inline-block h-[1.5em]" />
      Click to View All Technical Skills
    </label>
    <div class="overflow-x-auto">
      <table
        class="flex flex-wrap md:table table-zebra text-lg bg-base-100 text-base-content"
      >
        <!-- head -->
        <thead
          class="block md:table-header-group w-full md:w-auto text-center bg-base-200 ubuntu-titling"
        >
          <tr
            class="block md:table-row w-full md:w-auto p-4 md:p-0 text-xl md:text-2xl text-base-content"
          >
            <th class="hidden md:table-cell">Category</th>
            <th class="block md:table-cell w-full md:w-auto">Skills</th>
          </tr>
        </thead>
        <tbody class="w-full md:w-auto text-lg ahn-medium">
          <!-- row 1 -->
          <tr class="block md:table-row w-full md:w-auto p-4 md:p-0">
            <td class="block md:table-cell w-full md:w-auto ahn-bold">
              Languages:
            </td>
            <td class="flex flex-col gap-4 w-full md:w-auto">
              <p>
                <span
                  v-for="(skill, index) in languageSkills"
                  v-bind:key="skill.title"
                >
                  {{ skill.title
                  }}<span v-if="index < languageSkills.length - 1">, </span>
                </span>
              </p>
              <div class="flex flex-wrap gap-2 text-5xl print:hidden">
                <Icon
                  v-for="skill in languageSkills.filter(
                    ({ icon }) => icon && icon,
                  )"
                  v-bind:key="skill.title"
                  :icon="`${skill.icon}`"
                  class="w-10"
                />
              </div>
            </td>
          </tr>
          <!-- row 2 -->
          <tr class="block md:table-row w-full md:w-auto p-4 md:p-0">
            <td class="block md:table-cell w-full md:w-auto font-bold">
              Frameworks/Libraries:
            </td>
            <td class="flex flex-col gap-4 w-full md:w-auto">
              <p>
                <span
                  v-for="(skill, index) in frameworkSkills"
                  v-bind:key="skill.title"
                >
                  {{ skill.title
                  }}<span v-if="index < frameworkSkills.length - 1">, </span>
                </span>
              </p>
              <div class="flex flex-wrap gap-2 text-5xl print:hidden">
                <Icon
                  v-for="skill in frameworkSkills.filter(
                    ({ icon }) => icon && icon,
                  )"
                  v-bind:key="skill.title"
                  :icon="`${skill.icon}`"
                  class="w-10"
                />
              </div>
            </td>
          </tr>
          <!-- row 3 -->
          <tr class="block md:table-row w-full md:w-auto p-4 md:p-0">
            <td class="block md:table-cell w-full md:w-auto ahn-bold">
              Databases:
            </td>
            <td class="flex flex-col gap-4 w-full md:w-auto">
              <p>
                <span
                  v-for="(skill, index) in databaseSkills"
                  v-bind:key="skill.title"
                >
                  {{ skill.title
                  }}<span v-if="index < databaseSkills.length - 1">, </span>
                </span>
              </p>
              <div class="flex flex-wrap gap-2 text-5xl print:hidden">
                <Icon
                  v-for="skill in databaseSkills.filter(
                    ({ icon }) => icon && icon,
                  )"
                  v-bind:key="skill.title"
                  :icon="`${skill.icon}`"
                  class="w-10"
                />
              </div>
            </td>
          </tr>
          <!-- row 4 -->
          <tr class="block md:table-row w-full md:w-auto p-4 md:p-0">
            <td class="block md:table-cell w-full md:w-auto font-bold">
              Content Management Systems:
            </td>
            <td class="flex flex-col gap-4 w-full md:w-auto">
              <p>
                <span
                  v-for="(skill, index) in cmsSkills"
                  v-bind:key="skill.title"
                >
                  {{ skill.title
                  }}<span v-if="index < cmsSkills.length - 1">, </span>
                </span>
              </p>
              <div class="flex flex-wrap gap-2 text-5xl print:hidden">
                <Icon
                  v-for="skill in cmsSkills.filter(({ icon }) => icon && icon)"
                  v-bind:key="skill.title"
                  :icon="`${skill.icon}`"
                  class="w-10"
                />
              </div>
            </td>
          </tr>
          <!-- row 5 -->
          <tr class="block md:table-row w-full md:w-auto p-4 md:p-0">
            <td class="block md:table-cell w-full md:w-auto font-bold">
              Text Editors/IDEs/FTP:
            </td>
            <td class="flex flex-col gap-4 w-full md:w-auto">
              <p>
                <span
                  v-for="(skill, index) in editorSkills"
                  v-bind:key="skill.title"
                >
                  {{ skill.title
                  }}<span v-if="index < editorSkills.length - 1">, </span>
                </span>
              </p>
              <div class="flex flex-wrap gap-2 text-5xl print:hidden">
                <Icon
                  v-for="skill in editorSkills.filter(
                    ({ icon }) => icon && icon,
                  )"
                  v-bind:key="skill.title"
                  :icon="`${skill.icon}`"
                  class="w-10"
                />
              </div>
            </td>
          </tr>
          <!-- row 6 -->
          <tr class="block md:table-row w-full md:w-auto p-4 md:p-0">
            <td class="block md:table-cell w-full md:w-auto font-bold">
              Design/Illustration Software:
            </td>
            <td class="flex flex-col gap-4 w-full md:w-auto">
              <p>
                <span
                  v-for="(skill, index) in designSkills"
                  v-bind:key="skill.title"
                >
                  {{ skill.title
                  }}<span v-if="index < designSkills.length - 1">, </span>
                </span>
              </p>
              <div class="flex flex-wrap gap-2 text-5xl print:hidden">
                <Icon
                  v-for="skill in designSkills.filter(
                    ({ icon }) => icon && icon,
                  )"
                  v-bind:key="skill.title"
                  :icon="`${skill.icon}`"
                  class="w-10"
                />
              </div>
            </td>
          </tr>
          <!-- row 7 -->
          <tr class="block md:table-row w-full md:w-auto p-4 md:p-0">
            <td class="block md:table-cell w-full md:w-auto font-bold">
              Hosting/Domains:
            </td>
            <td class="flex flex-col gap-4 w-full md:w-auto">
              <p>
                <span
                  v-for="(skill, index) in hostingSkills"
                  v-bind:key="skill.title"
                >
                  {{ skill.title
                  }}<span v-if="index < hostingSkills.length - 1">, </span>
                </span>
              </p>
              <div class="flex flex-wrap gap-2 text-5xl print:hidden">
                <Icon
                  v-for="skill in hostingSkills.filter(
                    ({ icon }) => icon && icon,
                  )"
                  v-bind:key="skill.title"
                  :icon="`${skill.icon}`"
                  class="w-10"
                />
              </div>
            </td>
          </tr>
          <!-- row 8 -->
          <tr class="block md:table-row w-full md:w-auto p-4 md:p-0">
            <td class="block md:table-cell w-full md:w-auto font-bold">
              General Software:
            </td>
            <td class="flex flex-col gap-4 w-full md:w-auto">
              <p>
                <span
                  v-for="(skill, index) in generalSkills"
                  v-bind:key="skill.title"
                >
                  {{ skill.title
                  }}<span v-if="index < generalSkills.length - 1">, </span>
                </span>
              </p>
              <div class="flex flex-wrap gap-2 text-5xl print:hidden">
                <Icon
                  v-for="skill in generalSkills.filter(
                    ({ icon }) => icon && icon,
                  )"
                  v-bind:key="skill.title"
                  :icon="`${skill.icon}`"
                  class="w-10"
                />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
