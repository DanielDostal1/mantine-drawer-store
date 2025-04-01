import { Button, Drawer, DrawerProps, Stack } from "@mantine/core";
import { useCallback } from "react";
import useDrawerStore from "../../drawersStore";

type RedFormDrawerProps = DrawerProps & {
  index: number;
  redEntityId?: string;
  redProp?: string;
};

export const RedFormDrawer = ({
  opened,
  onClose,
  index,
  redEntityId,
  redProp,
  ...props
}: RedFormDrawerProps) => {
  console.log({ redEntityId, redProp });

  const { openFormDrawer } = useDrawerStore();

  const openBlueFormDrawer = useCallback(() => {
    openFormDrawer({
      index: index + 1,
      type: "blue",
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
