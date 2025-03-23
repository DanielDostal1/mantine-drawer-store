import { createStore } from "zustand";
import { CommonDrawerProps, DrawerStore } from "./types";

export const createDrawerStore = (initialDrawers: CommonDrawerProps[] = []) =>
  createStore<DrawerStore>()(() => ({
    drawers: initialDrawers,
    actions: {
      openDrawer: () => {}, // Implement openDrawer
      closeDrawer: () => {}, // Implement closeDrawer
      removeDrawer: () => {}, // Implement removeDrawer
      clearDrawers: () => {}, // Implement clearDrawers
    },
  }));
