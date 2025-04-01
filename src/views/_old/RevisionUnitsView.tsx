import { Button, Text } from "@mantine/core";
import { randomId } from "@mantine/hooks";
import { useCallback } from "react";
import { ViewLayout } from "../../ViewLayoutout";
import useDrawerStore from "../../_old/_drawerStore";

const RevisionUnitsView = () => {
  const { openDrawer } = useDrawerStore();

  const openRevisionUnitDrawer = useCallback(() => {
    openDrawer({
      id: randomId(),
      type: "revisionUnit",
      entityId: "1",
      drawerProps: { size: "md" },
      customProps: { customProp1: "aa" },
    });
  }, [openDrawer]);

  return (
    <>
      <ViewLayout>
        <Text fz="xl">Revision Units View</Text>
        <Button onClick={openRevisionUnitDrawer}>
          Open Revision Unit Drawer
        </Button>
      </ViewLayout>
    </>
  );
};

export default RevisionUnitsView;
