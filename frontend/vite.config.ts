import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import tailwindcss from "@tailwindcss/vite";
import glsl from "vite-plugin-glsl";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    tailwindcss(),
    glsl({
      include: [
        // Glob pattern, or array of glob patterns to import
        "**/*.glsl",
        "**/*.wgsl",
        "**/*.vert",
        "**/*.frag",
        "**/*.vs",
        "**/*.fs",
      ],
      exclude: undefined, // Glob pattern, or array of glob patterns to ignore
      warnDuplicatedImports: true, // Warn if the same chunk was imported multiple times
      removeDuplicatedImports: false, // Automatically remove an already imported chunk
      defaultExtension: "glsl", // Shader suffix when no extension is specified
      watch: true, // Recompile shader on change
      root: "/", // Directory for root imports
    }),
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vue: ["vue", "vue-router"],
          three: ["three"],
          tres: ["@tresjs/core", "@tresjs/cientos"],
          lottie: ["vue3-lottie"],
          confetti: ["vue-confetti-explosion"],
          writer: ["vue-writer"],
          mobile: ["is-mobile"],
          iconify: ["@iconify/vue"],
          eslint: [
            "@eslint/js",
            "eslint-config-prettier",
            "eslint-plugin-prettier",
            "eslint-plugin-vue",
            "@typescript-eslint/eslint-plugin",
            "@typescript-eslint/parser",
            "typescript-eslint",
          ],
        },
      },
    },
  },
});
