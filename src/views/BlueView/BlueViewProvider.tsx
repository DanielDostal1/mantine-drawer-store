import { DrawerProvider } from "../../stores/drawersStore/DrawerProvider";
import { ViewLayout } from "../../ViewLayout";
import { BlueView } from "./BlueView";

export const BlueViewProvider = () => {
  return (
    <ViewLayout>
      <DrawerProvider>
        <BlueView />
      </DrawerProvider>
    </ViewLayout>
  );
};
