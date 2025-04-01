import { Button, Text } from "@mantine/core";
import { useCallback } from "react";
import useDrawerStore from "../drawersStore";
import { ViewLayout } from "../ViewLayout";

const GreenView = () => {
  const { openDrawer } = useDrawerStore();
  const openGreenDrawer = useCallback(() => {
    openDrawer({
      index: 0,
      type: "green",
      drawerProps: { size: "md", greenProp: "green prop" },
    });
  }, [openDrawer]);

  return (
    <>
      <ViewLayout>
        <Text fz="xl">Green View</Text>
        <Button onClick={openGreenDrawer}>Open Green Drawer</Button>
      </ViewLayout>
    </>
  );
};

export default GreenView;
