import { DrawerTypes, DrawerProps } from "./drawerTypes";

export * from "./drawerTypes";

export type Drawer<T extends DrawerTypes> = {
  stackIndex: number;
  type: T;
  isPriorityDrawer?: boolean;
  drawerProps?: DrawerProps<T>;
};

export type OpenDrawerProps<T extends DrawerTypes> = {
  stackIndex: number;
  type: T;
  isPriorityDrawer?: boolean;
  drawerProps?: DrawerProps<T>;
};

export type DrawerStore = {
  drawers: Drawer<DrawerTypes>[];
  priorityDrawerIndexStack: number[];

  actions: {
    openDrawer: <T extends DrawerTypes>(args: OpenDrawerProps<T>) => void;
    updateDrawer: <T extends DrawerTypes>(args: {
      stackIndex: number;
      drawerProps?: DrawerProps<T>;
    }) => void;
    closeDrawer: (stackIndex: number) => void;
  };
};
