import { Button, Text } from "@mantine/core";
import { useCallback } from "react";
import { useDrawerActions } from "../../stores/drawersStore/hooks";

export const RedView = () => {
  const { openDrawer } = useDrawerActions();

  const openRedDrawer = useCallback(() => {
    openDrawer({
      stackIndex: 0,
      type: "red",
      drawerProps: { size: "md", redProp: "red prop" },
    });
  }, [openDrawer]);

  return (
    <>
      <Text fz="xl">Red View</Text>
      <Button onClick={openRedDrawer}>Open Red Drawer</Button>
    </>
  );
};
