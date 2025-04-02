import { useContext } from "react";
import { DrawerStore } from "./types/storeTypes";
import { DrawerContext } from "./DrawerContext";
import { useStore } from "zustand";

export const useDrawerStore = <T>(selector: (state: DrawerStore) => T) => {
  const store = useContext(DrawerContext);
  if (!store) {
    throw new Error("useDrawerStore must be used within a DrawerStoreProvider");
  }
  return useStore(store, selector);
};

export const useDrawers = () => useDrawerStore((state) => state.drawers);
export const useDrawerActions = () => useDrawerStore((state) => state.actions);

export const useFormDrawers = () =>
  useDrawerStore((state) => state.formDrawers);
export const useFormDrawerActions = () =>
  useDrawerStore((state) => state.formActions);

// --- custom drawer hooks ----------------------------------------------------

// ...
