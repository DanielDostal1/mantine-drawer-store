import { Button, Text } from "@mantine/core";
import { ViewLayout } from "../../ViewLayoutout";
import { randomId } from "@mantine/hooks";
import { useCallback } from "react";
import useDrawerStore from "../../_old/_drawerStoreStore";

const TechnicalObjectsView = () => {
  const { openDrawer } = useDrawerStore();

  const openTechnicalObjectDrawer = useCallback(() => {
    openDrawer({
      id: randomId(),
      type: "technicalObject",
      entityId: "1",
      customProps: { customProp2: "aa" },
    });
  }, [openDrawer]);

  return (
    <>
      <ViewLayout>
        <Text fz="xl">Technical Objects View</Text>
        <Button onClick={openTechnicalObjectDrawer}>
          Open Technical Object Drawer
        </Button>
      </ViewLayout>
    </>
  );
};

export default TechnicalObjectsView;
