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
          vueRuntime: ["@vue/runtime-core"],
          router: ["vue-router"],
          vueuse: ["@vueuse/core"],
          pinia: ["pinia"],
          threeWebGLRenderer: ["three/src/renderers/WebGLRenderer.js"],
          threeShaderLib: ["three/src/renderers/shaders/ShaderLib.js"],
          threeUniformsLib: ["three/src/renderers/shaders/UniformsLib.js"],
          threeUniformsUtils: ["three/src/renderers/shaders/UniformsUtils.js"],
          threeShaderChunk: ["three/src/renderers/shaders/ShaderChunk.js"],
          threeScene: ["three/src/scenes/Scene.js"],
          threeMesh: ["three/src/objects/Mesh.js"],
          threeLineSegments: ["three/src/objects/LineSegments.js"],
          threeLine: ["three/src/objects/Line.js"],
          threeCubeTexture: ["three/src/textures/CubeTexture.js"],
          threeCanvasTexture: ["three/src/textures/CanvasTexture.js"],
          threeGroup: ["three/src/objects/Group.js"],
          threeSphereGeometry: ["three/src/geometries/SphereGeometry.js"],
          threePlaneGeometry: ["three/src/geometries/PlaneGeometry.js"],
          threeBoxGeometry: ["three/src/geometries/BoxGeometry.js"],
          threeConeGeometry: ["three/src/geometries/ConeGeometry.js"],
          threeCylinderGeometry: ["three/src/geometries/CylinderGeometry.js"],
          threeCircleGeometry: ["three/src/geometries/CircleGeometry.js"],
          threeRingGeometry: ["three/src/geometries/RingGeometry.js"],
          threeEdgesGeometry: ["three/src/geometries/EdgesGeometry.js"],
          threeMaterial: ["three/src/materials/Material.js"],
          threeMeshPhongMaterial: ["three/src/materials/MeshPhongMaterial.js"],
          threeMeshPhysicalMaterial: [
            "three/src/materials/MeshPhysicalMaterial.js",
          ],
          threeMeshBasicMaterial: ["three/src/materials/MeshBasicMaterial.js"],
          threeLineDashedMaterial: [
            "three/src/materials/LineDashedMaterial.js",
          ],
          threeSpriteMaterial: ["three/src/materials/SpriteMaterial.js"],
          threeLineBasicMaterial: ["three/src/materials/LineBasicMaterial.js"],
          threeTextureLoader: ["three/src/loaders/TextureLoader.js"],
          threeTexture: ["three/src/textures/Texture.js"],
          threeSprite: ["three/src/objects/Sprite.js"],
          threeSpotLightShadow: ["three/src/lights/SpotLightShadow.js"],
          threeSpotLight: ["three/src/lights/SpotLight.js"],
          threeSpotLightHelper: ["three/src/helpers/SpotLightHelper.js"],
          threeCameraHelper: ["three/src/helpers/CameraHelper.js"],
          threePointLight: ["three/src/lights/PointLight.js"],
          threeDirectionalLight: ["three/src/lights/DirectionalLight.js"],
          threeAmbientLight: ["three/src/lights/AmbientLight.js"],
          threeLightShadow: ["three/src/lights/LightShadow.js"],
          threePerspectiveCamera: ["three/src/cameras/PerspectiveCamera.js"],
          threeOrthographicCamera: ["three/src/cameras/OrthographicCamera.js"],
          threeBufferGeometry: ["three/src/core/BufferGeometry.js"],
          threeBufferAttribute: ["three/src/core/BufferAttribute.js"],
          threeObject3D: ["three/src/core/Object3D.js"],
          threeRaycaster: ["three/src/core/Raycaster.js"],
          threeTriangle: ["three/src/math/Triangle.js"],
          threeSpherical: ["three/src/math/Spherical.js"],
          threeCylindrical: ["three/src/math/Cylindrical.js"],
          threePlane: ["three/src/math/Plane.js"],
          threeFrustum: ["three/src/math/Frustum.js"],
          threeSphere: ["three/src/math/Sphere.js"],
          threeRay: ["three/src/math/Ray.js"],
          threeMatrix4: ["three/src/math/Matrix4.js"],
          threeMatrix3: ["three/src/math/Matrix3.js"],
          threeBox3: ["three/src/math/Box3.js"],
          threeBox2: ["three/src/math/Box2.js"],
          threeLine3: ["three/src/math/Line3.js"],
          threeEuler: ["three/src/math/Euler.js"],
          threeVector4: ["three/src/math/Vector4.js"],
          threeVector3: ["three/src/math/Vector3.js"],
          threeVector2: ["three/src/math/Vector2.js"],
          threeQuaternion: ["three/src/math/Quaternion.js"],
          threeColor: ["three/src/math/Color.js"],
          threeGridHelper: ["three/src/helpers/GridHelper.js"],
          threeAxesHelper: ["three/src/helpers/AxesHelper.js"],
          threeConstants: ["three/src/constants.js"],
          threeInstancedBufferGeometry: [
            "three/src/core/InstancedBufferGeometry.js",
          ],
          threeInstancedInterleavedBuffer: [
            "three/src/core/InstancedInterleavedBuffer.js",
          ],
          threeInterleavedBufferAttribute: [
            "three/src/core/InterleavedBufferAttribute.js",
          ],
          threeShaderMaterial: ["three/src/materials/ShaderMaterial.js"],
          threeWireframeGeometry: ["three/src/geometries/WireframeGeometry.js"],
          threeImprovedNoise: ["three/addons/math/ImprovedNoise.js"],
          threeLottieLoader: ["three/addons/loaders/LottieLoader.js"],
          tres: ["@tresjs/core"],
          cientos: ["@tresjs/cientos"],
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
