import { DrawerProvider } from "../../stores/drawersStore/DrawerProvider";
import { ViewLayout } from "../../ViewLayout";
import { GreenView } from "./GreenView";

export const GreenViewProvider = () => {
  return (
    <ViewLayout>
      <DrawerProvider>
        <GreenView />
      </DrawerProvider>
    </ViewLayout>
  );
};
