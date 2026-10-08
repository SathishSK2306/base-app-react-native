import {
  createContext,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from 'react';
import type { Product } from '../data/products';

export type CartItem = Product & {
  quantity: number;
};

type CartContextType = {
  cart: CartItem[];
  subtotal: number;
  totalItems: number;
  addToCart: (product: Product) => void;
  updateQuantity: (productId: string, change: number) => void;
  removeFromCart: (productId: string) => void;
  clearCart: () => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (product: Product) => {
    setCart((currentCart) => {
      const existingItem = currentCart.find((item) => item.id === product.id);

      if (existingItem) {
        return currentCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item,
        );
      }

      return [...currentCart, { ...product, quantity: 1 }];
    });
  };

  const updateQuantity = (productId: string, change: number) => {
    setCart((currentCart) =>
      currentCart.flatMap((item) => {
        if (item.id !== productId) {
          return [item];
        }

        const newQuantity = item.quantity + change;
        return newQuantity <= 0 ? [] : [{ ...item, quantity: newQuantity }];
      }),
    );
  };

  const removeFromCart = (productId: string) => {
    setCart((currentCart) => currentCart.filter((item) => item.id !== productId));
  };

  const clearCart = () => {
    setCart([]);
  };

  const subtotal = useMemo(
    () => cart.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [cart],
  );

  const totalItems = useMemo(
    () => cart.reduce((sum, item) => sum + item.quantity, 0),
    [cart],
  );

  const value = useMemo<CartContextType>(
    () => ({
      cart,
      subtotal,
      totalItems,
      addToCart,
      updateQuantity,
      removeFromCart,
      clearCart,
    }),
    [cart, subtotal, totalItems],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error('useCart must be used inside a CartProvider');
  }

  return context;
}
