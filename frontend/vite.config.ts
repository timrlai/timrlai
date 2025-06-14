import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import tailwindcss from "@tailwindcss/vite";
import webfontDownload from "vite-plugin-webfont-dl";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";
import glsl from "vite-plugin-glsl";
import viteCompression from "vite-plugin-compression";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    tailwindcss(),
    webfontDownload(),
    ViteImageOptimizer({
      test: /\.(jpe?g|png|gif|tiff|webp|svg|avif)$/i,
      exclude: undefined,
      include: undefined,
      includePublic: true,
      logStats: true,
      ansiColors: true,
      svg: {
        multipass: true,
        plugins: [
          {
            name: "preset-default",
            params: {
              overrides: {
                cleanupNumericValues: false,
                removeViewBox: false, // https://github.com/svg/svgo/issues/1128
                cleanupIds: {
                  minify: false,
                  remove: false,
                },
                convertPathData: false,
              },
            },
          },
          "sortAttrs",
          {
            name: "addAttributesToSVGElement",
            params: {
              attributes: [{ xmlns: "http://www.w3.org/2000/svg" }],
            },
          },
        ],
      },
      png: {
        // https://sharp.pixelplumbing.com/api-output#png
        quality: 100,
      },
      jpeg: {
        // https://sharp.pixelplumbing.com/api-output#jpeg
        quality: 100,
      },
      jpg: {
        // https://sharp.pixelplumbing.com/api-output#jpeg
        quality: 100,
      },
      tiff: {
        // https://sharp.pixelplumbing.com/api-output#tiff
        quality: 100,
      },
      // gif does not support lossless compression
      // https://sharp.pixelplumbing.com/api-output#gif
      gif: {},
      webp: {
        // https://sharp.pixelplumbing.com/api-output#webp
        lossless: true,
      },
      avif: {
        // https://sharp.pixelplumbing.com/api-output#avif
        lossless: true,
      },
      cache: false,
      cacheLocation: undefined,
    }),
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
      minify: true, // Minify/optimize output shader code
      watch: true, // Recompile shader on change
      root: "/", // Directory for root imports
    }),
    viteCompression(),
  ],
  build: {
    minify: "esbuild",
    cssMinify: "esbuild",
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vue: ["vue"],
          router: ["vue-router"],
          vueuse: ["@vueuse/core"],
          pinia: ["pinia"],
          three: ["three"],
          threeImprovedNoise: ["three/addons/math/ImprovedNoise.js"],
          threeLottieLoader: ["three/addons/loaders/LottieLoader.js"],
          tres: ["@tresjs/core"],
          cientos: ["@tresjs/cientos"],
          draco3d: ["draco3d"],
          lottieWeb: ["lottie-web"],
          vueLottie: ["vue3-lottie"],
          confetti: ["vue-confetti-explosion"],
          writer: ["vue-writer"],
          mobile: ["is-mobile"],
          iconify: ["@iconify/vue"],
          eslint: [
            "eslint",
            "@eslint/js",
            "eslint-config-prettier",
            "eslint-plugin-prettier",
            "eslint-plugin-vue",
            "eslint-plugin-vuejs-accessibility",
          ],
        },
      },
    },
  },
});
