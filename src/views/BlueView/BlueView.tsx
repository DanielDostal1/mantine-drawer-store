import { Button, Text } from "@mantine/core";
import { useCallback } from "react";
import { useDrawerActions } from "../../stores/drawersStore/hooks";

export const BlueView = () => {
  const { openDrawer } = useDrawerActions();
  const openBlueDrawer = useCallback(() => {
    openDrawer({
      index: 0,
      type: "blue",
      drawerProps: { size: "md", blueProp: "blue prop" },
    });
  }, [openDrawer]);

  return (
    <>
      <Text fz="xl">Blue View</Text>
      <Button onClick={openBlueDrawer}>Open Blue Drawer</Button>
    </>
  );
};
