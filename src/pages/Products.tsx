import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { DUMMY_PRODUCTS, CATEGORIES } from "../data/products";
import { ProductCard } from "../components/ProductCard";
import { Search, Filter, RotateCcw, ArrowUpDown, Tag, Info } from "lucide-react";
import { 
  Box, 
  Container, 
  Typography, 
  TextField, 
  InputAdornment, 
  Tabs, 
  Tab, 
  Select, 
  MenuItem, 
  FormControl, 
  InputLabel, 
  Button, 
  Paper, 
  Chip,
  Card,
  CardContent,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Rating,
  Divider
} from "@mui/material";
import { Product } from "../types";
import { useCart } from "../hooks/useCart";

export const Products: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { addToCart } = useCart();
  
  // States
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [sortBy, setSortBy] = useState("default");
  const [onlyPromos, setOnlyPromos] = useState(false);
  
  // Quick details dialog state
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [detailQty, setDetailQty] = useState(1);

  // Initialize filters based on URL search queries
  useEffect(() => {
    const catQuery = searchParams.get("category");
    if (catQuery) {
      const exists = CATEGORIES.some(c => c.id === catQuery);
      if (exists) {
        setActiveCategory(catQuery);
      }
    } else {
      setActiveCategory("all");
    }

    const promoQuery = searchParams.get("promo");
    if (promoQuery === "true") {
      setOnlyPromos(true);
    } else {
      setOnlyPromos(false);
    }
  }, [searchParams]);

  // Handle category change
  const handleCategoryTabChange = (event: React.SyntheticEvent, newValue: string) => {
    // Update active category
    setActiveCategory(newValue);
    
    // Update search parameter in URL
    const params: { [key: string]: string } = {};
    if (newValue !== "all") {
      params.category = newValue;
    }
    if (onlyPromos) {
      params.promo = "true";
    }
    setSearchParams(params);
  };

  // Toggle promotions filter
  const handleTogglePromos = () => {
    const newPromoState = !onlyPromos;
    setOnlyPromos(newPromoState);

    const params: { [key: string]: string } = {};
    if (activeCategory !== "all") {
      params.category = activeCategory;
    }
    if (newPromoState) {
      params.promo = "true";
    }
    setSearchParams(params);
  };

  // Reset filters
  const handleResetFilters = () => {
    setSearchQuery("");
    setActiveCategory("all");
    setSortBy("default");
    setOnlyPromos(false);
    setSearchParams({});
  };

  // Filter products
  const filteredProducts = DUMMY_PRODUCTS.filter((product) => {
    const matchesCategory = activeCategory === "all" || product.category === activeCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          product.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesPromo = !onlyPromos || product.isPromo;

    return matchesCategory && matchesSearch && matchesPromo;
  });

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    const aPrice = a.isPromo && a.promoPrice ? a.promoPrice : a.price;
    const bPrice = b.isPromo && b.promoPrice ? b.promoPrice : b.price;

    if (sortBy === "priceAsc") return aPrice - bPrice;
    if (sortBy === "priceDesc") return bPrice - aPrice;
    if (sortBy === "rating") return b2Rating(b) - b2Rating(a);
    if (sortBy === "name") return a.name.localeCompare(b.name);
    return 0; // default
  });

  function b2Rating(p: Product) {
    return p.rating;
  }

  const handleOpenDetail = (product: Product) => {
    setSelectedProduct(product);
    setDetailQty(1);
  };

  const handleCloseDetail = () => {
    setSelectedProduct(null);
  };

  const handleAddFromDetail = () => {
    if (selectedProduct) {
      addToCart(selectedProduct, detailQty);
      handleCloseDetail();
    }
  };

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      {/* 1. Page Header */}
      <Box sx={{ mb: 5, textAlign: "center" }}>
        <Typography variant="h2" sx={{ fontWeight: 900, color: "text.primary" }}>
          Fresh Foods Market
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mt: 1, maxWidth: 650, mx: "auto" }}>
          Browse authentic local ingredients, agricultural produce, household essentials, and beverages. Fast delivery directly from our Torhayloch Supermarket center.
        </Typography>
      </Box>

      {/* 2. Control Panel */}
      <Paper 
        elevation={0}
        sx={{ 
          p: 3, 
          mb: 4, 
          borderRadius: "16px", 
          bgcolor: "background.paper",
          border: "1px solid",
          borderColor: "divider"
        }}
      >
        <Box className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-4 items-center">
          {/* Search Input bar */}
          <Box className="md:col-span-5">
            <TextField
              fullWidth
              placeholder="Search bananas, shinkurt, Ambo water, milk..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <Search className="text-gray-400" size={18} />
                    </InputAdornment>
                  ),
                }
              }}
              size="small"
              sx={{ bgcolor: "#f8fafc", borderRadius: "10px" }}
            />
          </Box>

          {/* Sorter Selector */}
          <Box className="col-span-1 md:col-span-3">
            <FormControl fullWidth size="small">
              <InputLabel id="sort-select-label">Sort Matches By</InputLabel>
              <Select
                labelId="sort-select-label"
                value={sortBy}
                label="Sort Matches By"
                onChange={(e) => setSortBy(e.target.value)}
                sx={{ bgcolor: "#f8fafc", borderRadius: "10px" }}
              >
                <MenuItem value="default">Quick Picks (Default)</MenuItem>
                <MenuItem value="priceAsc">Price: Low to High</MenuItem>
                <MenuItem value="priceDesc">Price: High to Low</MenuItem>
                <MenuItem value="rating">Popularity & Rating</MenuItem>
                <MenuItem value="name">Product Name (A-Z)</MenuItem>
              </Select>
            </FormControl>
          </Box>

          {/* Special Toggle filter buttons */}
          <Box className="col-span-1 md:col-span-2.5">
            <Button
              variant={onlyPromos ? "contained" : "outlined"}
              color="secondary"
              fullWidth
              size="small"
              onClick={handleTogglePromos}
              startIcon={<Tag size={16} />}
              sx={{ py: 1, borderRadius: "10px", fontWeight: 700 }}
            >
              Smart Promos
            </Button>
          </Box>

          {/* Reset Filters icon */}
          <Box className="col-span-1 md:col-span-1.5">
            <Button
              variant="text"
              color="inherit"
              fullWidth
              onClick={handleResetFilters}
              startIcon={<RotateCcw size={15} />}
              sx={{ py: 1, color: "text.secondary", fontWeight: 700 }}
            >
              Reset
            </Button>
          </Box>
        </Box>
      </Paper>

      {/* 3. Responsive Category Tabs */}
      <Box sx={{ borderBottom: 1, borderColor: "divider", mb: 4 }}>
        <Tabs 
          value={activeCategory} 
          onChange={handleCategoryTabChange}
          variant="scrollable"
          scrollButtons="auto"
          textColor="primary"
          indicatorColor="primary"
          sx={{
            "& .MuiTab-root": {
              fontWeight: 800,
              fontSize: "0.95rem",
              minWidth: 100,
              textTransform: "none"
            }
          }}
        >
          {CATEGORIES.map((cat) => (
            <Tab 
              key={cat.id} 
              label={
                <Box sx={{ display: "flex", alignItems: "center", gap: 0.8 }}>
                  <span>
                    {cat.name === "All Products" && "🛒"}
                    {cat.name === "Fruits" && "🍊"}
                    {cat.name === "Vegetables" && "🥬"}
                    {cat.name === "Beverages" && "☕"}
                    {cat.name === "Dairy Products" && "🥛"}
                    {cat.name === "Snacks" && "🍿"}
                    {cat.name === "Household Items" && "🧹"}
                  </span>
                  <span>{cat.name}</span>
                </Box>
              } 
              value={cat.id} 
            />
          ))}
        </Tabs>
      </Box>

      {/* Active filters state representation */}
      {(onlyPromos || searchQuery) && (
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 3 }}>
          <Typography variant="body2" sx={{ alignSelf: "center", color: "text.secondary", mr: 1 }}>
            Active Filters:
          </Typography>
          {onlyPromos && (
            <Chip 
              label="Promotions Only" 
              color="secondary" 
              onDelete={() => setOnlyPromos(false)} 
              size="small"
            />
          )}
          {searchQuery && (
            <Chip 
              label={`Search: "${searchQuery}"`} 
              onDelete={() => setSearchQuery("")} 
              size="small"
            />
          )}
        </Box>
      )}

      {/* 4. Products Result Grid */}
      {sortedProducts.length === 0 ? (
        <Card sx={{ p: 6, textAlign: "center", borderRadius: "20px", border: "1px dashed", borderColor: "divider" }}>
          <CardContent>
            <div className="mx-auto bg-gray-100 text-gray-400 p-5 rounded-full w-fit mb-4">
              <Search size={36} />
            </div>
            <Typography variant="h5" sx={{ fontWeight: 800, mb: 1 }}>
              No Supermarket Items Found
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 3, maxWidth: 450, mx: "auto" }}>
              We couldn't find any items matching your filter constraints in the Torhayloch warehouse database. Try typing something else or resetting the selectors!
            </Typography>
            <Button 
              variant="contained" 
              color="primary" 
              onClick={handleResetFilters}
              startIcon={<RotateCcw size={16} />}
              sx={{ borderRadius: "8px" }}
            >
              Reset All Filters
            </Button>
          </CardContent>
        </Card>
      ) : (
        <Box className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {sortedProducts.map((product) => (
            <Box key={product.id}>
              <ProductCard product={product} onViewDetail={handleOpenDetail} />
            </Box>
          ))}
        </Box>
      )}

      {/* 5. High-Fidelity Product Detail Dialog (Quick-View) */}
      <Dialog 
        open={selectedProduct !== null} 
        onClose={handleCloseDetail}
        slotProps={{
          paper: {
            sx: { borderRadius: "24px", maxWidth: 650, p: 1 }
          }
        }}
      >
        {selectedProduct && (
          <>
            <DialogContent sx={{ p: { xs: 2.5, sm: 4 } }}>
              <Box className="grid grid-cols-1 sm:grid-cols-12 gap-6">
                {/* Images via Box instead of Avatar */}
                <Box className="sm:col-span-5">
                  <Box 
                    component="img"
                    src={selectedProduct.image} 
                    alt={selectedProduct.name}
                    referrerPolicy="no-referrer"
                    sx={{ width: "100%", height: 220, borderRadius: "16px", objectFit: "cover", boxShadow: 1 }}
                  />
                  <Box className="flex items-center gap-1 bg-emerald-50 text-emerald-800 p-2 rounded-xl mt-3 text-xs font-semibold justify-center">
                    <Info size={14} />
                    <span>In Stock: {selectedProduct.stock} units</span>
                  </Box>
                </Box>

                {/* Info details */}
                <Box className="sm:col-span-7">
                  <Box sx={{ display: "flex", gap: 1, mb: 1 }}>
                    <Chip 
                      label={selectedProduct.category.toUpperCase()} 
                      size="small" 
                      color="primary" 
                      sx={{ fontWeight: 800, height: 18, fontSize: "9px" }}
                    />
                    {selectedProduct.isPromo && (
                      <Chip 
                        label="ON PROMO" 
                        size="small" 
                        color="secondary" 
                        sx={{ fontWeight: 800, height: 18, fontSize: "9px" }}
                      />
                    )}
                  </Box>

                  <Typography variant="h5" sx={{ fontWeight: 900, mb: 1, color: "text.primary" }}>
                    {selectedProduct.name}
                  </Typography>

                  {/* Rating */}
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2 }}>
                    <Rating value={selectedProduct.rating} readOnly precision={0.5} size="small" />
                    <Typography variant="body2" sx={{ fontWeight: 700 }}>
                      {selectedProduct.rating.toFixed(1)}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      ({selectedProduct.unit})
                    </Typography>
                  </Box>

                  {/* Pricing */}
                  <Box sx={{ mb: 2.5 }}>
                    {selectedProduct.isPromo && selectedProduct.promoPrice ? (
                      <Box>
                        <span className="text-2xl font-black text-orange-500 font-mono">
                          ETB {selectedProduct.promoPrice.toFixed(0)}
                        </span>
                        <span className="text-sm text-gray-400 line-through ml-2 font-mono">
                          ETB {selectedProduct.price.toFixed(0)}
                        </span>
                      </Box>
                    ) : (
                      <span className="text-2xl font-black text-emerald-800 font-mono">
                        ETB {selectedProduct.price.toFixed(0)}
                      </span>
                    )}
                  </Box>

                  <Divider sx={{ my: 1.5 }} />

                  <Typography variant="body2" color="text.secondary" sx={{ mb: 3, lineHeight: 1.6 }}>
                    {selectedProduct.description}
                  </Typography>

                  {/* Quantity and Action Selector */}
                  <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                    <Box sx={{ display: "flex", alignItems: "center", border: "1px solid", borderColor: "divider", borderRadius: "10px", bgcolor: "#f8fafc" }}>
                      <Button 
                        size="small" 
                        onClick={() => setDetailQty(Math.max(1, detailQty - 1))}
                        sx={{ minWidth: 40, py: 1 }}
                      >
                        -
                      </Button>
                      <Typography variant="body1" sx={{ px: 2, fontWeight: 800, fontFamily: "monospace" }}>
                        {detailQty}
                      </Typography>
                      <Button 
                        size="small" 
                        onClick={() => setDetailQty(Math.min(selectedProduct.stock, detailQty + 1))}
                        sx={{ minWidth: 40, py: 1 }}
                      >
                        +
                      </Button>
                    </Box>

                    <Button 
                      variant="contained" 
                      color="primary"
                      onClick={handleAddFromDetail}
                      sx={{ flexGrow: 1, py: 1.5, borderRadius: "10px", fontWeight: 800 }}
                    >
                      Add To Basket
                    </Button>
                  </Box>
                </Box>
              </Box>
            </DialogContent>
            <DialogActions sx={{ px: 4, pb: 3 }}>
              <Button onClick={handleCloseDetail} color="inherit" sx={{ fontWeight: 700 }}>
                Close
              </Button>
            </DialogActions>
          </>
        )}
      </Dialog>
    </Container>
  );
};
