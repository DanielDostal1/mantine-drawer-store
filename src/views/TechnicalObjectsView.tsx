import { Button, Text } from "@mantine/core";
import { ViewLayout } from "../ViewLayout";
import { TechnicalObjectDrawer } from "../drawers/TechnicalObjectDrawer";
import { useDisclosure } from "@mantine/hooks";

const TechnicalObjectsView = () => {
  const [opened, { open, close }] = useDisclosure();

  return (
    <>
      <ViewLayout>
        <Text fz="xl">Revision Units View</Text>
        <Button onClick={open}>Open Technical Object Drawer</Button>
      </ViewLayout>
      <TechnicalObjectDrawer opened={opened} onClose={close} />
    </>
  );
};

export default TechnicalObjectsView;
