import React, { createContext, useContext, useState, useEffect } from "react";
import { Product, CartItem } from "../types";

interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Product, qty?: number) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, qty: number) => void;
  clearCart: () => void;
  cartCount: number;
  cartTotal: number;
  snackbar: {
    open: boolean;
    message: string;
    severity: "success" | "info" | "warning";
  };
  triggerNotification: (message: string, severity?: "success" | "info" | "warning") => void;
  closeNotification: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem("torhayloch_cart");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [snackbar, setSnackbar] = useState<{
    open: boolean;
    message: string;
    severity: "success" | "info" | "warning";
  }>({
    open: false,
    message: "",
    severity: "success",
  });

  useEffect(() => {
    localStorage.setItem("torhayloch_cart", JSON.stringify(cart));
  }, [cart]);

  const triggerNotification = (message: string, severity: "success" | "info" | "warning" = "success") => {
    setSnackbar({ open: true, message, severity });
  };

  const closeNotification = () => {
    setSnackbar((prev) => ({ ...prev, open: false }));
  };

  const addToCart = (product: Product, qty: number = 1) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.product.id === product.id);
      if (existing) {
        const newQty = existing.quantity + qty;
        if (newQty > product.stock) {
          triggerNotification(`Only ${product.stock} units of ${product.name} are available in stock!`, "warning");
          return prevCart;
        }
        triggerNotification(`Updated ${product.name} quantity in cart!`, "success");
        return prevCart.map((item) =>
          item.product.id === product.id ? { ...item, quantity: newQty } : item
        );
      } else {
        if (qty > product.stock) {
          triggerNotification(`Only ${product.stock} units of ${product.name} are available in stock!`, "warning");
          return prevCart;
        }
        triggerNotification(`${product.name} added to cart!`, "success");
        return [...prevCart, { product, quantity: qty }];
      }
    });
  };

  const removeFromCart = (productId: string) => {
    const itemToRemove = cart.find((item) => item.product.id === productId);
    if (itemToRemove) {
      triggerNotification(`Removed ${itemToRemove.product.name} from cart`, "info");
    }
    setCart((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const updateQuantity = (productId: string, qty: number) => {
    if (qty <= 0) {
      removeFromCart(productId);
      return;
    }

    setCart((prevCart) => {
      const item = prevCart.find((item) => item.product.id === productId);
      if (item && qty > item.product.stock) {
        triggerNotification(`Cannot exceed available stock of ${item.product.stock} units!`, "warning");
        return prevCart;
      }
      return prevCart.map((item) =>
        item.product.id === productId ? { ...item, quantity: qty } : item
      );
    });
  };

  const clearCart = () => {
    if (cart.length > 0) {
      setCart([]);
      triggerNotification("Shopping cart cleared!", "info");
    }
  };

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  const cartTotal = cart.reduce((total, item) => {
    const price = item.product.isPromo && item.product.promoPrice ? item.product.promoPrice : item.product.price;
    return total + price * item.quantity;
  }, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartCount,
        cartTotal,
        snackbar,
        triggerNotification,
        closeNotification,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
