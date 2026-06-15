import React from "react";
import { Product } from "../types";
import { useCart } from "../hooks/useCart";
import { ShoppingCart, Star, Eye, Tag } from "lucide-react";
import { 
  Card, 
  CardMedia, 
  CardContent, 
  Typography, 
  Button, 
  Box, 
  Chip, 
  Rating,
  IconButton,
  Tooltip,
  Paper
} from "@mui/material";

interface ProductCardProps {
  product: Product;
  onViewDetail?: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onViewDetail }) => {
  const { addToCart } = useCart();

  const handleAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(product, 1);
  };

  const hasDiscount = product.isPromo && product.promoPrice !== undefined;
  const activePrice = hasDiscount ? product.promoPrice! : product.price;
  const isOutOfStock = product.stock <= 0;

  return (
    <Card 
      sx={{ 
        height: "100%", 
        display: "flex", 
        flexDirection: "column", 
        position: "relative",
        borderRadius: "16px",
        overflow: "visible", // To allow discount tag to peak out
        bgcolor: "background.paper"
      }}
    >
      {/* Category and Promo Badges */}
      <Box sx={{ position: "absolute", top: 12, left: 12, zIndex: 2, display: "flex", flexDirection: "column", gap: 1 }}>
        <Chip 
          label={product.category.toUpperCase()} 
          size="small" 
          sx={{ 
            bgcolor: "primary.main", 
            color: "white", 
            fontWeight: 800, 
            fontSize: "10px", 
            letterSpacing: "0.5px",
            boxShadow: "0 2px 8px rgba(21, 128, 61, 0.2)"
          }} 
        />
        {hasDiscount && (
          <Chip 
            icon={<Tag style={{ color: "white" }} size={10} />}
            label="SAVE" 
            size="small" 
            color="secondary"
            sx={{ 
              fontWeight: 800, 
              fontSize: "10px",
              boxShadow: "0 2px 8px rgba(249, 115, 22, 0.3)"
            }} 
          />
        )}
      </Box>

      {/* Product Image Stage */}
      {/* Use a square image stage (1:1) to keep product images consistent */}
      <Box sx={{ position: "relative", pt: "100%", /* 1:1 Ratio */ overflow: "hidden", borderRadius: "16px 16px 0 0", bgcolor: "#f1f5f9" }}>
        <CardMedia
          component="img"
          image={product.image}
          alt={product.name}
          referrerPolicy="no-referrer"
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "contain",
            transition: "transform 0.5s ease",
            "&:hover": {
              transform: "scale(1.08)"
            }
          }}
        />
        {isOutOfStock && (
          <Box className="absolute inset-0 bg-black/60 backdrop-blur-[1px] flex items-center justify-center">
            <Typography variant="subtitle1" className="text-white font-black uppercase tracking-wider bg-red-600 px-3 py-1.5 rounded-lg shadow-lg">
              Out of Stock
            </Typography>
          </Box>
        )}
      </Box>

      {/* Content */}
      <CardContent sx={{ flexGrow: 1, pt: 2, px: 2.5, pb: 1, display: "flex", flexDirection: "column" }}>
        {/* Category segment and rating */}
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 1 }}>
          <span className="text-[10px] text-green-600 font-bold uppercase tracking-wider">
            {product.category}
          </span>
          <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
            <Star size={12} className="fill-amber-400 text-amber-400" />
            <Typography variant="caption" sx={{ fontWeight: 800, color: "text.primary" }}>
              {product.rating.toFixed(1)}
            </Typography>
          </Box>
        </Box>

        {/* Title */}
        <Typography 
          variant="h6" 
          component="h3"
          sx={{ 
            fontSize: "1rem", 
            fontWeight: 700, 
            lineHeight: 1.3, 
            mb: 1,
            color: "text.primary",
            height: "2.6rem", // Fixed height for 2 lines of text
            overflow: "hidden",
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            "&:hover": {
              color: "primary.main",
              cursor: onViewDetail ? "pointer" : "default"
            }
          }}
          onClick={() => onViewDetail && onViewDetail(product)}
        >
          {product.name}
        </Typography>

        {/* Description */}
        <Typography 
          variant="body2" 
          color="text.secondary"
          sx={{ 
            fontSize: "0.825rem",
            mb: 2.5,
            lineHeight: 1.5,
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            height: "2.4rem"
          }}
        >
          {product.description}
        </Typography>

        {/* Price & Add To Cart */}
        <Box sx={{ mt: "auto", display: "flex", alignItems: "center", justifyContent: "space-between", pt: 1.5, borderTop: "1px dashed #e2e8f0" }}>
          <Box>
            {hasDiscount ? (
              <Box>
                <Typography variant="caption" sx={{ textDecoration: "line-through", color: "text.secondary", display: "block", fontSize: "0.75rem", lineHeight: 1 }}>
                  ETB {product.price.toFixed(0)}
                </Typography>
                <span className="text-base font-black text-slate-900 font-mono">
                  {product.promoPrice?.toFixed(2)}{" "}
                  <span className="text-xs font-bold text-slate-400 font-sans">ETB</span>
                </span>
              </Box>
            ) : (
              <Box>
                <Typography variant="caption" sx={{ color: "text.secondary", display: "block", fontSize: "0.75rem", lineHeight: 1 }}>
                  Price ({product.unit})
                </Typography>
                <span className="text-base font-black text-slate-900 font-mono">
                  {product.price.toFixed(2)}{" "}
                  <span className="text-xs font-bold text-slate-400 font-sans">ETB</span>
                </span>
              </Box>
            )}
          </Box>

          {/* Interaction Section */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            {onViewDetail && (
              <Tooltip title="Quick View">
                <IconButton 
                  size="small"
                  onClick={() => onViewDetail(product)}
                  sx={{ border: "1px solid", borderColor: "slate-200", bgcolor: "slate-50", borderRadius: "10px", color: "text.secondary", p: 0.8 }}
                >
                  <Eye size={14} />
                </IconButton>
              </Tooltip>
            )}

            <button
              disabled={isOutOfStock}
              onClick={handleAdd}
              className={`flex items-center gap-1.5 px-3.5 py-2 font-bold text-xs rounded-xl cursor-pointer transition-all ${
                isOutOfStock 
                  ? "bg-slate-100 text-slate-400 cursor-not-allowed" 
                  : "bg-orange-500 hover:bg-orange-600 text-white shadow-sm hover:shadow active:scale-95"
              }`}
            >
              <ShoppingCart size={13} />
              <span>Add</span>
            </button>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};
