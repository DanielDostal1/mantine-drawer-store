import { Button, Text } from "@mantine/core";
import { ViewLayout } from "../ViewLayout";
import { HomeDrawer } from "../drawers/HomeDrawer";
import { useDisclosure } from "@mantine/hooks";

const HomeView = () => {
  const [opened, { open, close }] = useDisclosure();

  return (
    <>
      <ViewLayout>
        <Text fz="xl">Home View</Text>
        <Button onClick={open}>Open Home Drawer</Button>
      </ViewLayout>
      <HomeDrawer opened={opened} onClose={close} />
    </>
  );
};

export default HomeView;
