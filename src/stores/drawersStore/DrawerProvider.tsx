import { PropsWithChildren, useState } from "react";
import createDrawerStore, { CreateDrawerStoreProps } from "./createDrawerStore";
import { DrawerContext } from "./DrawerContext";
import { DrawerStack } from "./DrawerStack";

type DrawerProviderProps = PropsWithChildren & CreateDrawerStoreProps;

export const DrawerProvider = ({
  children,
  initialDrawers = [],
}: DrawerProviderProps) => {
  const [store] = useState(() => createDrawerStore({ initialDrawers }));

  return (
    <DrawerContext.Provider value={store}>
      {children}
      <DrawerStack />
    </DrawerContext.Provider>
  );
};
