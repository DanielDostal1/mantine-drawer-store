import { Button, Drawer, DrawerProps, Stack } from "@mantine/core";
import { useCallback } from "react";
import { useDrawerActions } from "../../stores/drawersStore/hooks";

type BlueFormDrawerProps = DrawerProps & {
  stackIndex: number;
  blueEntityId?: string;
  blueProp?: string;
};

export const BlueFormDrawer = ({
  opened,
  onClose,
  stackIndex,
  blueEntityId,
  blueProp,
  ...props
}: BlueFormDrawerProps) => {
  console.log({ blueEntityId, blueProp });

  const { openDrawer } = useDrawerActions();

  const openRedFormDrawer = useCallback(() => {
    openDrawer({
      stackIndex: stackIndex + 1,
      type: "redForm",
      isPriorityDrawer: true,
    });
  }, [stackIndex, openDrawer]);

  const openGreenFormDrawer = useCallback(() => {
    openDrawer({
      stackIndex: stackIndex + 1,
      type: "greenForm",
      isPriorityDrawer: true,
    });
  }, [stackIndex, openDrawer]);

  return (
    <>
      <Drawer
        opened={opened}
        onClose={onClose}
        title="Blue Form Drawer"
        {...props}
      >
        <Stack>
          <Button onClick={openRedFormDrawer} color="red">
            Open Red Form Drawer
          </Button>
          <Button onClick={openGreenFormDrawer} color="green">
            Open Green Form Drawer
          </Button>
        </Stack>
      </Drawer>
    </>
  );
};
