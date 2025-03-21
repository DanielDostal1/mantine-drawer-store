import { Button, Drawer, DrawerProps, Stack } from "@mantine/core";
import { randomId } from "@mantine/hooks";
import { useCallback } from "react";
import useFormDrawerStore from "../../formDrawerStore";
import useDrawerStore from "../../drawerStore";

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
  console.log("RevisionUnitDrawer", revisionUnitId, customProp1);

  const { openDrawer } = useDrawerStore();
  const { openFormDrawer } = useFormDrawerStore();

  const openTechnicalObjectDrawer = useCallback(() => {
    openDrawer({
      id: randomId(),
      type: "technicalObject",
      entityId: "1",
      customProps: { customProp2: "aa" },
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

  const openRevisionUnitFormDrawer = useCallback(() => {
    openFormDrawer({
      id: randomId(),
      type: "revisionUnit",
      entityId: revisionUnitId || "1",
    });
  }, [openFormDrawer, revisionUnitId]);

  return (
    <>
      <Drawer
        opened={opened}
        onClose={onClose}
        title="Revision Unit Drawer"
        {...props}
      >
        <Stack>
          <Button onClick={openTechnicalObjectDrawer}>
            Open Technical Object Drawer
          </Button>
          <Button onClick={openDefectDrawer}>Open Defect Drawer</Button>
          <Button mt="xl" onClick={openRevisionUnitFormDrawer}>
            Open Revision Unit Form Drawer
          </Button>
        </Stack>
      </Drawer>
    </>
  );
};
