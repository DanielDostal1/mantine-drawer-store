import { Button, Text } from "@mantine/core";
import { useCallback } from "react";
import useDrawerStore from "../drawersStore";
import { ViewLayout } from "../ViewLayout";

const BlueView = () => {
  const { openDrawer } = useDrawerStore();
  const openBlueDrawer = useCallback(() => {
    openDrawer({
      index: 0,
      type: "blue",
      drawerProps: { size: "md", blueProp: "blue prop" },
    });
  }, [openDrawer]);

  return (
    <>
      <ViewLayout>
        <Text fz="xl">Blue View</Text>
        <Button onClick={openBlueDrawer}>Open Blue Drawer</Button>
      </ViewLayout>
    </>
  );
};

export default BlueView;
