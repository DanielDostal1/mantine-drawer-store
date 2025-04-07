import { Button, Drawer, DrawerProps, Stack } from "@mantine/core";
import { useCallback } from "react";
import { useDrawerActions } from "../stores/drawersStore/hooks";

type GreenDrawerProps = DrawerProps & {
  stackIndex: number;
  greenEntityId?: string;
  greenProp?: string;
};

export const GreenDrawer = ({
  opened,
  onClose,
  stackIndex,
  greenEntityId,
  greenProp,
  ...props
}: GreenDrawerProps) => {
  console.log({ greenEntityId, greenProp });

  const { openDrawer } = useDrawerActions();

  const openBlueDrawer = useCallback(() => {
    openDrawer({
      stackIndex: stackIndex + 1,
      type: "blue",
    });
  }, [stackIndex, openDrawer]);

  const openRedDrawer = useCallback(() => {
    openDrawer({
      stackIndex: stackIndex + 1,
      type: "red",
    });
  }, [stackIndex, openDrawer]);

  const openGreenFormDrawer = useCallback(() => {
    openDrawer({
      stackIndex: stackIndex + 1,
      type: "greenForm",
      isPriorityDrawer: true,
    });
  }, [openDrawer, stackIndex]);

  return (
    <>
      <Drawer opened={opened} onClose={onClose} title="Green Drawer" {...props}>
        <Stack>
          <Button onClick={openBlueDrawer} color="blue">
            Open Blue Drawer
          </Button>
          <Button onClick={openRedDrawer} color="red">
            Open Red Drawer
          </Button>
          <Button mt="xl" onClick={openGreenFormDrawer} color="green">
            Open Green Form Drawer
          </Button>
        </Stack>
      </Drawer>
    </>
  );
};
