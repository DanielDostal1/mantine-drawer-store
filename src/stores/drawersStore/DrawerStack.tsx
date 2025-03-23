import { Drawer } from "@mantine/core";
import { useDrawers } from "./hooks";

export const DrawerStack = () => {
  const drawers = useDrawers();
  return (
    <>
      {drawers.map((drawer) => (
        <Drawer key={drawer.id} {...drawer} />
      ))}
    </>
  );
};
