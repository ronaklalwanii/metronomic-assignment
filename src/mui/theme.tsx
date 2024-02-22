import { ThemeOptions, createTheme } from "@mui/material/styles";

import themeDark from "./themes/theme-dark";
import themeLight from "./themes/theme-light";

import shadowsLight from "./shadows/shadows-light";
import shadowsDark from "./shadows/shadows-dark";

import type { AppMode } from "../types/configs";

const values = {
  dark: themeDark,
  light: themeLight,
};

const theme = (mode: AppMode) => {
  return createTheme({
    palette: {
      mode: mode,
      ...(values[mode] as ThemeOptions).palette,
    },
    typography: {
      ...(values[mode] as ThemeOptions).typography,
    },
    shadows: mode === "light" ? shadowsLight : shadowsDark,
    shape: {
      borderRadius: 4,
    },
  });
};

export default theme;
