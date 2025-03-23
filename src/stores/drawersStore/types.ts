import { DrawerProps } from "@mantine/core";

export type CommonDrawerProps = DrawerProps & {};

export type DrawerStoreActions = {
  openDrawer: () => void;
  closeDrawer: () => void;
  removeDrawer: () => void;
  clearDrawers: () => void;
};

export type DrawerStore = {
  drawers: CommonDrawerProps[];
  actions: DrawerStoreActions;
};
