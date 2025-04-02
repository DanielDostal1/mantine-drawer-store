import { Button, Text } from "@mantine/core";
import { useCallback } from "react";
import { useDrawerActions } from "../../stores/drawersStore/hooks";

export const GreenView = () => {
  const { openDrawer } = useDrawerActions();
  const openGreenDrawer = useCallback(() => {
    openDrawer({
      index: 0,
      type: "green",
      drawerProps: { size: "md", greenProp: "green prop" },
    });
  }, [openDrawer]);

  return (
    <>
      <Text fz="xl">Green View</Text>
      <Button onClick={openGreenDrawer}>Open Green Drawer</Button>
    </>
  );
};
