import { Button, Drawer, DrawerProps, Stack } from "@mantine/core";
import { useCallback } from "react";
import { useFormDrawerActions } from "../../stores/drawersStore/hooks";

type GreenFormDrawerProps = DrawerProps & {
  index: number;
  greenEntityId?: string;
  greenProp?: string;
};

export const GreenFormDrawer = ({
  opened,
  onClose,
  index,
  greenEntityId,
  greenProp,
  ...props
}: GreenFormDrawerProps) => {
  console.log({ greenEntityId, greenProp });

  const { openFormDrawer } = useFormDrawerActions();

  const openBlueFormDrawer = useCallback(() => {
    openFormDrawer({
      index: index + 1,
      type: "blue",
    });
  }, [index, openFormDrawer]);

  const openRedFormDrawer = useCallback(() => {
    openFormDrawer({
      index: index + 1,
      type: "red",
    });
  }, [index, openFormDrawer]);

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
