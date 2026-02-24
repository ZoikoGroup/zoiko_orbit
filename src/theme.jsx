import { createTheme } from "@mui/material/styles";

// ── Brand Palette ────────────────────────────────────────────────────────────
const TEAL_MAIN = "#0e7c86";
const TEAL_DARK = "#0a5c65";
const TEAL_LIGHT = "#e0f7fa";
const NAVY_MAIN = "#2d3a8c";
const NAVY_DARK = "#1a2a4a";
const AMBER = "#f59e0b";
const WHATSAPP = "#25d366";

const theme = createTheme({
  // ── Palette ───────────────────────────────────────────────────────────────
  palette: {
    primary: {
      main: TEAL_MAIN,
      dark: TEAL_DARK,
      light: TEAL_LIGHT,
      contrastText: "#ffffff",
    },
    secondary: {
      main: NAVY_MAIN,
      dark: NAVY_DARK,
      contrastText: "#ffffff",
    },
    warning: {
      main: AMBER,
    },
    background: {
      default: "#f9fafb",
      paper: "#ffffff",
    },
    text: {
      primary: "#1a2a4a",
      secondary: "#64748b",
      disabled: "#aab4be",
    },
    divider: "#e4eaed",

    // Custom tokens available via theme.palette.brand.*
    brand: {
      teal: TEAL_MAIN,
      tealDark: TEAL_DARK,
      tealLight: TEAL_LIGHT,
      navy: NAVY_MAIN,
      navyDark: NAVY_DARK,
      amber: AMBER,
      whatsapp: WHATSAPP,
      // Glassmorphism helpers
      glass: "rgba(255,255,255,0.10)",
      glassBorder: "rgba(255,255,255,0.15)",
    },
  },

  // ── Typography ────────────────────────────────────────────────────────────
  typography: {
    fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif",
    h1: { fontWeight: 800, lineHeight: 1.15 },
    h2: { fontWeight: 800, lineHeight: 1.2 },
    h3: { fontWeight: 700, lineHeight: 1.25 },
    h4: { fontWeight: 700, lineHeight: 1.3 },
    h5: { fontWeight: 700, lineHeight: 1.35 },
    h6: { fontWeight: 700, lineHeight: 1.4 },
    subtitle1: { fontWeight: 600 },
    subtitle2: { fontWeight: 600 },
    body1: { lineHeight: 1.75 },
    body2: { lineHeight: 1.65 },
    overline: {
      fontWeight: 700,
      letterSpacing: "0.18em",
      lineHeight: 1.5,
    },
    button: {
      fontWeight: 600,
      textTransform: "none", // ← removes ALL-CAPS from every Button globally
    },
  },

  // ── Shape ─────────────────────────────────────────────────────────────────
  shape: {
    borderRadius: 8, // default 8px (~borderRadius: 1 in MUI units)
  },

  // ── Shadows ───────────────────────────────────────────────────────────────
  shadows: [
    "none",
    "0 1px 4px rgba(14,124,134,0.08)",
    "0 2px 8px rgba(14,124,134,0.10)",
    "0 4px 16px rgba(14,124,134,0.12)",
    "0 6px 24px rgba(14,124,134,0.14)",
    "0 8px 32px rgba(14,124,134,0.16)",
    "0 10px 40px rgba(14,124,134,0.18)",
    "0 12px 48px rgba(14,124,134,0.20)",
    ...Array(17).fill("none"), // fill remaining shadow slots
  ],

  // ── Component Overrides ───────────────────────────────────────────────────
  components: {
    // ── Button ──────────────────────────────────────────────────────────────
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          fontWeight: 600,
          textTransform: "none",
          transition: "all 0.22s ease",
        },
        containedPrimary: {
          backgroundColor: TEAL_MAIN,
          "&:hover": {
            backgroundColor: TEAL_DARK,
            boxShadow: "0 4px 16px rgba(14,124,134,0.28)",
          },
        },
        outlinedPrimary: {
          borderColor: TEAL_MAIN,
          color: TEAL_MAIN,
          "&:hover": {
            backgroundColor: TEAL_LIGHT,
            borderColor: TEAL_MAIN,
          },
        },
        sizeLarge: {
          paddingTop: "12px",
          paddingBottom: "12px",
          paddingLeft: "28px",
          paddingRight: "28px",
          fontSize: "1rem",
        },
        sizeSmall: {
          paddingTop: "6px",
          paddingBottom: "6px",
          paddingLeft: "14px",
          paddingRight: "14px",
        },
      },
    },

    // ── Card ────────────────────────────────────────────────────────────────
    MuiCard: {
      defaultProps: { elevation: 0 },
      styleOverrides: {
        root: {
          borderRadius: 16,
          border: "1px solid #e4eaed",
          transition: "transform 0.25s ease, box-shadow 0.25s ease",
          "&:hover": {
            transform: "translateY(-3px)",
            boxShadow: "0 8px 28px rgba(14,124,134,0.12)",
          },
        },
      },
    },

    // ── CardContent ─────────────────────────────────────────────────────────
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: "24px",
          "&:last-child": { paddingBottom: "24px" },
        },
      },
    },

    // ── Paper ───────────────────────────────────────────────────────────────
    MuiPaper: {
      defaultProps: { elevation: 0 },
      styleOverrides: {
        root: { borderRadius: 16 },
        rounded: { borderRadius: 16 },
      },
    },

    // ── Chip ────────────────────────────────────────────────────────────────
    MuiChip: {
      styleOverrides: {
        root: {
          fontWeight: 600,
          borderRadius: 6,
        },
        colorPrimary: {
          backgroundColor: TEAL_LIGHT,
          color: TEAL_MAIN,
        },
      },
    },

    // ── TextField ───────────────────────────────────────────────────────────
    MuiTextField: {
      defaultProps: { variant: "outlined", size: "medium" },
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            borderRadius: 8,
            transition: "box-shadow 0.2s",
            "&.Mui-focused": {
              boxShadow: `0 0 0 3px ${TEAL_LIGHT}`,
            },
            "& fieldset": {
              borderColor: "#e4eaed",
            },
            "&:hover fieldset": {
              borderColor: TEAL_MAIN,
            },
            "&.Mui-focused fieldset": {
              borderColor: TEAL_MAIN,
            },
          },
        },
      },
    },

    // ── Select ──────────────────────────────────────────────────────────────
    MuiSelect: {
      styleOverrides: {
        root: { borderRadius: 8 },
      },
    },

    // ── Tabs ────────────────────────────────────────────────────────────────
    MuiTab: {
      styleOverrides: {
        root: {
          textTransform: "none",
          fontWeight: 500,
          fontSize: "0.9rem",
          minWidth: "auto",
          paddingLeft: 16,
          paddingRight: 16,
          color: "#64748b",
          "&.Mui-selected": {
            color: TEAL_MAIN,
            fontWeight: 700,
          },
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        indicator: {
          backgroundColor: TEAL_MAIN,
          height: 3,
          borderRadius: 2,
        },
      },
    },

    // ── Divider ─────────────────────────────────────────────────────────────
    MuiDivider: {
      styleOverrides: {
        root: { borderColor: "#e4eaed" },
      },
    },

    // ── IconButton ──────────────────────────────────────────────────────────
    MuiIconButton: {
      styleOverrides: {
        root: {
          transition: "all 0.2s ease",
        },
      },
    },

    // ── Link ────────────────────────────────────────────────────────────────
    MuiLink: {
      defaultProps: { underline: "none" },
      styleOverrides: {
        root: {
          transition: "color 0.2s ease",
          cursor: "pointer",
        },
      },
    },

    // ── Container ───────────────────────────────────────────────────────────
    MuiContainer: {
      defaultProps: { maxWidth: "lg" },
    },

    // ── ToggleButton ─────────────────────────────────────────────────────────
    MuiToggleButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          fontWeight: 500,
          border: "none",
          borderRadius: "20px !important",
          paddingLeft: 20,
          paddingRight: 20,
          color: "#64748b",
          transition: "all 0.2s ease",
          "&.Mui-selected": {
            backgroundColor: TEAL_MAIN,
            color: "#ffffff",
            fontWeight: 700,
            "&:hover": { backgroundColor: TEAL_DARK },
          },
        },
      },
    },

    // ── AppBar ──────────────────────────────────────────────────────────────
    MuiAppBar: {
      styleOverrides: {
        root: { borderRadius: 0 }, // override global shape.borderRadius
      },
    },

    // ── Drawer ──────────────────────────────────────────────────────────────
    MuiDrawer: {
      styleOverrides: {
        paper: { borderRadius: 0 }, // drawer panels should also be square
      },
    },

    // ── Avatar ──────────────────────────────────────────────────────────────
    MuiAvatar: {
      styleOverrides: {
        root: { fontWeight: 700 },
      },
    },
  },
});

export default theme;

// ── Named exports for use in sx props where theme isn't injected ─────────────
export const COLORS = {
  teal: TEAL_MAIN,
  tealDark: TEAL_DARK,
  tealLight: TEAL_LIGHT,
  navy: NAVY_MAIN,
  navyDark: NAVY_DARK,
  amber: AMBER,
  whatsapp: WHATSAPP,
  footerBg: "#0d1f2d",
  sectionGray: "#f9fafb",
  darkBg: "#1a3a2a",
};

export const GRADIENTS = {
  teal: `linear-gradient(135deg, ${TEAL_MAIN} 0%, ${TEAL_DARK} 100%)`,
  tealReverse: `linear-gradient(135deg, ${TEAL_DARK} 0%, ${TEAL_MAIN} 100%)`,
  navy: "linear-gradient(135deg, #1a3fa8 0%, #1565c0 40%, #1e88e5 100%)",
  wildlife: "linear-gradient(135deg, #1a3a2a 0%, #0d2418 100%)",
  heroOverlay:
    "linear-gradient(to bottom, rgba(10,60,90,0.55) 60%, rgba(255,255,255,1) 100%)",
};

export const TRANSITIONS = {
  fast: "all 0.2s ease",
  normal: "all 0.25s ease",
  slow: "all 0.3s ease",
};
