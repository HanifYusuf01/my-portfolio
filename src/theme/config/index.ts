import { extendTheme } from "@chakra-ui/react";
// Supports weights 100-700
import "@fontsource-variable/josefin-sans";
import "@fontsource/preahvihear";

export const theme = extendTheme({
  fonts: {
    accent: `"preahvihear", sans-serif`,
    work: `"Work Sans Variable", sans-serif`,
  },
  styles: {
    global: () => ({
      body: {
        fontFamily: `'Josefin Sans Variable', sans-serif`,
      },
    }),
  },
});
