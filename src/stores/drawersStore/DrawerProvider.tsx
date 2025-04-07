import { PropsWithChildren, useMemo } from "react";
import createDrawerStore, { CreateDrawerStoreProps } from "./createDrawerStore";
import { DrawerContext } from "./DrawerContext";
import { DrawerRenderer } from "./DrawerRenderer";

type DrawerProviderProps = PropsWithChildren & CreateDrawerStoreProps;

export const DrawerProvider = ({
  children,
  initialDrawers = [],
}: DrawerProviderProps) => {
  const store = useMemo(
    () => createDrawerStore({ initialDrawers }),
    [initialDrawers],
  );

  return (
    <DrawerContext.Provider value={store}>
      {children}
      <DrawerRenderer />
    </DrawerContext.Provider>
  );
};
