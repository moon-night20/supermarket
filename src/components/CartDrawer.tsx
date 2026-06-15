import React, { useState } from "react";
import { useCart } from "../hooks/useCart";
import { Trash2, Plus, Minus, ShoppingBag, CreditCard, ArrowRight, X, Sparkles } from "lucide-react";
import { 
  Drawer, 
  Box, 
  Typography, 
  IconButton, 
  List, 
  ListItem, 
  Divider, 
  Button, 
  TextField, 
  RadioGroup, 
  FormControlLabel, 
  Radio,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Paper,
  Chip
} from "@mui/material";

interface CartDrawerProps {
  open: boolean;
  onClose: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({ open, onClose }) => {
  const { 
    cart, 
    removeFromCart, 
    updateQuantity, 
    clearCart, 
    cartTotal, 
    triggerNotification 
  } = useCart();

  const [paymentMethod, setPaymentMethod] = useState("telebirr");
  const [deliveryNote, setDeliveryNote] = useState("");
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);
  const [orderId, setOrderId] = useState("");

  const handleCheckout = () => {
    if (cart.length === 0) return;
    
    // Generate mock order details
    const id = "TS-" + Math.floor(100000 + Math.random() * 900000);
    setOrderId(id);
    setIsSuccessOpen(true);
  };

  const confirmCheckout = () => {
    setIsSuccessOpen(false);
    clearCart();
    onClose();
    triggerNotification(`Order ${orderId} placed successfully! Standard delivery in Torhayloch within 2 hours.`, "success");
  };

  return (
    <>
      <Drawer
        anchor="right"
        open={open}
        onClose={onClose}
        slotProps={{
          paper: {
            sx: { width: { xs: "100%", sm: 420 }, bgcolor: "background.default" }
          }
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
          {/* Header */}
          <Box sx={{ p: 2.5, bgcolor: "background.paper", display: "flex", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid", borderColor: "divider" }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <div className="bg-emerald-100 text-emerald-800 p-1.5 rounded-lg">
                <ShoppingBag size={20} />
              </div>
              <Typography variant="h6" sx={{ fontWeight: 800 }}>
                Your Shopping Cart
              </Typography>
            </Box>
            <IconButton onClick={onClose} edge="end" sx={{ bgcolor: "action.hover" }}>
              <X size={18} />
            </IconButton>
          </Box>

          {/* Cart Content */}
          <Box sx={{ flexGrow: 1, overflowY: "auto", p: 2.5 }}>
            {cart.length === 0 ? (
              <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyItems: "center", justifyContent: "center", height: "100%", textAlign: "center", py: 4 }}>
                <div className="mx-auto bg-orange-50 text-orange-500 p-6 rounded-full mb-4 animate-bounce">
                  <ShoppingBag size={48} />
                </div>
                <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                  Your basket is empty
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 3, maxWidth: 300 }}>
                  Looks like you haven't added any fresh groceries or delicious snacks yet!
                </Typography>
                <Button 
                  variant="contained" 
                  color="primary" 
                  onClick={onClose}
                  sx={{ borderRadius: "8px", px: 3 }}
                >
                  Start Shopping
                </Button>
              </Box>
            ) : (
              <Box>
                {/* Clear All Button */}
                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
                  <Typography variant="body2" color="text.secondary">
                    {cart.length} item{cart.length > 1 ? "s" : ""} in cart
                  </Typography>
                  <Button 
                    size="small" 
                    color="error" 
                    startIcon={<Trash2 size={14} />}
                    onClick={clearCart}
                    sx={{ fontWeight: 600 }}
                  >
                    Clear All
                  </Button>
                </Box>

                {/* Items List */}
                <List disablePadding sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
                  {cart.map((item) => {
                    const price = item.product.isPromo && item.product.promoPrice ? item.product.promoPrice : item.product.price;
                    const itemTotal = price * item.quantity;

                    return (
                      <Paper 
                        key={item.product.id}
                        elevation={0}
                        sx={{ 
                          p: 1.5, 
                          borderRadius: "12px", 
                          bgcolor: "background.paper", 
                          border: "1px solid", 
                          borderColor: "divider",
                          display: "flex",
                          gap: 1.5
                        }}
                      >
                        {/* Box component img instead of Avatar */}
                        <Box 
                          component="img"
                          src={item.product.image} 
                          alt={item.product.name}
                          referrerPolicy="no-referrer"
                          sx={{ width: 80, height: 80, borderRadius: "12px", objectFit: "cover", bgcolor: "grey.100" }}
                        />

                        {/* Details */}
                        <Box sx={{ flexGrow: 1, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                          <div>
                            <Typography variant="subtitle2" sx={{ fontWeight: 700, lineHeight: 1.2 }}>
                              {item.product.name}
                            </Typography>
                            <Typography variant="caption" color="text.secondary">
                              ETB {price} per {item.product.unit}
                            </Typography>
                          </div>

                          {/* Controls */}
                          <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mt: 1 }}>
                            <Box sx={{ display: "flex", alignItems: "center", border: "1px solid", borderColor: "divider", borderRadius: "6px", bgcolor: "#f8fafc" }}>
                              <IconButton 
                                size="small" 
                                onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                                sx={{ p: 0.5, color: "text.secondary" }}
                              >
                                <Minus size={14} />
                              </IconButton>
                              <Typography variant="body2" sx={{ px: 1.5, fontWeight: 700, fontFamily: "monospace" }}>
                                {item.quantity}
                              </Typography>
                              <IconButton 
                                size="small" 
                                onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                                sx={{ p: 0.5, color: "text.secondary" }}
                              >
                                <Plus size={14} />
                              </IconButton>
                            </Box>

                            <Typography variant="subtitle2" sx={{ fontWeight: 800, color: "primary.main", fontFamily: "monospace" }}>
                              ETB {itemTotal.toFixed(0)}
                            </Typography>
                          </Box>
                        </Box>

                        {/* Remove Action */}
                        <IconButton 
                          size="small" 
                          color="error" 
                          onClick={() => removeFromCart(item.product.id)}
                          sx={{ alignSelf: "flex-start", p: 0.5 }}
                        >
                          <X size={15} />
                        </IconButton>
                      </Paper>
                    );
                  })}
                </List>

                {/* Logistics Configuration Header */}
                <Divider sx={{ my: 3 }} />
                
                <Typography variant="subtitle2" sx={{ fontWeight: 800, mb: 1.5 }}>
                  Addis Ababa Delivery Note
                </Typography>
                <TextField
                  fullWidth
                  placeholder="e.g. Near Torhayloch Roundabout, House 424, or Call me when you reach the gas station."
                  size="small"
                  multiline
                  rows={2}
                  value={deliveryNote}
                  onChange={(e) => setDeliveryNote(e.target.value)}
                  sx={{ bgcolor: "background.paper", borderRadius: 2, mb: 3 }}
                />

                <Typography variant="subtitle2" sx={{ fontWeight: 800, mb: 1 }}>
                  Local Payment Option
                </Typography>
                <RadioGroup 
                  value={paymentMethod} 
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  sx={{ mb: 1 }}
                >
                  <FormControlLabel 
                    value="telebirr" 
                    control={<Radio size="small" />} 
                    label={
                      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                        <span className="font-bold text-sm text-sky-600 font-mono">Telebirr Mobile Pay</span>
                        <Chip label="Popular" size="small" color="primary" variant="outlined" sx={{ height: 16, fontSize: "9px" }} />
                      </Box>
                    } 
                  />
                  <FormControlLabel 
                    value="cbe_birr" 
                    control={<Radio size="small" />} 
                    label={<span className="text-sm font-semibold">CBE Birr Transfer</span>} 
                  />
                  <FormControlLabel 
                    value="cod" 
                    control={<Radio size="small" />} 
                    label={<span className="text-sm font-semibold">Cash On Delivery</span>} 
                  />
                </RadioGroup>
              </Box>
            )}
          </Box>

          {/* Footer Receipt Summary */}
          {cart.length > 0 && (
            <Box sx={{ p: 2.5, bgcolor: "background.paper", borderTop: "1px solid", borderColor: "divider" }}>
              <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
                <Typography variant="body2" color="text.secondary">
                  Basket Subtotal
                </Typography>
                <Typography variant="body2" sx={{ fontWeight: 600, fontFamily: "monospace" }}>
                  ETB {cartTotal.toFixed(2)}
                </Typography>
              </Box>
              <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
                <Typography variant="body2" color="text.secondary">
                  Delivery (Torhayloch Area)
                </Typography>
                <Typography variant="body2" color="success.main" sx={{ fontWeight: 800, textTransform: "uppercase" }}>
                  FREE
                </Typography>
              </Box>
              <Divider sx={{ mb: 2 }} />
              <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", mb: 3 }}>
                <Typography variant="subtitle1" sx={{ fontWeight: 800 }}>
                  Grand Total
                </Typography>
                <Typography variant="h5" color="primary.main" sx={{ fontWeight: 900, fontFamily: "monospace" }}>
                  ETB {cartTotal.toFixed(2)}
                </Typography>
              </Box>

              <Button
                variant="contained"
                color="secondary"
                fullWidth
                size="large"
                startIcon={<CreditCard size={18} />}
                endIcon={<ArrowRight size={18} />}
                onClick={handleCheckout}
                sx={{ py: 1.5, borderRadius: "12px", fontSize: "1rem", fontWeight: 800 }}
              >
                Place Supermarket Order
              </Button>
            </Box>
          )}
        </Box>
      </Drawer>

      {/* Modern Success dialog */}
      <Dialog 
        open={isSuccessOpen} 
        onClose={() => setIsSuccessOpen(false)}
        slotProps={{
          paper: {
            sx: { borderRadius: "20px", p: 2, maxWidth: 450 }
          }
        }}
      >
        <DialogTitle sx={{ textAlign: "center", fontWeight: 900, pb: 1 }}>
          <div className="mx-auto bg-emerald-50 text-emerald-600 p-4 rounded-full w-fit mb-3 animate-bounce">
            <Sparkles size={36} />
          </div>
          Confirm Your Order
        </DialogTitle>
        <DialogContent sx={{ textAlign: "center", py: 1 }}>
          <Typography variant="h5" color="primary.main" sx={{ fontWeight: 900, mb: 1, fontFamily: "monospace" }}>
            ETB {cartTotal.toFixed(2)}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            Your order will be processed with our payment option: <strong>{paymentMethod.toUpperCase()}</strong>
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ bgcolor: "#f8fafc", p: 1.5, borderRadius: "10px", fontSize: "0.85rem", border: "1px dashed", borderColor: "divider" }}>
            {deliveryNote ? `Note: "${deliveryNote}"` : "Note: Deliver around Torhayloch, Addis Ababa."}
          </Typography>
        </DialogContent>
        <DialogActions sx={{ justifyContent: "center", gap: 2, px: 3, pb: 2 }}>
          <Button 
            variant="outlined" 
            color="inherit" 
            onClick={() => setIsSuccessOpen(false)}
            sx={{ borderRadius: "8px", flex: 1 }}
          >
            Go Back
          </Button>
          <Button 
            variant="contained" 
            color="primary" 
            onClick={confirmCheckout}
            sx={{ borderRadius: "8px", flex: 1, fontWeight: 800 }}
          >
            Confirm & Dry Run
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
