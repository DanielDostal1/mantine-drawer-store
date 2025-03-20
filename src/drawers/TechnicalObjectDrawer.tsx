import { Button, Drawer, DrawerProps, Stack } from "@mantine/core";
import { randomId } from "@mantine/hooks";
import { useCallback } from "react";
import useDrawerStore from "../drawerStore";

type TechnicalObjctDrawerProps = DrawerProps & {
  technicalObjectId?: string;
  customProp2?: string;
};

export const TechnicalObjectDrawer = ({
  technicalObjectId,
  opened,
  onClose,
  customProp2,
  ...props
}: TechnicalObjctDrawerProps) => {
  console.log("TechnicalObjectDrawer", technicalObjectId, customProp2);

  const { openDrawer } = useDrawerStore();

  const openRevisionUnitDrawer = useCallback(() => {
    openDrawer({
      id: randomId(),
      type: "revisionUnit",
      entityId: "1",
      customProps: { customProp1: "bb" },
    });
  }, [openDrawer]);

  return (
    <>
      <Drawer
        opened={opened}
        onClose={onClose}
        title="TechnicalObject Drawer"
        {...props}
      >
        <Stack>
          TechnicalObject Drawer
          <Button onClick={openRevisionUnitDrawer}>
            Open Revision Unit Drawer
          </Button>
        </Stack>
      </Drawer>
    </>
  );
};
