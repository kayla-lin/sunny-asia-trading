import { defineRecipe } from "@pandacss/dev";

export const buttonRecipe = defineRecipe({
  name: "button",
  description: "The styles for the Button component",
  base: {
    display: "flex",
  },
  variants: {
    visual: {
      primary: { bg: "primary", color: "white", _hover: { bg: "secondary" } },
      secondary: {
        border: "1px solid {primary}",
        _hover: { border: "1px solid {secondary}" },
      },
    },
    size: {
      sm: { padding: "4", fontSize: "12px" },
      lg: { padding: "8", fontSize: "40px" },
    },
  },
  defaultVariants: {
    visual: "primary",
    size: "sm",
  },
  jsx: ["Button"],
});
