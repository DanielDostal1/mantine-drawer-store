import { DrawerProps } from "@mantine/core";
import { BlueDrawer } from "../../drawers/BlueDrawer";
import { BlueFormDrawer } from "../../drawers/formDrawers/BlueFormDrawer";
import { GreenFormDrawer } from "../../drawers/formDrawers/GreenFormDrawer";
import { RedFormDrawer } from "../../drawers/formDrawers/RedFormDrawer";
import { GreenDrawer } from "../../drawers/GreenDrawer";
import { RedDrawer } from "../../drawers/RedDrawer";
import { useDrawers, useFormDrawers, useDrawerStore } from "./hooks";

export const DrawerStack = () => {
  const drawers = useDrawers();
  const formDrawers = useFormDrawers();

  const closeDrawer = useDrawerStore((state) => state.actions.closeDrawer);
  const closeFormDrawer = useDrawerStore(
    (state) => state.formActions.closeFormDrawer,
  );

  return (
    <>
      {formDrawers.map((formDrawer, i) => {
        const commonFormDrawerProps = {
          position: "right" as DrawerProps["position"],
          index: formDrawer.index,
          ...formDrawer.formDrawerProps,
          closeOnEscape:
            formDrawer.formDrawerProps?.closeOnEscape !== undefined
              ? formDrawer.formDrawerProps.closeOnEscape
              : formDrawers.length === i + 1,
          opened:
            formDrawer.formDrawerProps?.opened === undefined
              ? true
              : formDrawer.formDrawerProps?.opened,
          onClose: () => {
            closeFormDrawer(formDrawer.index);
            formDrawer.formDrawerProps?.onClose?.();
          },
          withOverlay: false,
        };

        switch (formDrawer.type) {
          case "red":
            return <RedFormDrawer key={i} {...commonFormDrawerProps} />;
          case "green":
            return <GreenFormDrawer key={i} {...commonFormDrawerProps} />;
          case "blue":
            return <BlueFormDrawer key={i} {...commonFormDrawerProps} />;
        }
      })}

      {drawers.map((drawer, i) => {
        const commonDrawerProps = {
          position: "right" as DrawerProps["position"],
          index: drawer.index,
          ...drawer.drawerProps,
          closeOnEscape:
            drawer.drawerProps?.closeOnEscape !== undefined
              ? drawer.drawerProps.closeOnEscape
              : drawers.length === i + 1,
          opened:
            formDrawers.length > 0
              ? false
              : drawer.drawerProps?.opened === undefined
                ? true
                : drawer.drawerProps?.opened,
          onClose: () => {
            closeDrawer(drawer.index);
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
        }
      })}
    </>
  );
};
