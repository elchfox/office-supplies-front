import { createTheme } from "@mui/material/styles";
import { colors } from "./themeData";

export const theme = createTheme({
  direction: "rtl",
  components: {
    MuiAlert: {
      styleOverrides: {
        root: {
          padding: "6px 0px 6px 8px",
          borderRadius: 8,
        },
      },
    },
    MuiSwitch: {
      styleOverrides: {
        root: {
          width: 28,
          height: 16,
          padding: 0,
          display: "flex",
          "&:active": {
            "& .MuiSwitch-thumb": {
              width: 15,
            },
            "& .MuiSwitch-switchBase.Mui-checked": {
              transform: "translateX(9px)",
            },
          },
          "& .MuiSwitch-switchBase": {
            padding: 2,
            "&.Mui-checked": {
              transform: "translateX(12px)",
              color: "#fff",
              "& + .MuiSwitch-track": {
                opacity: 1,
                backgroundColor: colors.primary.main,
              },
            },
          },
          "& .MuiSwitch-thumb": {
            boxShadow: "0 2px 4px 0 rgb(0 35 11 / 20%)",
            width: 12,
            height: 12,
            borderRadius: 6,
            transition: "200ms",
          },
          "& .MuiSwitch-track": {
            borderRadius: 16 / 2,
            opacity: 1,
            backgroundColor: "rgba(0,0,0,.25)",
            boxSizing: "border-box",
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        // Name of the slot

        root: {
          // Some CSS
          // fontSize: "15px",
          borderRadius: 8,
          padding: "11px 22px",
          lineHeight: 1,
          boxShadow: "unset",
          fontWeight: "700",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          borderRadius: "0.5rem",
          overflow: "hidden",
          ".MuiInputLabel-root.Mui-focused": {
            color: colors.text.primary,
          },
          "& .MuiInputBase-root.MuiFilledInput-root": {
            "&:hover": {
              "&:before": {
                borderBottom: 0,
              },
            },
            "&:before,&:after": {
              borderBottom: 0,
            },
          },
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        root: {
          backgroundColor: "white",
          paddingInline: "40px",
          ".MuiTabs-flexContainer": {
            gap: "40px",
            ".Mui-selected": {
              color: "black",
            },
          },
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          color: "#737373",
          minHeight: "48px",
          padding: 0,
          minWidth: "unset",
          fontWeight: "600",
          textTransform: "capitalize",
        },
      },
    },
  },
  typography: {
    subtitle1: {
      fontWeight: 600,
      fontSize: 16,
    },
    subtitle2: {
      fontWeight: 600,
      fontSize: 14,
    },
    body1: {
      fontWeight: 400,
      fontSize: 16,
    },
    body2: {
      fontWeight: 400,
      fontSize: 14,
    },
    caption: {
      fontWeight: 400,
      fontSize: 12,
    },
    overline: {
      fontWeight: 400,
      fontSize: 12,
    },
    h1: {
      fontSize: 48,
      fontWeight: "bold",
    },
    h2: {
      fontSize: 32,
      fontWeight: "bold",
    },
    h3: {
      fontSize: 24,
      fontWeight: "bold",
    },
    h4: {
      fontSize: 20,
      fontWeight: "bold",
    },
    h5: {
      fontSize: 16,
      fontWeight: "bold",
    },
    h6: {
      fontSize: 14,
      fontWeight: "bold",
    },
  },
  palette: {
    primary: colors.primary,
    secondary: colors.secondary,
    info: colors.info,
    success: colors.success,
    warning: colors.warning,
    error: colors.error,
    text: colors.text,
  },
});
