import { Button, Drawer, DrawerProps, Stack } from "@mantine/core";
import { HomeDrawer } from "./HomeDrawer";
import { TechnicalObjectDrawer } from "./TechnicalObjectDrawer";
import { useDisclosure } from "@mantine/hooks";

export const RevisionUnitDrawer = ({
  opened,
  onClose,
  ...props
}: DrawerProps) => {
  const [homeDrawerOpened, { open: openHomeDrawer, close: closeHomeDrawer }] =
    useDisclosure();
  const [
    technicalObjectDrawerOpened,
    { open: openTechnicalObjectDrawer, close: closeTechnicalObjectDrawer },
  ] = useDisclosure();

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
          <Button onClick={openHomeDrawer}>Open Home Drawer</Button>
          <Button onClick={openTechnicalObjectDrawer}>
            Open Technical Object Drawer
          </Button>
        </Stack>
      </Drawer>
      <HomeDrawer opened={homeDrawerOpened} onClose={closeHomeDrawer} />
      <TechnicalObjectDrawer
        opened={technicalObjectDrawerOpened}
        onClose={closeTechnicalObjectDrawer}
      />
    </>
  );
};
