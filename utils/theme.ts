import {
  extendTheme,
  StyleFunctionProps,
  type ThemeConfig,
} from "@chakra-ui/react";
import { Atkinson_Hyperlegible } from "@next/font/google";
import { mode } from "@chakra-ui/theme-tools";

const atkinson = Atkinson_Hyperlegible({ weight: "400", subsets: ["latin"] });

// swatches can be generated here
// https://smart-swatch.netlify.app/

const styles = {
  global: (props: ThemeConfig) => ({
    body: {
      color: mode("gray.800", "gray.800")(props),
      bg: mode("white", "white")(props),
      // lineHeight: 'base',
    },
    "*::placeholder": {
      color: mode("gray.400", "gray.400")(props),
    },
    "*, *::before, &::after": {
      borderColor: mode("gray.200", "gray.200")(props),
      // wordWrap: 'break-word',
    },
  }),
};
const theme: ThemeConfig = extendTheme({
  useSystemColorMode: true,
  colors: {
    brand: {
      50: "#e8e7ef",
      100: "#bbb8ce",
      200: "#c8c1fc",
      300: "#5f5a8d",
      400: "#322b6c",
      500: "#1b135c",
      600: "#181153",
      700: "#160f4a",
      800: "#130d40",
      900: "#100b37",
    },
  },
  fonts: {
    heading: atkinson.style.fontFamily,
    body: atkinson.style.fontFamily,
  },
  styles,
});

export default theme;
