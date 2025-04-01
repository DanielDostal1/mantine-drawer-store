import { Button, Drawer, DrawerProps, Stack } from "@mantine/core";
import { randomId } from "@mantine/hooks";
import { useCallback } from "react";
import useFormDrawerStore from "../../formDrawerStore";

type TechnicalObjectFormDrawerProps = DrawerProps & {
  technicalObjectId?: string;
  customFormProp3?: string;
};

export const TechnicalObjectFormDrawer = ({
  technicalObjectId,
  opened,
  onClose,
  customFormProp3,
  ...props
}: TechnicalObjectFormDrawerProps) => {
  console.log("TechnicalObjectFormDrawer", technicalObjectId, customFormProp3);

  const { openFormDrawer } = useFormDrawerStore();

  const openDefectFormDrawer = useCallback(() => {
    openFormDrawer({
      id: randomId(),
      type: "defect",
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
        title="Technical Object Form Drawer"
        size="xs"
        {...props}
      >
        <Stack>
          <Button onClick={openDefectFormDrawer}>
            Open Defect Form Drawer
          </Button>
          <Button onClick={openRevisionUnitFormDrawer}>
            Open Revision Unit Form Drawer
          </Button>
        </Stack>
      </Drawer>
    </>
  );
};
