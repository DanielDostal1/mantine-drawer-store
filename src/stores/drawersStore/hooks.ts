import { useContext } from "react";
import { DrawerStore } from "./types";
import { DrawerContext } from "./DrawerContext";
import { useStore } from "zustand";

const useDrawerStore = <T>(selector: (state: DrawerStore) => T) => {
  const store = useContext(DrawerContext);
  if (!store) {
    throw new Error("useDrawerStore must be used within a DrawerStoreProvider");
  }
  return useStore(store, selector);
};

export const useDrawers = () => useDrawerStore((state) => state.drawers);
export const useDrawerActions = () => useDrawerStore((state) => state.actions);

// --- custom drawer hooks ----------------------------------------------------

export const useOpenRevisionUnitDetailDrawer = () => {
  const { openDrawer } = useDrawerActions();
  return (/* custom props */) => openDrawer(/* predefined props + custom props */);
};

export const useOpenInspectionEditFormDrawer = () => {
  const { openDrawer } = useDrawerActions();
  return (/* custom props */) => openDrawer(/* predefined props + custom props */);
};

// ...
