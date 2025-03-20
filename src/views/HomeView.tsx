import { Text } from "@mantine/core";
import { ViewLayout } from "../ViewLayout";

const HomeView = () => {
  // const [opened, { open, close }] = useDisclosure();

  return (
    <>
      <ViewLayout>
        <Text fz="xl">Home View</Text>
        {/* <Button onClick={open}>Open Home Drawer</Button> */}
      </ViewLayout>
    </>
  );
};

export default HomeView;
