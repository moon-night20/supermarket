import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#16a34a", // Sleek Green-600 from AbyssiniaGrocers style
      light: "#4ade80",
      dark: "#15803d",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#ea580c", // Orange-600 Highlight action brand style
      light: "#fb923c",
      dark: "#c2410c",
      contrastText: "#ffffff",
    },
    background: {
      default: "#f8fafc", // Beautiful clean slate-50 background representation
      paper: "#ffffff",
    },
    text: {
      primary: "#0f172a", // Sleek Slate-900 typography primary
      secondary: "#475569", // Medium Slate-600 text
    },
    divider: "#e2e8f0", // Subtle border border-slate-200 line
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 900,
      letterSpacing: "-0.025em",
    },
    h2: {
      fontWeight: 800,
      letterSpacing: "-0.02em",
    },
    h5: {
      fontWeight: 600,
    },
    h6: {
      fontWeight: 600,
    },
    subtitle1: {
      fontWeight: 500,
    },
    button: {
      textTransform: "none",
      fontWeight: 700,
    },
  },
  shape: {
    borderRadius: 16, // Beautifully rounded-2xl style profile
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12, // Modern rounded style
          boxShadow: "none",
          fontWeight: 700,
          transition: "all 0.2s ease-in-out",
          "&:hover": {
            boxShadow: "0 4px 12px rgba(22, 163, 74, 0.15)",
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 18,
          boxShadow: "0 1px 3px 0 rgba(15, 23, 42, 0.05), 0 1px 2px -1px rgba(15, 23, 42, 0.05)",
          border: "1px solid #e2e8f0",
          transition: "transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out",
          "&:hover": {
            transform: "translateY(-4px)",
            boxShadow: "0 10px 25px -5px rgba(15, 23, 42, 0.08), 0 8px 10px -6px rgba(15, 23, 42, 0.08)",
          },
        },
      },
    },
  },
});
