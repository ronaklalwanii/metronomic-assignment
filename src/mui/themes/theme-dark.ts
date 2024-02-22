import AppConfig from "../../configs/app-config";

const themeDark = () => ({
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
      secondary: "#9FADBC",
      disabled: "#8C9BAB",
      primary: "#B6C2CF",
    },
    divider: "rgba(255,255,255,0.1)",
    background: {
      paper: "#161A1D",
      default: "#1D2125",
    },
  },
  typography: {
    htmlFontSize: 16,

    body1: {
      color: "#B6C2CF",
    },
    body2: {
      fontSize: 14,
      color: "#9FADBC",
    },
    caption: {
      fontSize: 12,
      color: "#8C9BAB",
    },
    h1: {
      color: "#B6C2CF",
    },
    h2: {
      color: "#B6C2CF",
    },
    h3: {
      color: "#B6C2CF",
    },
    h4: {
      color: "#B6C2CF",
    },
    h5: {
      color: "#B6C2CF",
    },
    h6: {
      color: "#B6C2CF",
    },
  },
});

export default themeDark;
