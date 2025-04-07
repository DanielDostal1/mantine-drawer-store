import { Button, Drawer, DrawerProps, Stack } from "@mantine/core";
import { useCallback } from "react";
import { useDrawerActions } from "../../stores/drawersStore/hooks";

type RedFormDrawerProps = DrawerProps & {
  stackIndex: number;
  redEntityId?: string;
  redProp?: string;
};

export const RedFormDrawer = ({
  opened,
  onClose,
  stackIndex,
  redEntityId,
  redProp,
  ...props
}: RedFormDrawerProps) => {
  console.log({ redEntityId, redProp });

  const { openDrawer } = useDrawerActions();

  const openBlueFormDrawer = useCallback(() => {
    openDrawer({
      stackIndex: stackIndex + 1,
      type: "blueForm",
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
        title="Red Form Drawer"
        {...props}
      >
        <Stack>
          <Button onClick={openBlueFormDrawer} color="blue">
            Open Blue Form Drawer
          </Button>
          <Button onClick={openGreenFormDrawer} color="green">
            Open Green Form Drawer
          </Button>
        </Stack>
      </Drawer>
    </>
  );
};
