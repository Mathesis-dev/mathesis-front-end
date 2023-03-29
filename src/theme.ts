import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  fonts: {
    body: `'Fira Sans', sans-serif`,
  },
  colors: {
    primary: {
      100: "#6E4AFF",
      200: "#1F173F",
    },
    shadow: {
      100: "rgba(235, 235, 245, 0.2)",
    },
  },
});
