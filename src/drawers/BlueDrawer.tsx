import { Button, Drawer, DrawerProps, Stack } from "@mantine/core";
import { useCallback } from "react";
import { useDrawerActions } from "../stores/drawersStore/hooks";

type BlueDrawerProps = DrawerProps & {
  stackIndex: number;
  blueEntityId?: string;
  blueProp?: string;
};

export const BlueDrawer = ({
  opened,
  onClose,
  stackIndex,
  blueEntityId,
  blueProp,
  ...props
}: BlueDrawerProps) => {
  console.log({ blueEntityId, blueProp });

  const { openDrawer } = useDrawerActions();

  const openRedDrawer = useCallback(() => {
    openDrawer({
      stackIndex: stackIndex + 1,
      type: "red",
    });
  }, [stackIndex, openDrawer]);

  const openGreenDrawer = useCallback(() => {
    openDrawer({
      stackIndex: stackIndex + 1,
      type: "green",
    });
  }, [stackIndex, openDrawer]);

  const openBlueFormDrawer = useCallback(() => {
    openDrawer({
      stackIndex: stackIndex + 1,
      type: "blueForm",
      isPriorityDrawer: true,
    });
  }, [openDrawer, stackIndex]);

  return (
    <>
      <Drawer opened={opened} onClose={onClose} title="Blue Drawer" {...props}>
        <Stack>
          <Button onClick={openRedDrawer} color="red">
            Open Red Drawer
          </Button>
          <Button onClick={openGreenDrawer} color="green">
            Open Green Drawer
          </Button>
          <Button mt="xl" onClick={openBlueFormDrawer} color="blue">
            Open Blue Form Drawer
          </Button>
        </Stack>
      </Drawer>
    </>
  );
};
