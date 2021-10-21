import create from "zustand";

export const useStore = create((set) => ({
  microAnimations: true,
  shoppingCart: [],
  setShoppingCart: (data) =>
    set((state) => ({ shoppingCart: [...state.shoppingCart, data] })),
  setMicroAnimations: (data) => set(() => ({ microAnimations: data })),
}));
