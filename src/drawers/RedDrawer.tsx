import { Button, Drawer, DrawerProps, Stack } from "@mantine/core";
import useDrawerStore from "../drawersStore";
import { useCallback } from "react";

type RedDrawerProps = DrawerProps & {
  index: number;
  redEntityId?: string;
  redProp?: string;
};

export const RedDrawer = ({
  opened,
  onClose,
  index,
  redEntityId,
  redProp,
  ...props
}: RedDrawerProps) => {
  console.log({ redEntityId, redProp });

  const { openDrawer, openFormDrawer } = useDrawerStore();

  const openBlueDrawer = useCallback(() => {
    openDrawer({
      index: index + 1,
      type: "blue",
    });
  }, [index, openDrawer]);

  const openGreenDrawer = useCallback(() => {
    openDrawer({
      index: index + 1,
      type: "green",
    });
  }, [index, openDrawer]);

  const openRedFormDrawer = useCallback(() => {
    openFormDrawer({
      index: 0,
      type: "red",
    });
  }, [openFormDrawer]);

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
