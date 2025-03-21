import { Button, Drawer, DrawerProps, Stack } from "@mantine/core";
import { randomId } from "@mantine/hooks";
import { useCallback } from "react";
import useFormDrawerStore from "../../formDrawerStore";

type DefectFormDrawerProps = DrawerProps & {
  defectId?: string;
  customFormProp3?: string;
};

export const DefectFormDrawer = ({
  defectId,
  opened,
  onClose,
  customFormProp3,
  ...props
}: DefectFormDrawerProps) => {
  console.log("DefectFormDrawer", defectId, customFormProp3);

  const { openFormDrawer } = useFormDrawerStore();

  const openTechnicalObjectFormDrawer = useCallback(() => {
    openFormDrawer({
      id: randomId(),
      type: "technicalObject",
      entityId: "1",
    });
  }, [openFormDrawer]);

  const openRevisionUnitFormDrawer = useCallback(() => {
    openFormDrawer({
      id: randomId(),
      type: "revisionUnit",
      entityId: "1",
    });
  }, [openFormDrawer]);

  return (
    <>
      <Drawer
        opened={opened}
        onClose={onClose}
        title="Defect Form Drawer"
        size="xs"
        {...props}
      >
        <Stack>
          <Button onClick={openTechnicalObjectFormDrawer}>
            Open Technical Object Form Drawer
          </Button>
          <Button onClick={openRevisionUnitFormDrawer}>
            Open Revision Unit Form Drawer
          </Button>
        </Stack>
      </Drawer>
    </>
  );
};
