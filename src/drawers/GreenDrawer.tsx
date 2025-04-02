import { Button, Drawer, DrawerProps, Stack } from "@mantine/core";
import { useCallback } from "react";
import {
  useDrawerActions,
  useFormDrawerActions,
} from "../stores/drawersStore/hooks";

type GreenDrawerProps = DrawerProps & {
  index: number;
  greenEntityId?: string;
  greenProp?: string;
};

export const GreenDrawer = ({
  opened,
  onClose,
  index,
  greenEntityId,
  greenProp,
  ...props
}: GreenDrawerProps) => {
  console.log({ greenEntityId, greenProp });

  const { openDrawer } = useDrawerActions();
  const { openFormDrawer } = useFormDrawerActions();

  const openBlueDrawer = useCallback(() => {
    openDrawer({
      index: index + 1,
      type: "blue",
    });
  }, [index, openDrawer]);

  const openRedDrawer = useCallback(() => {
    openDrawer({
      index: index + 1,
      type: "red",
    });
  }, [index, openDrawer]);

  const openGreenFormDrawer = useCallback(() => {
    openFormDrawer({
      index: 0,
      type: "green",
    });
  }, [openFormDrawer]);

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
