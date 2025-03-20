import { Button, Text } from "@mantine/core";
import { ViewLayout } from "../ViewLayout";
import { RevisionUnitDrawer } from "../drawers/RevisionUnitDrawer";
import { useDisclosure } from "@mantine/hooks";

const RevisionUnitsView = () => {
  const [opened, { open, close }] = useDisclosure();

  return (
    <>
      <ViewLayout>
        <Text fz="xl">Revision Units View</Text>
        <Button onClick={open}>Open Revision Unit Drawer</Button>
      </ViewLayout>
      <RevisionUnitDrawer opened={opened} onClose={close} />
    </>
  );
};

export default RevisionUnitsView;
