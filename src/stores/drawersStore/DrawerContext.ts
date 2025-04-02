import { createContext } from "react";
import { StoreApi } from "zustand";
import { DrawerStore } from "./types/storeTypes";

export const DrawerContext = createContext<StoreApi<DrawerStore> | undefined>(
  undefined,
);
