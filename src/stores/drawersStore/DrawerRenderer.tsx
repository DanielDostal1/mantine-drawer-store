import { DrawerProps } from "@mantine/core";
import { BlueDrawer } from "../../drawers/BlueDrawer";
import { BlueFormDrawer } from "../../drawers/formDrawers/BlueFormDrawer";
import { GreenFormDrawer } from "../../drawers/formDrawers/GreenFormDrawer";
import { RedFormDrawer } from "../../drawers/formDrawers/RedFormDrawer";
import { GreenDrawer } from "../../drawers/GreenDrawer";
import { RedDrawer } from "../../drawers/RedDrawer";
import { useDrawers, useDrawerStore } from "./hooks";

export const DrawerRenderer = () => {
  const drawers = useDrawers();
  const priorityDrawerIndexStack = useDrawerStore(
    (state) => state.priorityDrawerIndexStack,
  );

  const closeDrawer = useDrawerStore((state) => state.actions.closeDrawer);

  return (
    <>
      {drawers.map((drawer, i) => {
        const commonDrawerProps = {
          position: "right" as DrawerProps["position"],
          stackIndex: drawer.stackIndex,
          ...drawer.drawerProps,
          closeOnEscape:
            drawer.drawerProps?.closeOnEscape !== undefined
              ? drawer.drawerProps.closeOnEscape
              : drawers.length === i + 1,
          opened:
            priorityDrawerIndexStack.length > 0 &&
              priorityDrawerIndexStack[priorityDrawerIndexStack.length - 1] !==
              drawer.stackIndex
              ? false
              : drawer.drawerProps?.opened === undefined
                ? true
                : drawer.drawerProps?.opened,
          onClose: () => {
            closeDrawer(drawer.stackIndex);
            drawer.drawerProps?.onClose?.();
          },
          withOverlay: false,
        };

        switch (drawer.type) {
          case "red":
            return <RedDrawer key={i} {...commonDrawerProps} />;

          case "green":
            return <GreenDrawer key={i} {...commonDrawerProps} />;

          case "blue":
            return <BlueDrawer key={i} {...commonDrawerProps} />;

          case "redForm":
            return <RedFormDrawer key={i} {...commonDrawerProps} withOverlay />;

          case "greenForm":
            return (
              <GreenFormDrawer key={i} {...commonDrawerProps} withOverlay />
            );

          case "blueForm":
            return (
              <BlueFormDrawer key={i} {...commonDrawerProps} withOverlay />
            );
        }
      })}
    </>
  );
};
