import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
};

interface WishlistState {
  wishlist: Product[];
  addToWishlist: (item: Product) => void;
  removeFromWishlist: (id: string) => void;
  isInWishlist: (id: string) => boolean;
  clearWishlist: () => void;
}

export const useWishlistStore = create<WishlistState>()(
  persist(
    (set, get) => ({
      wishlist: [],
      addToWishlist: (item) => set((state) => {
        if (!state.wishlist.find((i) => i.id === item.id)) {
           return { wishlist: [...state.wishlist, item] };
        }
        return state;
      }),
      removeFromWishlist: (id) => set((state) => ({
        wishlist: state.wishlist.filter((item) => item.id !== id),
      })),
      isInWishlist: (id) => !!get().wishlist.find((item) => item.id === id),
      clearWishlist: () => set({ wishlist: [] }),
    }),
    {
      name: 'wishlist-storage',
    }
  )
);
