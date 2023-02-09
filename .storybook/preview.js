import { mantineTheme } from "storybook-addon-mantine";
import { theme } from "../src/libs/theme";
import "../src/styles/tailwind.css";

// These props are passed to the MantineProvider used by all stories.
const mantineProviderProps = {
  withCSSVariables: false,
  withGlobalStyles: true,
  withNormalizeCSS: true,
};

export const decorators = [
  mantineTheme(
    [
      { ...theme, themeName: "Light Mode" },
      {
        themeName: "light Mode - Green",
        primaryColor: "green",
        colorScheme: "light",
        radius: 0,
      },
    ],
    mantineProviderProps
  ),
];
