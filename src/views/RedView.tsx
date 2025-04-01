import { Button, Text } from "@mantine/core";
import { useCallback } from "react";
import useDrawerStore from "../drawersStore";
import { ViewLayout } from "../ViewLayout";

const RedView = () => {
  const { openDrawer } = useDrawerStore();
  const openRedDrawer = useCallback(() => {
    openDrawer({
      index: 0,
      type: "red",
      drawerProps: { size: "md", redProp: "red prop" },
    });
  }, [openDrawer]);

  return (
    <>
      <ViewLayout>
        <Text fz="xl">Red View</Text>
        <Button onClick={openRedDrawer}>Open Red Drawer</Button>
      </ViewLayout>
    </>
  );
};

export default RedView;
