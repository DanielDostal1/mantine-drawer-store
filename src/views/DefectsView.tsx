import { Button, Text } from "@mantine/core";
import { randomId } from "@mantine/hooks";
import { useCallback } from "react";
import { ViewLayout } from "../ViewLayout";
import useDrawerStore from "../drawerStore";

const DefectsView = () => {
  const { openDrawer } = useDrawerStore();

  const openDefectDrawer = useCallback(() => {
    openDrawer({
      id: randomId(),
      type: "defect",
      entityId: "1",
      drawerProps: { size: "md" },
      customProps: { customProp3: "custom prop 3" },
    });
  }, [openDrawer]);

  return (
    <>
      <ViewLayout>
        <Text fz="xl">Defects View</Text>
        <Button onClick={openDefectDrawer}>Open Defect Drawer</Button>
      </ViewLayout>
    </>
  );
};

export default DefectsView;
