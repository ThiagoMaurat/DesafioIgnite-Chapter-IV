import { extendTheme, ThemeConfig } from "@chakra-ui/react";
import type { StyleFunctionProps } from "@chakra-ui/styled-system";
export const theme: ThemeConfig = extendTheme({
  breakpoints: {
    sm: "375px",
    md: "768px",
    lg: "960px",
    xl: "1200px",
    "2xl": "1536px",
  },
  styles: {
    global: () => ({
      body: {
        fontFamily: "Poppins",
        bg: "#F5F8FA",
        lineHeight: "base",
        maxW: "1440px",
        margin: "0 auto",
      },
      "*": {
        margin: "0",
        padding: "0",
        boxSizing: "border-box",
      },
      "a, Link": {
        textDecoration: "none",
      },
      li: {
        listStyle: "none",
      },
    }),
  },
});
