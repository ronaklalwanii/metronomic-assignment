import { PaletteMode } from "@mui/material";

export type AppMode = PaletteMode;

export type ConfigType = {
  mode: AppMode;
  sidebarWidth: number;
  primaryColor: string;
  foldedSidebarWidth: number;
};
