import React, { useState } from "react";
import { STORE_INFO } from "../data/products";
import { useCart } from "../hooks/useCart";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, Navigation, MessageSquare } from "lucide-react";
import { 
  Box, 
  Container, 
  Typography, 
  Card, 
  CardContent, 
  TextField, 
  Button, 
  Paper, 
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from "@mui/material";

export const Contact: React.FC = () => {
  const { triggerNotification } = useCart();

  // Form states
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone || !message) {
      triggerNotification("Please fill in the required fields (Name, Phone, and Message)", "warning");
      return;
    }

    setLoading(true);
    
    // Dry run timeout
    setTimeout(() => {
      setLoading(false);
      triggerNotification(`Thank you, ${name}! Your feedback has been sent to our Torhayloch support team. We will call you within 2 hours.`, "success");
      
      // Clear values
      setName("");
      setPhone("");
      setEmail("");
      setMessage("");
    }, 900);
  };

  const travelGuides = [
    {
      from: "From Mexico Square",
      path: "Head West towards Torhayloch on the Ring Road. As you reach the Torhayloch Roundabout traffic scene, take a slight right. Our supermarket is on your right side directly adjacent to the CBE branch."
    },
    {
      from: "From Old Airport / Pushkin Square",
      path: "Travel North-West along the Ring Road crossing past Sarbet toward Torhayloch. Take the exit ramp just before the main overpass, turn right around the Torhayloch Roundabout, and we are parked 100 meters down."
    }
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      {/* Page header */}
      <Box sx={{ mb: 6, textAlign: "center" }}>
        <Typography variant="h2" sx={{ fontWeight: 900 }}>
          Get In Touch With Us
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mt: 1, maxWidth: 600, mx: "auto" }}>
          Have requests for grocery delivery, catering, or bulk food & home kitchen supplies? Send us a message or visit our Torhayloch Supermarket flagship store in Addis Ababa.
        </Typography>
      </Box>

      <Box className="grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* Left Column: Coordinates & Illustrative Map Tips */}
        <Box className="md:col-span-5">
          <Box sx={{ display: "flex", flexDirection: "column", gap: 3.5 }}>
            
            {/* Store Information Card */}
            <Card sx={{ background: "linear-gradient(135deg, #16a34a 0%, #14532d 100%)", color: "white", p: 2, borderRadius: "20px", border: "none" }}>
              <CardContent>
                <Typography variant="h5" sx={{ fontWeight: 800, mb: 3 }}>
                  Store Co-ordinates
                </Typography>

                <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
                  <div className="flex gap-3.5 items-start">
                    <MapPin size={22} className="text-orange-400 shrink-0 mt-0.5" />
                    <div>
                      <Typography variant="subtitle2" sx={{ fontWeight: 800 }}>
                        Torhayloch Roundabout
                      </Typography>
                      <Typography variant="caption" sx={{ color: "grey.300" }}>
                        {STORE_INFO.landmark}
                      </Typography>
                    </div>
                  </div>

                  <div className="flex gap-3.5 items-center">
                    <Phone size={20} className="text-orange-400 shrink-0" />
                    <div>
                      <Typography variant="subtitle2" sx={{ fontWeight: 800 }}>
                        Call Us (display only)
                      </Typography>
                      <Typography variant="body2" sx={{ fontFamily: "monospace", color: "grey.100" }}>
                        {STORE_INFO.phone} / {STORE_INFO.altPhone}
                      </Typography>
                    </div>
                  </div>

                  <div className="flex gap-3.5 items-center">
                    <Mail size={20} className="text-orange-400 shrink-0" />
                    <div>
                      <Typography variant="subtitle2" sx={{ fontWeight: 800 }}>
                        Customer Support
                      </Typography>
                      <Typography variant="body2" sx={{ color: "grey.200" }}>
                        {STORE_INFO.email}
                      </Typography>
                    </div>
                  </div>
                </Box>
              </CardContent>
            </Card>

            {/* Illustrative Travel Guides directions */}
            <Paper 
              elevation={0}
              sx={{ 
                p: 3, 
                borderRadius: "20px", 
                border: "1px solid", 
                borderColor: "divider",
                bgcolor: "#f8fafc"
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 2.5 }}>
                <Navigation size={22} className="text-emerald-700 " />
                <Typography variant="h6" sx={{ fontWeight: 800 }}>
                  Driving Directions Guide
                </Typography>
              </Box>

              <Divider sx={{ mb: 2 }} />

              <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                {travelGuides.map((guide, index) => (
                  <div key={index}>
                    <Typography variant="body2" sx={{ fontWeight: 800, color: "primary.main", mb: 0.5 }}>
                      {guide.from}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ fontSize: "0.85rem", lineHeight: 1.5 }}>
                      {guide.path}
                    </Typography>
                  </div>
                ))}
              </Box>
            </Paper>
          </Box>
        </Box>

        {/* Right Column: Interactive Send Feedback Form */}
        <Box className="md:col-span-7">
          <Paper 
            elevation={0}
            sx={{ 
              p: { xs: 3, md: 5 }, 
              borderRadius: "20px", 
              border: "1px solid", 
              borderColor: "divider",
              bgcolor: "background.paper"
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 3 }}>
              <MessageSquare size={24} className="text-emerald-600" />
              <Typography variant="h5" sx={{ fontWeight: 900 }}>
                Leave Feedback / Ask Questions
              </Typography>
            </Box>

            <form onSubmit={handleSubmit}>
              <Box className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <Box>
                  <TextField
                    fullWidth
                    label="Full Name *"
                    variant="outlined"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    sx={{ bgcolor: "#f8fafc" }}
                  />
                </Box>
                <Box>
                  <TextField
                    fullWidth
                    label="Ethiopian Phone Number *"
                    placeholder="e.g. +2519xxxxxxxx"
                    variant="outlined"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    sx={{ bgcolor: "#f8fafc" }}
                    // keep as plain text input (not clickable link)
                  />
                </Box>
                <Box className="sm:col-span-2">
                  <TextField
                    fullWidth
                    label="Email Address (Optional)"
                    type="email"
                    variant="outlined"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    sx={{ bgcolor: "#f8fafc" }}
                  />
                </Box>
                <Box className="sm:col-span-2">
                  <TextField
                    fullWidth
                    label="Your Message *"
                    variant="outlined"
                    multiline
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Write your suggestions, grocery delivery requests, or products feedback here..."
                    sx={{ bgcolor: "#f8fafc" }}
                  />
                </Box>
                <Box className="sm:col-span-2">
                  <Button
                    type="submit"
                    variant="contained"
                    color="secondary"
                    fullWidth
                    disabled={loading}
                    startIcon={<Send size={18} />}
                    sx={{ py: 1.5, borderRadius: "10px", fontSize: "1rem", fontWeight: 800 }}
                  >
                    {loading ? "Sending..." : "Send Secure Message"}
                  </Button>
                </Box>
              </Box>
            </form>
          </Paper>
        </Box>
      </Box>
    </Container>
  );
};
