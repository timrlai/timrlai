import { defineConfig, globalIgnores } from "eslint/config";
import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginVue from "eslint-plugin-vue";
import pluginVueA11y from "eslint-plugin-vuejs-accessibility";

export default defineConfig([
  globalIgnores(["node_modules/*", "dist/*"]),
  { files: ["**/*.{ts,mts,js,mjs,cjs,vue}"] },
  {
    languageOptions: {
      globals: globals.browser,
      parserOptions: {
        parser: "@typescript-eslint/parser",
      },
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...pluginVue.configs["flat/essential"],
  ...pluginVueA11y.configs["flat/recommended"],
  {
    rules: {
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-non-null-assertion": "off",
      "vue/multi-word-component-names": "off",
      "vue/object-curly-spacing": [2, "always"],
      "vue/html-closing-bracket-spacing": [
        2,
        {
          selfClosingTag: "always",
        },
      ],
      semi: [2, "always"],
      "vuejs-accessibility/label-has-for": [
        "error",
        {
          components: ["VLabel"],
          controlComponents: ["VInput"],
          required: {
            every: ["id"],
          },
          allowChildren: false,
        },
      ],
    },
  },
]);
