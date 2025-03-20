import { Button, Drawer, DrawerProps, Stack } from "@mantine/core";
import { RevisionUnitDrawer } from "./RevisionUnitDrawer";
import { useDisclosure } from "@mantine/hooks";
import { HomeDrawer } from "./HomeDrawer";

export const TechnicalObjectDrawer = ({
  opened,
  onClose,
  ...props
}: DrawerProps) => {
  const [homeDrawerOpened, { open: openHomeDrawer, close: closeHomeDrawer }] =
    useDisclosure();
  const [
    revisionUnitDrawerOpened,
    { open: openRevisionUnitDrawer, close: closeRevisionUnitDrawer },
  ] = useDisclosure();

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
          <Button onClick={openHomeDrawer}>Open Home Drawer</Button>
          <Button onClick={openRevisionUnitDrawer}>
            Open Revision Unit Drawer
          </Button>
        </Stack>
      </Drawer>
      <HomeDrawer opened={homeDrawerOpened} onClose={closeHomeDrawer} />
      <RevisionUnitDrawer
        opened={revisionUnitDrawerOpened}
        onClose={closeRevisionUnitDrawer}
      />
    </>
  );
};
