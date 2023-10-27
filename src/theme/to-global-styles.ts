// MUI Imports
import { GlobalStylesProps, Theme } from "@mui/material";

export function toGlobalStyles(theme: Theme): GlobalStylesProps["styles"] {
  // Dark Mode
  const isDark = theme.palette.mode === "dark";

  // Nprogress Bar
  const nprogressBarBg = isDark
    ? theme.palette.primary.dark
    : theme.palette.primary.light;

  return {
    // Ngrogress Bar
    "#nprogress .bar": {
      position: "fixed",
      left: 0,
      top: 0,
      zIndex: theme.zIndex.appBar + 1,

      width: "100%",
      height: 3,

      backgroundColor: nprogressBarBg,
    },

    // React Root Element
    "#root": {
      height: "100%",
    },

    // Body
    "html, body": {
      height: "100%",
    },
  };
}