import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Snackbar, Alert, Box } from "@mui/material";

// Provider & styles
import { theme } from "./styles/theme";
import { CartProvider, useCart } from "./hooks/useCart";

// Components
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { CartDrawer } from "./components/CartDrawer";

// Pages
import { Home } from "./pages/Home";
import { Products } from "./pages/Products";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";

export default function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <AppContent />
        </ThemeProvider>
      </CartProvider>
    </BrowserRouter>
  );
}

function AppContent() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { snackbar, closeNotification } = useCart();

  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh", bgcolor: "background.default" }}>
      {/* 1. Global Navigation */}
      <Navbar onOpenCart={() => setIsCartOpen(true)} />

      {/* 2. Main content container */}
      <Box component="main" sx={{ flexGrow: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Box>

      {/* 3. Global Footer */}
      <Footer />

      {/* 4. Sliding Cart Drawer */}
      <CartDrawer open={isCartOpen} onClose={() => setIsCartOpen(false)} />

      {/* 5. Centralized Snackbar Notifications */}
      <Snackbar 
        open={snackbar.open} 
        autoHideDuration={4000} 
        onClose={closeNotification}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
      >
        <Alert 
          onClose={closeNotification} 
          severity={snackbar.severity} 
          sx={{ width: "100%", borderRadius: "10px", fontWeight: 700, elevation: 6 }}
          variant="filled"
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
}
