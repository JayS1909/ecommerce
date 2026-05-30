import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type CartItem = {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  size: string;
  quantity: number;
  isCustom?: boolean;
  color?: string;
};

interface CartState {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: string, size: string) => void;
  updateQuantity: (id: string, size: string, quantity: number) => void;
  clearCart: () => void;
  getTotalItems: () => number;
  getSubtotal: () => number;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      cart: [],
      addToCart: (item) => set((state) => {
        const existingItem = state.cart.find((i) => i.id === item.id && i.size === item.size);
        if (existingItem) {
          return {
            cart: state.cart.map((i) =>
              i.id === item.id && i.size === item.size
                ? { ...i, quantity: i.quantity + item.quantity }
                : i
            ),
          };
        }
        return { cart: [...state.cart, item] };
      }),
      removeFromCart: (id, size) => set((state) => ({
        cart: state.cart.filter((item) => !(item.id === id && item.size === size)),
      })),
      updateQuantity: (id, size, quantity) => set((state) => ({
        cart: state.cart.map((item) =>
          item.id === id && item.size === size
            ? { ...item, quantity: Math.max(1, quantity) }
            : item
        ),
      })),
      clearCart: () => set({ cart: [] }),
      getTotalItems: () => get().cart.reduce((total, item) => total + item.quantity, 0),
      getSubtotal: () => get().cart.reduce((total, item) => total + (item.price * item.quantity), 0),
    }),
    {
      name: 'cart-storage',
    }
  )
);
