import { Button, Drawer, DrawerProps, Stack } from "@mantine/core";
import { randomId } from "@mantine/hooks";
import { useCallback } from "react";
import useDrawerStore from "../drawerStore";

type RevisionUnitDrawerProps = DrawerProps & {
  revisionUnitId?: string;
  customProp1?: string;
};

export const RevisionUnitDrawer = ({
  revisionUnitId,
  opened,
  onClose,
  customProp1,
  ...props
}: RevisionUnitDrawerProps) => {
  const { openDrawer } = useDrawerStore();

  const openTechnicalObjectDrawer = useCallback(() => {
    openDrawer({
      id: randomId(),
      type: "technicalObject",
      entityId: "1",
      customProps: { customProp2: "aa" },
    });
  }, [openDrawer]);

  console.log("RevisionUnitDrawer", revisionUnitId, customProp1);

  return (
    <>
      <Drawer
        opened={opened}
        onClose={onClose}
        title="Revision Unit Drawer"
        {...props}
      >
        <Stack>
          Revision Unit Drawer
          <Button onClick={openTechnicalObjectDrawer}>
            Open Technical Object Drawer
          </Button>
        </Stack>
      </Drawer>
    </>
  );
};
