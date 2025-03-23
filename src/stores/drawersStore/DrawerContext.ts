import { createContext } from "react";
import { StoreApi } from "zustand";
import { DrawerStore } from "./types";

export const DrawerContext = createContext<StoreApi<DrawerStore> | undefined>(undefined);
