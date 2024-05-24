import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      light: "#62ADA0",
      main: "#840DFB",
      dark: "#2A0450",
      contrastText: "#fff",
    },
    secondary: {
      light: "#FCE476",
      main: "#F6D68C",
      dark: "#EEA705",
      contrastText: "#fff",
    },
    accent: {
      main: "#336094",
      contrastText: "#fff",
    },
  },
  typography: {
    button: {
      textTransform: "none",
    },
    h1: {
      fontWeight: 400,
      color: "#333333",
      lineHeight: 1.125,
      fontSize: 110,
    },
    h2: {
      fontWeight: 400,
      color: "#3b3b3b",
      lineHeight: 0.7,
      fontSize: "43px",
      "@media (min-width:600px)": {
        fontSize: "58px",
        lineHeight: 1.1,
      },
    },
    h3: {
      fontWeight: 400,
      color: "#3b3b3b",
      lineHeight: 1.1,
      fontSize: 23,
      "@media (min-width:600px)": {
        lineHeight: 1.08,
        fontSize: 30,
      },
      "@media (min-width:800px)": {
        lineHeight: 1.08,
        fontSize: 38,
      },
    },
    h4: {
      fontWeight: 700,
      color: "#3b3b3b",
      fontSize: 24,
    },
    h5: {
      fontSize: "1.25rem",
      fontWeight: 500,
      color: "#333333",
    },
    h6: {
      fontSize: "18px",
      fontWeight: 500,
      color: "#3b3b3b",
      lineHeight: "32px",
      maxWidth: 550,
    },
    body1: {
      color: "#616161",
    },
    body2: {
      color: "#616161",
    },
    subtitle1: {
      color: "#616161",
    },
    subtitle2: {
      color: "#616161",
      fontSize: 13,
    },
    caption: {
      color: "#616161",
      lineHeight: "1rem",
    },
    fontFamily: ["Be Vietnam Pro", "sans-serif"].join(","),
  },
});

declare module "@mui/material/styles" {
  interface Palette {
    accent: Palette["primary"];
  }

  // allow configuration using `createTheme`
  interface PaletteOptions {
    accent?: PaletteOptions["primary"];
  }
}
