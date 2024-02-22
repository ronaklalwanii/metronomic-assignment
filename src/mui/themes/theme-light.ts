import AppConfig from "../../configs/app-config";

const themeLight = () => ({
  palette: {
    primary: {
      light: "#4d7ad8",
      main: AppConfig.primaryColor,
      dark: "#2B5EC7",
      contrastText: "#fff",
    },
    secondary: {
      light: "#D0D5DD",
      main: "#98A2B3",
      dark: "#667085",
      contrastText: "#fff",
    },
    success: {
      light: "#6CE9A6",
      main: "#84B94F",
      dark: "#12B76A",
      contrastText: "#fff",
    },
    error: {
      light: "#FDA29B",
      main: "#F97066",
      dark: "#F04438",
      contrastText: "#fff",
    },
    warning: {
      light: "#FEC84B",
      main: "#FDB022",
      dark: "#F79009",
      contrastText: "#fff",
    },
    info: {
      light: "#7CD4FD",
      main: "#36BFFA",
      dark: "#0BA5EC",
      contrastText: "#fff",
    },
    text: {
      secondary: "#667085",
      disabled: "#D0D5DD",
      primary: "#101828",
    },
    divider: "rgba(0,0,0,0.1)",
    background: {
      paper: "#fff",
      default: "#f8f8f8",
    },
  },
  typography: {
    htmlFontSize: 16,

    body1: {
      color: "#101828",
    },
    body2: {
      fontSize: 14,
      color: "#667085",
    },
    caption: {
      fontSize: 12,
      color: "#D0D5DD",
    },
  },
});

export default themeLight;
