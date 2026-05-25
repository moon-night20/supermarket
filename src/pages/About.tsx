import React from "react";
import { Link } from "react-router-dom";
import { STORE_INFO } from "../data/products";
import { Sprout, Users, Utensils, ShieldAlert, Heart, CalendarClock, ArrowRight } from "lucide-react";
import { 
  Box, 
  Container, 
  Typography, 
  Card, 
  CardContent, 
  Button,
  Paper,
  Divider,
  Avatar
} from "@mui/material";

export const About: React.FC = () => {
  const values = [
    {
      icon: <Sprout size={32} className="text-emerald-700" />,
      title: "Direct Cooperatives Supply",
      desc: "By bypassing unnecessary middlemen, we fetch farm-fresh produce straight from local growers in Holeta, Mojo, and Debre Zeyit, sending the revenue right back to Ethiopian growers."
    },
    {
      icon: <Heart size={32} className="text-emerald-700" />,
      title: "Rooted in Torhayloch",
      desc: "Initially formed as a humble neighborhood grocer, we have grown to serve thousands of families across Addis Ababa, keeping our flagship headquarters and operations centrally located near Torhayloch."
    },
    {
      icon: <Utensils size={32} className="text-emerald-700" />,
      title: "Traditional Foods Focus",
      desc: "Our catalog isn't just generic cereals. We keep a large inventory of authentic fresh local Ayib cheese, premium red Shunkurt, Berebere spices, and traditional snacks like seasoned crispy Kollo."
    }
  ];

  return (
    <Box sx={{ pb: 8 }}>
      {/* Hero Header Section */}
      <Box 
        sx={{ 
          background: "linear-gradient(135deg, #16a34a 0%, #14532d 100%)",
          color: "white", 
          py: { xs: 6, md: 8 }, 
          textAlign: "center",
          mb: 6,
          borderRadius: { xs: "0", md: "24px" },
          mx: { xs: 0, md: 4 },
          mt: { xs: 0, md: 4 },
          position: "relative",
          overflow: "hidden",
          boxShadow: "0 10px 30px rgba(22, 163, 74, 0.12)"
        }}
      >
        {/* Decorative glowing background */}
        <div className="absolute right-0 top-0 h-full w-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/10 to-transparent flex items-center justify-center pointer-events-none">
          <div className="w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        </div>

        <Container maxWidth="md" sx={{ position: "relative", zIndex: 1 }}>
          <span className="bg-orange-500 text-white px-3 py-0.5 rounded-full text-[10px] font-bold uppercase mb-2.5 inline-block shadow-md">
            Our Legacy
          </span>
          <Typography variant="h2" sx={{ fontWeight: 900, mb: 1.5, fontSize: { xs: "2rem", md: "2.8rem" }, letterSpacing: "-0.02em" }}>
            Sustaining Our Community
          </Typography>
          <Typography variant="body1" sx={{ opacity: 0.9, lineHeight: 1.6, maxWidth: 650, mx: "auto" }}>
            Serving Fresh Groceries & Premium Spices with True Ethiopian Hospitality, Since 2018.
          </Typography>
        </Container>
      </Box>

      {/* Grid Layout: Story Card and Hours Panel */}
      <Container maxWidth="lg" sx={{ mb: 8 }}>
        <Box className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <Box className="md:col-span-7">
            <Typography variant="h4" sx={{ fontWeight: 900, mb: 3 }}>
              Our Story & Dedication
            </Typography>
            <Typography variant="body1" sx={{ color: "text.secondary", mb: 2.5, lineHeight: 1.8 }}>
              Torhayloch Modern Supermarket commenced as a local family-owned retail corner near the bustling Torhayloch Ring Road roundabouts. Our mission was humble: to supply clean, high-grade, pasteurized daily milk, local onions, agricultural fruits, and premium dry spices to residents without forcing them to spend hours navigating congested open markets.
            </Typography>
            <Typography variant="body1" sx={{ color: "text.secondary", mb: 3, lineHeight: 1.8 }}>
              Today, we have expanded into a state-of-the-art inventory facility. Our modern app environment enables residents in Old Airport, Mexico, Sarbet, and Kolfe to order within seconds and have fresh-cut organic produce delivered directly via our motorcycle dispatch agents.
            </Typography>
            <Button 
              variant="contained" 
              color="primary" 
              component={Link}
              to="/products"
              endIcon={<ArrowRight size={18} />}
              sx={{ py: 1.5, px: 3, borderRadius: "10px", fontWeight: 800 }}
            >
              Start Your Basket
            </Button>
          </Box>

          <Box className="md:col-span-5">
            <Paper 
              elevation={0}
              sx={{ 
                p: 4, 
                borderRadius: "24px", 
                bgcolor: "#f1f5f9", 
                border: "1px solid", 
                borderColor: "divider",
                backgroundImage: "linear-gradient(225deg, #f8fafc 0%, #e2e8f0 100%)"
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 3 }}>
                <CalendarClock size={28} className="text-orange-500" />
                <Typography variant="h5" sx={{ fontWeight: 800 }}>
                  Store Operations
                </Typography>
              </Box>

              <Divider sx={{ mb: 3 }} />

              <Box sx={{ display: "flex", flexDirection: "column", gap: 2.5 }}>
                {STORE_INFO.hours.map((hour, index) => (
                  <div key={index}>
                    <Typography variant="subtitle2" sx={{ fontWeight: 800, color: "text.primary" }}>
                      {hour.days}
                    </Typography>
                    <Typography variant="body2" color="primary" sx={{ fontWeight: 700, fontFamily: "monospace" }}>
                      {hour.time}
                    </Typography>
                  </div>
                ))}
              </Box>

              <Divider sx={{ my: 3 }} />

              <Box>
                <Typography variant="subtitle2" sx={{ fontWeight: 800, color: "text.primary", mb: 0.5 }}>
                  Central Flagship Location
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  {STORE_INFO.location}
                </Typography>
              </Box>
            </Paper>
          </Box>
        </Box>
      </Container>

      {/* Section: Brand Core Values */}
      <Box sx={{ bgcolor: "#f8fafc", py: 8 }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: "center", mb: 5 }}>
            <Typography variant="h4" sx={{ fontWeight: 900, mb: 1.5 }}>
              Core Values We Stand By
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ maxWidth: 500, mx: "auto" }}>
              Ensuring unmatched premium freshness, local community trust, and friendly services.
            </Typography>
          </Box>

          <Box className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((val, i) => (
              <Box key={i}>
                <Card sx={{ height: "100%", p: 2, display: "flex", flexDirection: "column", bgcolor: "background.paper" }}>
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Box sx={{ mb: 2 }}>{val.icon}</Box>
                    <Typography variant="h6" sx={{ fontWeight: 800, mb: 1.5 }}>
                      {val.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                      {val.desc}
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>
    </Box>
  );
};
