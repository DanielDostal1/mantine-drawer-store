import { DrawerProvider } from "../../stores/drawersStore/DrawerProvider";
import { ViewLayout } from "../../ViewLayout";
import { RedView } from "./RedView";

export const RedViewProvider = () => {
  return (
    <ViewLayout>
      <DrawerProvider initialDrawers={[]}>
        <RedView />
      </DrawerProvider>
    </ViewLayout>
  );
};
