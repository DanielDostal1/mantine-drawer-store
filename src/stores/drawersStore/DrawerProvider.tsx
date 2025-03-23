import { PropsWithChildren, useState } from "react";
import { CommonDrawerProps } from "./types";
import { DrawerContext } from "./DrawerContext";
import { DrawerStack } from "./DrawerStack";
import { createDrawerStore } from "./createDrawerStore";

type DrawerProviderProps = PropsWithChildren & {
  initialDrawers?: CommonDrawerProps[];
};

export const DrawerProvider = ({ children, initialDrawers = [] }: DrawerProviderProps) => {
  const [store] = useState(() => createDrawerStore(initialDrawers));
  return (
    <DrawerContext.Provider value={store}>
      {children}
      <DrawerStack />
    </DrawerContext.Provider>
  );
};
