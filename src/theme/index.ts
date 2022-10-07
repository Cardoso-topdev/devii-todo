import { ThemeOptions } from "@mui/material/styles";

const theme: ThemeOptions = {
  palette: {
    primary: {
      main: "#00A79D",
      contrastText: "#2C2532",
    },
    secondary: {
      main: "#FAFBFE",
    },
    info: {
      main: "#408CCC",
    },
    warning: {
      light: "#886C46",
      main: "#FBB04050",
    },
    success: {
      light: "#7FD3BA",
      main: "#00A77550",
    },
    error: {
      light: "#EC8DAD",
      main: "#DA1C5C50",
    },
    action: {
      hover: "#0B6774",
    },
    common: {},
    text: {
      primary: "#F4F5FD",
      secondary: "#BFBFD4",
      disabled: "#B8B8C3",
    },
    background: {
      default: "#010631",
      paper: "#17294D",
    },
  },
  shape: {
    borderRadius: 8,
  },
  spacing: 4,
  typography: {
    fontFamily: "Nunito",
    fontSize: 16,
    fontWeightRegular: 400,
    fontWeightBold: 700,
    h5: {
      fontWeight: 400,
      fontStyle: "normal",
      fontSize: "1.5rem",
    },
    body1: {
      fontWeight: 400,
      fontSize: "1.125rem",
    },
    body2: {
      fontWeight: 400,
      fontSize: "0.875rem",
    },
    button: {
      fontWeight: 500,
      fontSize: "0.9375rem",
    },
    subtitle1: {
      fontFamily: "Roboto",
      fontWeight: 400,
      fontSize: "0.8125rem",
    },
  },
};

export default theme;
