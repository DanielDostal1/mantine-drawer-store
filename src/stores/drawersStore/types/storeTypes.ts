import { DrawerTypes, DrawerProps } from "./drawersTypes";
import { FormDrawerTypes, FormDrawerProps } from "./formDrawersTypes";

export * from "./drawersTypes";
export * from "./formDrawersTypes";

export type Drawer<T extends DrawerTypes> = {
  index: number;
  type: T;
  drawerProps?: DrawerProps<T>;
};

export type FormDrawer<T extends FormDrawerTypes> = {
  index: number;
  type: T;
  formDrawerProps?: FormDrawerProps<T>;
};

export type OpenDrawerProps<T extends DrawerTypes> = {
  index: number;
  type: T;
  drawerProps?: DrawerProps<T>;
};
export type OpenFormDrawerProps<T extends FormDrawerTypes> = {
  index: number;
  type: T;
  formDrawerProps?: FormDrawerProps<T>;
};

export type DrawerStore = {
  drawers: Drawer<DrawerTypes>[];
  formDrawers: FormDrawer<FormDrawerTypes>[];

  actions: {
    openDrawer: <T extends DrawerTypes>(args: OpenDrawerProps<T>) => void;
    updateDrawer: <T extends DrawerTypes>(args: {
      index: number;
      drawerProps?: DrawerProps<T>;
    }) => void;
    closeDrawer: (index: number) => void;
  };

  formActions: {
    openFormDrawer: <T extends FormDrawerTypes>(
      args: OpenFormDrawerProps<T>,
    ) => void;
    updateFormDrawer: <T extends FormDrawerTypes>(args: {
      index: number;
      formDrawerProps?: FormDrawerProps<T>;
    }) => void;
    closeFormDrawer: (index: number) => void;
  };
};
