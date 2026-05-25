import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { DUMMY_PRODUCTS, CATEGORIES } from "../data/products";
import { ProductCard } from "../components/ProductCard";
import { useCart } from "../hooks/useCart";
import { 
  ArrowRight, 
  ShoppingBag, 
  Percent, 
  CheckCircle2, 
  Truck, 
  Clock, 
  Heart,
  Sparkles,
  Award
} from "lucide-react";
import { 
  Box, 
  Container, 
  Typography, 
  Button, 
  Card, 
  CardContent, 
  Paper, 
  Chip,
  IconButton
} from "@mui/material";

export const Home: React.FC = () => {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  // Pick featured products (limit to 4)
  const featuredProducts = DUMMY_PRODUCTS.filter((p) => p.isFeatured).slice(0, 4);

  // Pick promo products (limit to 4)
  const promoProducts = DUMMY_PRODUCTS.filter((p) => p.isPromo).slice(0, 4);

  const stats = [
    { icon: <Truck size={32} className="text-emerald-600" />, title: "Free local Delivery", desc: "No minimum order inside Torhayloch, Old Airport & Mexico" },
    { icon: <CheckCircle2 size={32} className="text-emerald-600" />, title: "100% Fresh Daily", desc: "Directly sourced from farms in Holeta, Mojo & Assosa" },
    { icon: <Clock size={32} className="text-emerald-600" />, title: "Express 2-hr Delivery", desc: "Our local motorbike fleet guarantees blazing fast arrivals" },
    { icon: <Award size={32} className="text-emerald-600" />, title: "Ethiopian Authentic", desc: "Fresh local Ayib, Shunkurt, Harar coffee, & local Kollo" }
  ];

  return (
    <Box sx={{ pb: 8 }}>
      {/* 1. Hero Section Banner */}
      <Box 
        sx={{ 
          position: "relative", 
          background: "linear-gradient(135deg, #16a34a 0%, #14532d 100%)",
          color: "white", 
          py: { xs: 8, md: 10 }, 
          px: { xs: 3, md: 8 },
          mb: 6,
          borderRadius: { xs: "0", md: "24px" },
          overflow: "hidden",
          mx: { xs: 0, md: 4 },
          mt: { xs: 0, md: 4 },
          boxShadow: "0 10px 30px rgba(22, 163, 74, 0.15)"
        }}
      >
        {/* Decorative glowing orbs from the design HTML */}
        <div className="absolute right-0 top-0 h-full w-1/2 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/15 to-transparent flex items-center justify-center pointer-events-none">
          <div className="w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
        </div>

        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 10 }}>
          <Box className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <Box className="md:col-span-8">
              <span className="bg-orange-500 text-white px-3.5 py-1 rounded-full text-xs font-bold uppercase mb-4 inline-block shadow-lg">
                Big Sale Up to 40%
              </span>
              <Typography 
                variant="h1" 
                sx={{ 
                  fontSize: { xs: "2.4rem", md: "3.5rem" }, 
                  fontWeight: 900, 
                  lineHeight: 1.15, 
                  mb: 2,
                  letterSpacing: "-0.03em"
                }}
              >
                Fresh Groceries <br className="hidden md:inline" />
                <span className="text-orange-400">Delivered Daily.</span>
              </Typography>
              <Typography 
                variant="body1" 
                sx={{ 
                  fontSize: { xs: "0.95rem", md: "1.1rem" }, 
                  color: "rgba(255, 255, 255, 0.9)", 
                  mb: 4, 
                  lineHeight: 1.6,
                  maxWidth: "580px" 
                }}
              >
                Sourced from local farms around Addis. Skip the traditional market traffic. From Holeta organic potatoes to fresh Assosa mangoes, order everything fresh right to your doorstep in Torhayloch.
              </Typography>
              <Typography variant="h6" sx={{ fontWeight: 800, mb: 1 }}>
                welcome to our online shop
              </Typography>
              <Typography variant="body2" sx={{ opacity: 0.9, mb: 3 }}>
                we hop you enjoy it
              </Typography>
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
                <Button 
                  variant="contained" 
                  color="secondary" 
                  size="large"
                  component={Link}
                  to="/products"
                  endIcon={<ArrowRight size={18} />}
                  sx={{ 
                    py: 1.6, 
                    px: 3.5, 
                    borderRadius: "14px", 
                    fontSize: "1rem", 
                    fontWeight: 800,
                    bgcolor: "#ea580c",
                    "&:hover": { bgcolor: "#c2410c" }
                  }}
                >
                  Order Groceries Now
                </Button>
                <Button 
                  variant="outlined" 
                  color="inherit" 
                  size="large"
                  component={Link}
                  to="/products?promo=true"
                  startIcon={<Percent size={18} />}
                  sx={{ 
                    py: 1.6, 
                    px: 3.5, 
                    borderRadius: "14px", 
                    fontSize: "1rem", 
                    fontWeight: 700,
                    borderColor: "rgba(255,255,255,0.35)",
                    "&:hover": { borderColor: "white", bgcolor: "rgba(255,255,255,0.08)" }
                  }}
                >
                  View Today's Promos
                </Button>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* 2. Brand Value Props */}
      <Container maxWidth="lg" sx={{ mb: 8 }}>
        <Box className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <Box key={i}>
              <Card 
                sx={{ 
                  p: 3, 
                  height: "100%", 
                  border: "1px solid", 
                  borderColor: "divider", 
                  bgcolor: "background.paper",
                  textAlign: "center"
                }}
              >
                <Box className="mx-auto bg-emerald-50 w-14 h-14 rounded-2xl flex items-center justify-center mb-3">
                  {stat.icon}
                </Box>
                <Typography variant="subtitle1" sx={{ fontWeight: 800, mb: 1 }}>
                  {stat.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {stat.desc}
                </Typography>
              </Card>
            </Box>
          ))}
        </Box>
      </Container>

      {/* 3. Browse categories */}
      <Container maxWidth="lg" sx={{ mb: 8 }}>
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", mb: 4 }}>
          <div>
            <Typography variant="h4" sx={{ fontWeight: 900, color: "text.primary" }}>
              Explore Our Smart Categories
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Specially categorized premium sections for the ultimate grocery experience
            </Typography>
          </div>
          <Button 
            component={Link} 
            to="/products" 
            endIcon={<ArrowRight size={16} />} 
            sx={{ fontWeight: 700 }}
          >
            See All Shop
          </Button>
        </Box>

        <Box className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {CATEGORIES.slice(1).map((cat) => {
            // Get mock item counts
            const count = DUMMY_PRODUCTS.filter((p) => p.category === cat.id).length;
            return (
              <Box key={cat.id}>
                <Card 
                  onClick={() => navigate(`/products?category=${cat.id}`)}
                  sx={{ 
                    cursor: "pointer", 
                    p: 2.5, 
                    textAlign: "center",
                    border: "1px solid",
                    borderColor: "divider",
                    transition: "all 0.2s ease-in-out",
                    "&:hover": {
                      borderColor: "primary.main",
                      bgcolor: "rgba(21, 128, 61, 0.02)",
                      transform: "translateY(-4px)"
                    }
                  }}
                >
                  <Typography variant="h5" sx={{ mb: 1, textTransform: "capitalize", fontWeight: 800 }}>
                    {cat.name === "Fruits" && "🍊"}
                    {cat.name === "Vegetables" && "🥬"}
                    {cat.name === "Beverages" && "☕"}
                    {cat.name === "Dairy Products" && "🥛"}
                    {cat.name === "Snacks" && "🍿"}
                    {cat.name === "Household Items" && "🧹"}
                  </Typography>
                  <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 0.5 }}>
                    {cat.name}
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    {count} Fresh Items
                  </Typography>
                </Card>
              </Box>
            );
          })}
        </Box>
      </Container>

      {/* 4. Promotional Banner */}
      <Container maxWidth="lg" sx={{ mb: 8 }}>
        <Paper 
          sx={{ 
            p: { xs: 4, md: 6 }, 
            borderRadius: "24px", 
            bgcolor: "secondary.main", 
            color: "white",
            backgroundImage: `linear-gradient(225deg, rgba(249, 115, 22, 0.95) 0%, rgba(194, 65, 12, 0.95) 100%)`,
            position: "relative",
            overflow: "hidden"
          }}
        >
          {/* Abstract circles */}
          <div className="absolute right-0 top-0 w-80 h-80 bg-white/5 rounded-full translate-x-12 -translate-y-12"></div>
          <div className="absolute left-1/3 bottom-0 w-48 h-48 bg-white/5 rounded-full translate-y-12"></div>

          <Box className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative z-10">
            <Box className="md:col-span-8">
              <Chip 
                label="MESSOB DISCOUNTS - THIS WEEK ONLY" 
                size="small" 
                sx={{ bgcolor: "white", color: "secondary.dark", fontWeight: 900, mb: 2 }} 
              />
              <Typography variant="h3" sx={{ fontWeight: 900, mb: 1.5, fontSize: { xs: "2rem", md: "2.8rem" } }}>
                Organic Timatim & Red Shinkurt Up to <span className="underline">25% OFF</span>
              </Typography>
              <Typography variant="body1" sx={{ color: "amber.50", mb: 3, opacity: 0.9, maxWidth: "650px" }}>
                We've partnered with local Holeta cooperatives to bring you premium cooking onions and fresh juicy Sodo tomatoes at unbeatable rates. Support local farmers and cook the perfect Wot for dinner!
              </Typography>
              
              {/* Feature Countdown Timer Representation */}
              <div className="flex gap-3 mb-4">
                <div className="bg-white/10 backdrop-blur px-3 py-1.5 rounded-lg text-center font-mono">
                  <span className="block text-xl font-bold">02</span>
                  <span className="text-[9px] uppercase font-bold tracking-wider">Days</span>
                </div>
                <div className="bg-white/10 backdrop-blur px-3 py-1.5 rounded-lg text-center font-mono">
                  <span className="block text-xl font-bold">14</span>
                  <span className="text-[9px] uppercase font-bold tracking-wider">Hours</span>
                </div>
                <div className="bg-white/10 backdrop-blur px-3 py-1.5 rounded-lg text-center font-mono">
                  <span className="block text-xl font-bold">55</span>
                  <span className="text-[9px] uppercase font-bold tracking-wider">Mins</span>
                </div>
              </div>
            </Box>
            <Box className="md:col-span-4 flex justify-start md:justify-end">
              <Button 
                variant="contained" 
                sx={{ 
                  bgcolor: "white", 
                  color: "secondary.main", 
                  py: 2, 
                  px: 4, 
                  borderRadius: "12px", 
                  fontSize: "1.05rem",
                  fontWeight: 900,
                  "&:hover": { bgcolor: "#f8fafc", transform: "scale(1.03)" }
                }}
                component={Link}
                to="/products?category=vegetables"
              >
                Claim Discount Now
              </Button>
            </Box>
          </Box>
        </Paper>
      </Container>

      {/* 5. Featured Products Grid */}
      <Container maxWidth="lg" sx={{ mb: 8 }}>
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", mb: 4 }}>
          <div>
            <Typography variant="h4" sx={{ fontWeight: 900, color: "text.primary" }}>
              Best Selling Staples
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Handpicked premium groceries highly requested around the Torhayloch area
            </Typography>
          </div>
          <Button 
            component={Link} 
            to="/products" 
            endIcon={<ArrowRight size={16} />}
            sx={{ fontWeight: 700 }}
          >
            Show All
          </Button>
        </Box>

        <Box className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <Box key={product.id}>
              <ProductCard product={product} />
            </Box>
          ))}
        </Box>
      </Container>

      {/* 6. Promotional Items Grid */}
      <Container maxWidth="lg" sx={{ mb: 4 }}>
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", mb: 4 }}>
          <div>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Percent className="text-orange-500 animate-bounce" size={24} />
              <Typography variant="h4" sx={{ fontWeight: 900, color: "text.primary" }}>
                Flash Promotions
              </Typography>
            </Box>
            <Typography variant="body2" color="text.secondary">
              Score incredible deals on daily pantry items and popular snacks
            </Typography>
          </div>
          <Button 
            component={Link} 
            to="/products?promo=true" 
            endIcon={<ArrowRight size={16} />}
            sx={{ fontWeight: 700 }}
          >
            Show All Deals
          </Button>
        </Box>

        <Box className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {promoProducts.map((product) => (
            <Box key={product.id}>
              <ProductCard product={product} />
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};
