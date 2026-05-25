import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useCart } from "../hooks/useCart";
import { STORE_INFO } from "../data/products";
import { 
  ShoppingCart, 
  Menu, 
  X, 
  Phone, 
  MapPin, 
  Sprout, 
  ShoppingBag, 
  Info, 
  PhoneCall,
  Sparkles
} from "lucide-react";
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Button, 
  IconButton, 
  Badge, 
  Box, 
  Container, 
  Drawer, 
  List, 
  ListItem, 
  ListItemButton, 
  ListItemText, 
  Divider,
  Chip
} from "@mui/material";

interface NavbarProps {
  onOpenCart: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCart }) => {
  const { cartCount, cartTotal } = useCart();
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navItems = [
    { label: "Home", path: "/" },
    { label: "Shop Products", path: "/products" },
    { label: "About Us", path: "/about" },
    { label: "Contact", path: "/contact" }
  ];

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center", p: 2 }}>
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 1, my: 2 }}>
        <Sprout className="text-emerald-600" size={28} />
        <Typography variant="h6" sx={{ fontWeight: 900, color: "primary.main" }}>
          sSUPER
        </Typography>
        <Typography variant="h6" sx={{ fontWeight: 900, color: "secondary.main" }}>
          MARKET
        </Typography>
      </Box>
      <Divider sx={{ mb: 2 }} />
      <List>
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <ListItem key={item.label} disablePadding>
              <ListItemButton 
                component={Link} 
                to={item.path}
                sx={{ 
                  textAlign: "center",
                  borderRadius: 2,
                  mx: 1,
                  my: 0.5,
                  backgroundColor: isActive ? "rgba(21, 128, 61, 0.08)" : "transparent",
                  color: isActive ? "primary.main" : "text.primary",
                  fontWeight: isActive ? 700 : 500,
                  "&:hover": {
                    backgroundColor: "rgba(21, 128, 61, 0.04)"
                  }
                }}
              >
                <ListItemText 
                  primary={
                    <Typography variant="body1" sx={{ fontWeight: isActive ? 700 : 500 }}>
                      {item.label}
                    </Typography>
                  } 
                />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
      <Divider sx={{ my: 2 }} />
      <Box sx={{ px: 2, mt: 3 }}>
        <Button 
          variant="contained" 
          color="secondary" 
          fullWidth 
          startIcon={<ShoppingCart size={18} />}
          onClick={onOpenCart}
          sx={{ py: 1.2, borderRadius: 3 }}
        >
          View Cart (ETB {cartTotal.toFixed(2)})
        </Button>
      </Box>
    </Box>
  );

  return (
    <>
      {/* Top Banner Bar */}
      <Box className="bg-emerald-900 text-emerald-100 py-1.5 px-4 text-xs font-medium hidden md:block">
        <Container maxWidth="lg" className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <MapPin size={13} className="text-orange-400" />
              Torhayloch Road, Addis Ababa
            </span>
            <span className="flex items-center gap-1">
              <Phone size={13} className="text-orange-400" />
              {STORE_INFO.phone}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Sparkles size={13} className="text-orange-400 animate-pulse" />
            <span>Fast delivery to Old Airport, Mexico, and Kolfe!</span>
          </div>
        </Container>
      </Box>

      {/* Main Bar */}
      <AppBar position="sticky" color="default" sx={{ bgcolor: "background.paper", borderBottom: "1px solid", borderColor: "slate-200", boxSizing: "border-box" }} elevation={0}>
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ height: 68, justifyContent: "space-between" }}>
            {/* Logo */}
            <Box 
              component={Link} 
              to="/" 
              sx={{ 
                display: "flex", 
                alignItems: "center", 
                gap: 1.5, 
                textDecoration: "none" 
              }}
            >
              <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-sm shrink-0">
                T
              </div>
              <div>
                <div className="flex items-center">
                  <span className="text-lg md:text-xl font-bold text-slate-800 tracking-tight">sSUPER</span>
                  <span className="text-lg md:text-xl font-bold text-green-600 tracking-tight ml-0.5">MARKET</span>
                </div>
                <div className="text-[9px] text-slate-400 font-sans tracking-wide -mt-0.5 hidden sm:block">📍 ADDIS ABABA • FRESH FOODS</div>
              </div>
            </Box>

            {/* Desktop Navigation Links */}
            <Box sx={{ display: { xs: "none", md: "flex" }, gap: 1.5, alignItems: "center" }}>
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.label}
                    to={item.path}
                    className={`text-sm font-semibold transition-colors duration-200 px-3.5 py-1.5 rounded-xl ${
                      isActive 
                        ? "text-green-700 bg-green-50/70 border border-green-100" 
                        : "text-slate-600 hover:text-green-600 hover:bg-slate-50"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </Box>

            {/* Icons Bar */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
              {/* Shopping Cart Button */}
              <button
                onClick={onOpenCart}
                className="relative p-2 px-4 bg-orange-50 text-orange-600 hover:bg-orange-100 transition-all rounded-full flex items-center gap-2.5 cursor-pointer border border-orange-100 shadow-sm"
              >
                <div className="relative">
                  <ShoppingCart size={18} className="text-orange-600 shrink-0" />
                  {cartCount > 0 && (
                    <span className="absolute -top-2.5 -right-2.5 bg-orange-600 text-white text-[9px] w-5 h-5 flex items-center justify-center rounded-full border-2 border-white font-black shadow-sm">
                      {cartCount}
                    </span>
                  )}
                </div>
                <div className="text-left hidden sm:block">
                  <div className="text-[8px] text-orange-500 font-bold uppercase tracking-wider leading-none">My Basket</div>
                  <div className="text-xs font-black font-mono text-orange-700 leading-normal">ETB {cartTotal.toFixed(0)}</div>
                </div>
              </button>

              {/* Mobile Menu Icon */}
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ display: { md: "none" }, ml: 0.5, p: 1, border: "1px solid", borderColor: "divider", borderRadius: "12px" }}
              >
                <Menu size={18} />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: 280, borderRadius: "0 16px 16px 0" },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};
