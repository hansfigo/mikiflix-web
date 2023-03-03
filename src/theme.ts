import { extendTheme } from "@chakra-ui/react";
import { ThemeOverride } from "@chakra-ui/react";
import "@fontsource/noto-color-emoji";

// Define your theme object
const theme: ThemeOverride = {
  fonts: {
    heading: `'Open Sans', sans-serif`,
    body: `'Raleway', sans-serif`,
  },
};

const customTheme = extendTheme(theme);

export default customTheme;
