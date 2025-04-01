import { Button, Drawer, DrawerProps, Stack } from "@mantine/core";
import { randomId } from "@mantine/hooks";
import { useCallback } from "react";
import useFormDrawerStore from "../../formDrawerStore";
import useDrawerStore from "../../_drawerStore";

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
  const { openFormDrawer } = useFormDrawerStore();

  const openRevisionUnitDrawer = useCallback(() => {
    openDrawer({
      id: randomId(),
      type: "revisionUnit",
      entityId: "1",
      customProps: { customProp1: "bb" },
    });
  }, [openDrawer]);

  const openDefectDrawer = useCallback(() => {
    openDrawer({
      id: randomId(),
      type: "defect",
      entityId: "1",
      drawerProps: { size: "md" },
      customProps: { customProp3: "custom prop 3" },
    });
  }, [openDrawer]);

  const openTechnicalObjectFormDrawer = useCallback(() => {
    openFormDrawer({
      id: randomId(),
      type: "technicalObject",
      entityId: technicalObjectId || "1",
    });
  }, [openFormDrawer, technicalObjectId]);

  return (
    <>
      <Drawer
        opened={opened}
        onClose={onClose}
        title="TechnicalObject Drawer"
        {...props}
      >
        <Stack>
          <Button onClick={openRevisionUnitDrawer}>
            Open Revision Unit Drawer
          </Button>
          <Button onClick={openDefectDrawer}>Open Defect Drawer</Button>
          <Button mt="xl" onClick={openTechnicalObjectFormDrawer}>
            Open Technical Object Form Drawer
          </Button>
        </Stack>
      </Drawer>
    </>
  );
};
