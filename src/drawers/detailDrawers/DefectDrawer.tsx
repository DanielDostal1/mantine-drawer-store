import { Button, Drawer, DrawerProps, Stack } from "@mantine/core";
import { randomId } from "@mantine/hooks";
import { useCallback } from "react";
import useFormDrawerStore from "../../formDrawerStore";
import useDrawerStore from "../../drawerStore";

type DefectDrawerProps = DrawerProps & {
  defectId?: string;
  customProp3?: string;
};

export const DefectDrawer = ({
  defectId,
  opened,
  onClose,
  customProp3,
  ...props
}: DefectDrawerProps) => {
  console.log("DefectDrawer", defectId, customProp3);

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

  const openRevisionUnitDrawer = useCallback(() => {
    openDrawer({
      id: randomId(),
      type: "revisionUnit",
      entityId: "1",
      customProps: { customProp1: "bb" },
    });
  }, [openDrawer]);

  const openDefectFormDrawer = useCallback(() => {
    openFormDrawer({
      id: randomId(),
      type: "defect",
      entityId: defectId || "1",
      customProps: { customFormProp3: "cc" },
    });
  }, [openFormDrawer, defectId]);

  return (
    <>
      <Drawer
        opened={opened}
        onClose={onClose}
        title="Defect Drawer"
        {...props}
      >
        <Stack>
          <Button onClick={openTechnicalObjectDrawer}>
            Open Technical Object Drawer
          </Button>
          <Button onClick={openRevisionUnitDrawer}>
            Open Revision Unit Drawer
          </Button>
          <Button mt="xl" onClick={openDefectFormDrawer}>
            Open Defect Form Drawer
          </Button>
        </Stack>
      </Drawer>
    </>
  );
};
