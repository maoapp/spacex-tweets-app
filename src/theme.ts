import { createSystem, defaultConfig } from "@chakra-ui/react";

export const system = createSystem(defaultConfig, {
  theme: {
    tokens: {
      fonts: {
        heading: { value: `'Figtree', sans-serif` },
        body: { value: `'Figtree', sans-serif` },
      },
      colors: {
        toast: {
          success: { value: "red" }, // Green
          error: { value: "red" },   // Red
          warning: { value: "red" },
          info: { value: "red" },    // Blue
        },
        toastText: {
          light: { value: "white" },
          dark: { value: "black" },
        },
      },
    },
  },
});
