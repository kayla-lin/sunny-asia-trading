import { buttonRecipe } from "@/styles/button.recipe";
import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: [
    "./src/components/**/*.{ts,tsx,js,jsx}",
    "./src/app/**/*.{ts,tsx,js,jsx}",
    "./src/panda-css/**/*.{ts,tsx,js,jsx}",
  ],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      recipes: {
        button: buttonRecipe,
      },
      tokens: {
        colors: {
          primary: { value: "#314344" },
          secondary: { value: "#517076" },
          gray: { value: "#EEEEEE" },
        },
        fonts: {
          body: { value: "system-ui, sans-serif" },
        },
      },
    },
  },

  // The output directory for your css system
  outdir: "styled-system",
});
