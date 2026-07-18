import { create } from "zustand";

interface IUIStore {
  isSidebarCollapsed: boolean;
}

interface IUIStoreActions {
  toggleSidebar: () => void;
}

const initialState: IUIStore = {
  isSidebarCollapsed: false,
};

export const useUIStore = create<IUIStore & IUIStoreActions>((set) => ({
  ...initialState,
  toggleSidebar: () =>
    set((state) => ({
      isSidebarCollapsed: !state.isSidebarCollapsed,
    })),
}));
