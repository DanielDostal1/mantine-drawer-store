import { Button, Drawer, DrawerProps, Stack } from "@mantine/core";
import { useCallback } from "react";
import { useFormDrawerActions } from "../../stores/drawersStore/hooks";

type BlueFormDrawerProps = DrawerProps & {
  index: number;
  blueEntityId?: string;
  blueProp?: string;
};

export const BlueFormDrawer = ({
  opened,
  onClose,
  index,
  blueEntityId,
  blueProp,
  ...props
}: BlueFormDrawerProps) => {
  console.log({ blueEntityId, blueProp });

  const { openFormDrawer } = useFormDrawerActions();

  const openRedFormDrawer = useCallback(() => {
    openFormDrawer({
      index: index + 1,
      type: "red",
    });
  }, [index, openFormDrawer]);

  const openGreenFormDrawer = useCallback(() => {
    openFormDrawer({
      index: index + 1,
      type: "green",
    });
  }, [index, openFormDrawer]);

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
