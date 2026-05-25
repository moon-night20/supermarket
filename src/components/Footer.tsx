import React from "react";
import { Link } from "react-router-dom";
import { STORE_INFO, CATEGORIES } from "../data/products";
import { 
  Sprout, 
  MapPin, 
  PhoneCall, 
  Mail, 
  Clock, 
  Facebook, 
  Send, 
  Instagram, 
  ArrowUpRight, 
  Tags,
  ShieldCheck
} from "lucide-react";
import { 
  Box, 
  Container, 
  Typography, 
  IconButton, 
  Divider, 
  Button,
  List,
  ListItem,
  ListItemText
} from "@mui/material";

export const Footer: React.FC = () => {
  return (
    <Box sx={{ bgcolor: "neutral.900", color: "#f8fafc", pt: 8, pb: 4, mt: "auto", borderTop: "4px solid", borderColor: "secondary.main", backgroundColor: "#0f172a" }}>
      <Container maxWidth="lg">
        <Box className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 mb-12">
          {/* Column 1: Store Intro */}
          <Box className="lg:col-span-4">
            <Box sx={{ display: "flex", alignItems: "center", gap: 1.2, mb: 2.5 }}>
              <div className="bg-emerald-600 p-2 rounded-xl text-white">
                <Sprout size={24} />
              </div>
              <Typography variant="h5" sx={{ fontWeight: 900, fontSize: "1.4rem" }}>
                <span className="text-emerald-400">sSUPER</span> <span className="text-amber-500">MARKET</span>
              </Typography>
            </Box>
            <Typography variant="body2" sx={{ color: "#94a3b8", mb: 3, lineHeight: 1.7 }}>
              Providing the freshest groceries, high-quality spices, imported pantry products, and household necessities directly to the Torhayloch community in Addis Ababa. Experience quality, speed, and standard Ethiopian hospitality.
            </Typography>
            <Box sx={{ display: "flex", gap: 1.5 }}>
              <IconButton 
                component="a" 
                href={STORE_INFO.socials.facebook} 
                target="_blank" 
                rel="noopener noreferrer"
                sx={{ bgcolor: "#1e293b", color: "#38bdf8", "&:hover": { bgcolor: "primary.main", color: "white" } }}
              >
                <Facebook size={18} />
              </IconButton>
              <IconButton 
                component="a" 
                href={STORE_INFO.socials.telegram} 
                target="_blank" 
                rel="noopener noreferrer"
                sx={{ bgcolor: "#1e293b", color: "#22d3ee", "&:hover": { bgcolor: "primary.main", color: "white" } }}
              >
                <Send size={18} />
              </IconButton>
              <IconButton 
                component="a" 
                href={STORE_INFO.socials.instagram} 
                target="_blank" 
                rel="noopener noreferrer"
                sx={{ bgcolor: "#1e293b", color: "#f43f5e", "&:hover": { bgcolor: "primary.main", color: "white" } }}
              >
                <Instagram size={18} />
              </IconButton>
            </Box>
          </Box>

          {/* Column 2: Quick Links */}
          <Box className="lg:col-span-2">
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 2.5, color: "#f1f5f9", fontSize: "1.05rem", position: "relative", pb: 1, "&::after": { content: '""', position: "absolute", bottom: 0, left: 0, width: "30px", height: "2px", bgcolor: "secondary.main" } }}>
              Quick Links
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
              {["Home", "Products", "About", "Contact"].map((item) => (
                <Link 
                  key={item} 
                  to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  className="text-gray-400 hover:text-emerald-400 transition-colors text-sm font-medium flex items-center gap-1"
                >
                  <ArrowUpRight size={13} className="text-gray-500" />
                  {item}
                </Link>
              ))}
            </Box>
          </Box>

          {/* Column 3: Store Categories */}
          <Box className="lg:col-span-2">
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 2.5, color: "#f1f5f9", fontSize: "1.05rem", position: "relative", pb: 1, "&::after": { content: '""', position: "absolute", bottom: 0, left: 0, width: "30px", height: "2px", bgcolor: "secondary.main" } }}>
              Categories
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
              {CATEGORIES.slice(1, 6).map((cat) => (
                <Link 
                  key={cat.id} 
                  to={`/products?category=${cat.id}`}
                  className="text-gray-400 hover:text-emerald-400 transition-colors text-sm font-medium"
                >
                  {cat.name}
                </Link>
              ))}
            </Box>
          </Box>

          {/* Column 4: Location & Contact */}
          <Box className="sm:col-span-2 lg:col-span-4">
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 2.5, color: "#f1f5f9", fontSize: "1.05rem", position: "relative", pb: 1, "&::after": { content: '""', position: "absolute", bottom: 0, left: 0, width: "30px", height: "2px", bgcolor: "secondary.main" } }}>
              Contact Address
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <div className="flex gap-2.5 items-start">
                <MapPin className="text-emerald-500 shrink-0 mt-0.5" size={18} />
                <div>
                  <Typography variant="body2" sx={{ color: "#f1f5f9", fontWeight: 600 }}>
                    Torhayloch Square, Addis Ababa
                  </Typography>
                  <Typography variant="caption" sx={{ color: "#94a3b8" }}>
                    {STORE_INFO.landmark}
                  </Typography>
                </div>
              </div>
              <div className="flex gap-2.5 items-center">
                <PhoneCall className="text-emerald-500 shrink-0" size={18} />
                <Typography variant="body2" sx={{ color: "#f1f5f9", fontFamily: "monospace" }}>
                  {STORE_INFO.phone} / {STORE_INFO.altPhone}
                </Typography>
              </div>
              <div className="flex gap-2.5 items-center">
                <Clock className="text-amber-500 shrink-0" size={18} />
                <div>
                  {STORE_INFO.hours.map((item, index) => (
                    <Box key={index} sx={{ display: "block", mb: 0.5 }}>
                      <Typography variant="caption" sx={{ color: "#cbd5e1" }}>
                        <strong>{item.days}:</strong> {item.time}
                      </Typography>
                    </Box>
                  ))}
                </div>
              </div>
            </Box>
          </Box>
        </Box>

        <Divider sx={{ borderColor: "#1e293b", my: 3 }} />

        {/* Bottom Bar */}
        <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, justifyContent: "space-between", alignItems: "center", gap: 2 }}>
          <Typography variant="body2" sx={{ color: "#64748b", textAlign: { xs: "center", sm: "left" } }}>
            &copy; {new Date().getFullYear()} sSUPER MARKET. All rights reserved.
          </Typography>
          <Box className="flex items-center gap-1.5 text-xs text-emerald-500/80 font-mono">
            <ShieldCheck size={14} />
            <span>Premium Grocery Delivery in Torhayloch, Addis Ababa</span>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
