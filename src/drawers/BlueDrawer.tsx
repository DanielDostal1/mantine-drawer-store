import { Button, Drawer, DrawerProps, Stack } from "@mantine/core";
import { useCallback } from "react";
import {
  useDrawerActions,
  useFormDrawerActions,
} from "../stores/drawersStore/hooks";

type BlueDrawerProps = DrawerProps & {
  index: number;
  blueEntityId?: string;
  blueProp?: string;
};

export const BlueDrawer = ({
  opened,
  onClose,
  index,
  blueEntityId,
  blueProp,
  ...props
}: BlueDrawerProps) => {
  console.log({ blueEntityId, blueProp });

  const { openDrawer } = useDrawerActions();
  const { openFormDrawer } = useFormDrawerActions();

  const openRedDrawer = useCallback(() => {
    openDrawer({
      index: index + 1,
      type: "red",
    });
  }, [index, openDrawer]);

  const openGreenDrawer = useCallback(() => {
    openDrawer({
      index: index + 1,
      type: "green",
    });
  }, [index, openDrawer]);

  const openBlueFormDrawer = useCallback(() => {
    openFormDrawer({
      index: 0,
      type: "blue",
    });
  }, [openFormDrawer]);

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
