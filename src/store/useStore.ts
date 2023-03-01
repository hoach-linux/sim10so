import { create } from "zustand";

const useStore = create((set) => ({
  page: 1,
  setPage: (page: number) =>
    set((state: any) => ({ page: (state.page = page) })),
  resetPage: () => set((state: any) => ({ page: (state.page = 1) })),
}));

export default useStore;
