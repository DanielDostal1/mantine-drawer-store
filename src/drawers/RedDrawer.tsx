import { Button, Drawer, DrawerProps, Stack } from "@mantine/core";
import { useCallback } from "react";
import { useDrawerActions } from "../stores/drawersStore/hooks";

type RedDrawerProps = DrawerProps & {
  stackIndex: number;
  redEntityId?: string;
  redProp?: string;
};

export const RedDrawer = ({
  opened,
  onClose,
  stackIndex,
  redEntityId,
  redProp,
  ...props
}: RedDrawerProps) => {
  console.log({ redEntityId, redProp });

  const { openDrawer } = useDrawerActions();

  const openBlueDrawer = useCallback(() => {
    openDrawer({
      stackIndex: stackIndex + 1,
      type: "blue",
    });
  }, [stackIndex, openDrawer]);

  const openGreenDrawer = useCallback(() => {
    openDrawer({
      stackIndex: stackIndex + 1,
      type: "green",
    });
  }, [stackIndex, openDrawer]);

  const openRedFormDrawer = useCallback(() => {
    openDrawer({
      stackIndex: stackIndex + 1,
      type: "redForm",
      isPriorityDrawer: true,
    });
  }, [openDrawer, stackIndex]);

  return (
    <>
      <Drawer opened={opened} onClose={onClose} title="Red Drawer" {...props}>
        <Stack>
          <Button onClick={openBlueDrawer} color="blue">
            Open Blue Drawer
          </Button>
          <Button onClick={openGreenDrawer} color="green">
            Open Green Drawer
          </Button>
          <Button mt="xl" onClick={openRedFormDrawer} color="red">
            Open Red Form Drawer
          </Button>
        </Stack>
      </Drawer>
    </>
  );
};
