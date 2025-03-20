import { Button, Drawer, DrawerProps, Stack } from "@mantine/core";
import { RevisionUnitDrawer } from "./RevisionUnitDrawer";
import { useDisclosure } from "@mantine/hooks";
import { TechnicalObjectDrawer } from "./TechnicalObjectDrawer";

export const HomeDrawer = ({ opened, onClose, ...props }: DrawerProps) => {
  const [
    revisionUnitDrawerOpened,
    { open: openRevisionUnitDrawer, close: closeRevisionUnitDrawer },
  ] = useDisclosure();
  const [
    technicalObjectDrawerOpened,
    { open: openTechnicalObjectDrawer, close: closeTechnicalObjectDrawer },
  ] = useDisclosure();

  return (
    <>
      <Drawer opened={opened} onClose={onClose} title="Home Drawer" {...props}>
        <Stack>
          Home Drawer
          <Button onClick={openTechnicalObjectDrawer}>
            Open Technical Object Drawer
          </Button>
          <Button onClick={openRevisionUnitDrawer}>
            Open Revision Unit Drawer
          </Button>
        </Stack>
      </Drawer>
      <RevisionUnitDrawer
        opened={revisionUnitDrawerOpened}
        onClose={closeRevisionUnitDrawer}
      />
      <TechnicalObjectDrawer
        opened={technicalObjectDrawerOpened}
        onClose={closeTechnicalObjectDrawer}
      />
    </>
  );
};
