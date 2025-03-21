import { Button, Drawer, DrawerProps, Stack } from "@mantine/core";
import { randomId } from "@mantine/hooks";
import { useCallback } from "react";
import useFormDrawerStore from "../../formDrawerStore";

type RevisionUnitFormDrawerProps = DrawerProps & {
  revisionUnitId?: string;
  customFormProp3?: string;
};

export const RevisionUnitFormDrawer = ({
  revisionUnitId,
  opened,
  onClose,
  customFormProp3,
  ...props
}: RevisionUnitFormDrawerProps) => {
  console.log("RevisionUnitFormDrawer", revisionUnitId, customFormProp3);

  const { openFormDrawer } = useFormDrawerStore();

  const openTechnicalObjectFormDrawer = useCallback(() => {
    openFormDrawer({
      id: randomId(),
      type: "technicalObject",
      entityId: "1",
    });
  }, [openFormDrawer]);

  const openDefectFormDrawer = useCallback(() => {
    openFormDrawer({
      id: randomId(),
      type: "defect",
      entityId: "1",
    });
  }, [openFormDrawer]);

  return (
    <>
      <Drawer
        opened={opened}
        onClose={onClose}
        title="Revision Unit Form Drawer"
        size="xs"
        {...props}
      >
        <Stack>
          <Button onClick={openTechnicalObjectFormDrawer}>
            Open Technical Object Form Drawer
          </Button>
          <Button onClick={openDefectFormDrawer}>
            Open Defect Form Drawer
          </Button>
        </Stack>
      </Drawer>
    </>
  );
};
