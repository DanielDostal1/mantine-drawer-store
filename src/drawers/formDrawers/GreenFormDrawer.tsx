import { Button, Drawer, DrawerProps, Stack } from "@mantine/core";
import { useCallback } from "react";
import { useDrawerActions } from "../../stores/drawersStore/hooks";

type GreenFormDrawerProps = DrawerProps & {
  stackIndex: number;
  greenEntityId?: string;
  greenProp?: string;
};

export const GreenFormDrawer = ({
  opened,
  onClose,
  stackIndex,
  greenEntityId,
  greenProp,
  ...props
}: GreenFormDrawerProps) => {
  console.log({ greenEntityId, greenProp });

  const { openDrawer } = useDrawerActions();

  const openBlueFormDrawer = useCallback(() => {
    openDrawer({
      stackIndex: stackIndex + 1,
      type: "blueForm",
      isPriorityDrawer: true,
    });
  }, [stackIndex, openDrawer]);

  const openRedFormDrawer = useCallback(() => {
    openDrawer({
      stackIndex: stackIndex + 1,
      type: "redForm",
      isPriorityDrawer: true,
    });
  }, [stackIndex, openDrawer]);

  return (
    <>
      <Drawer
        opened={opened}
        onClose={onClose}
        title="Green Form Drawer"
        {...props}
      >
        <Stack>
          <Button onClick={openBlueFormDrawer} color="blue">
            Open Blue Form Drawer
          </Button>
          <Button onClick={openRedFormDrawer} color="red">
            Open Red Form Drawer
          </Button>
        </Stack>
      </Drawer>
    </>
  );
};
