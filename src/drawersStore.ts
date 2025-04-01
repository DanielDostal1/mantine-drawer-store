import { DrawerProps as MantineDrawerProps } from "@mantine/core";
import { create } from "zustand";

type DrawerProps = Omit<MantineDrawerProps, "opened" | "onClose"> & {
  opened?: boolean;
  onClose?: () => void;
  onOpen?: () => void;
};

type DrawerRed = {
  type: "red";
  redProp?: string;
  redEntityId?: string;
};

type DrawerGreen = {
  type: "green";
  greenProp?: string;
  greenEntityId?: string;
};

type DrawerBlue = {
  type: "blue";
  blueProp?: string;
  blueEntityId?: string;
};

type DrawerTypes = "red" | "green" | "blue";
type FormDrawerTypes = "red" | "green" | "blue";

type DrawerCustomProps = DrawerRed | DrawerGreen | DrawerBlue;
type FormDrawerCustomProps = DrawerRed | DrawerGreen | DrawerBlue;

type ExtractDrawerProps<T extends DrawerCustomProps["type"]> = Extract<
  DrawerCustomProps,
  { type: T }
>;
type ExtractFormDrawerProps<T extends FormDrawerCustomProps["type"]> = Extract<
  FormDrawerCustomProps,
  { type: T }
>;

type CombinedDrawerProps<T extends DrawerTypes> = DrawerProps &
  Omit<ExtractDrawerProps<T>, "type">;
type CombinedFormDrawerProps<T extends FormDrawerTypes> = DrawerProps &
  Omit<ExtractFormDrawerProps<T>, "type">;

type Drawer<T extends DrawerTypes> = {
  index: number;
  type: T;
  drawerProps?: CombinedDrawerProps<T>;
};

type FormDrawer<T extends FormDrawerTypes> = {
  index: number;
  type: T;
  formDrawerProps?: CombinedFormDrawerProps<T>;
};

type OpenDrawerProps<T extends DrawerTypes> = {
  index: number;
  type: T;
  drawerProps?: CombinedDrawerProps<T>;
};
type OpenFormDrawerProps<T extends FormDrawerTypes> = {
  index: number;
  type: T;
  formDrawerProps?: CombinedFormDrawerProps<T>;
};

type DrawerStore = {
  drawers: Drawer<DrawerTypes>[];
  formDrawers: FormDrawer<FormDrawerTypes>[];
  openDrawer: <T extends DrawerTypes>(args: OpenDrawerProps<T>) => void;
  updateDrawer: <T extends DrawerTypes>(args: {
    index: number;
    drawerProps?: CombinedDrawerProps<T>;
  }) => void;
  closeDrawer: (index: number) => void;
  openFormDrawer: <T extends FormDrawerTypes>(
    args: OpenFormDrawerProps<T>,
  ) => void;
  updateFormDrawer: <T extends FormDrawerTypes>(args: {
    index: number;
    formDrawerProps?: CombinedFormDrawerProps<T>;
  }) => void;
  closeFormDrawer: (index: number) => void;
};

const useDrawerStore = create<DrawerStore>((set, get) => {
  function openDrawer<T extends DrawerTypes>({
    index,
    type,
    drawerProps = {} as CombinedDrawerProps<T>,
  }: OpenDrawerProps<T>) {
    const drawers = get().drawers;
    if (drawers.length > index) {
      if (drawers[index].type === type) {
        updateDrawer({ index, drawerProps: { ...drawerProps } });
        closeDrawer(index + 1);
        return;
      }
    }
    closeDrawer(index);
    setTimeout(() => _openDrawer({ index, type, drawerProps }), 200);
  }

  function _openDrawer<T extends DrawerTypes>({
    index,
    type,
    drawerProps = {} as CombinedDrawerProps<T>,
  }: OpenDrawerProps<T>) {
    set((state: DrawerStore) => ({
      ...state,
      drawers: [
        ...state.drawers,
        {
          index,
          type,
          drawerProps: { ...drawerProps, opened: false },
        },
      ],
    }));
    setTimeout(
      () =>
        updateDrawer({ index, drawerProps: { ...drawerProps, opened: true } }),
      0,
    );
  }

  function openFormDrawer<T extends FormDrawerTypes>({
    index,
    type,
    formDrawerProps = {} as CombinedFormDrawerProps<T>,
  }: OpenFormDrawerProps<T>) {
    const formDrawers = get().formDrawers;
    if (formDrawers.length > index) {
      if (formDrawers[index].type === type) {
        updateFormDrawer({ index, formDrawerProps });
        closeFormDrawer(index + 1);
        return;
      }
    }
    closeFormDrawer(index);
    setTimeout(() => _openFormDrawer({ index, type, formDrawerProps }), 200);
  }

  function _openFormDrawer<T extends FormDrawerTypes>({
    index,
    type,
    formDrawerProps = {} as CombinedFormDrawerProps<T>,
  }: OpenFormDrawerProps<T>) {
    set((state: DrawerStore) => ({
      ...state,
      formDrawers: [
        ...state.formDrawers,
        {
          index,
          type,
          formDrawerProps: { ...formDrawerProps, opened: false },
        },
      ],
    }));
    setTimeout(
      () =>
        updateFormDrawer({
          index,
          formDrawerProps: { ...formDrawerProps, opened: true },
        }),
      0,
    );
  }

  function updateDrawer<T extends DrawerTypes>({
    index,
    drawerProps,
  }: {
    index: number;
    drawerProps?: CombinedDrawerProps<T>;
  }) {
    set((state: DrawerStore) => ({
      drawers: state.drawers.map((drawer, i) =>
        i === index
          ? {
              ...drawer,
              drawerProps: { ...drawer.drawerProps, ...drawerProps },
            }
          : drawer,
      ),
    }));
  }

  function updateFormDrawer<T extends FormDrawerTypes>({
    index,
    formDrawerProps,
  }: {
    index: number;
    formDrawerProps?: CombinedFormDrawerProps<T>;
  }) {
    console.log("updating at index", index, get().formDrawers);
    set((state: DrawerStore) => ({
      formDrawers: state.formDrawers.map((formDrawer, i) =>
        i === index
          ? {
              ...formDrawer,
              formDrawerProps: {
                ...formDrawer.formDrawerProps,
                ...formDrawerProps,
              },
            }
          : formDrawer,
      ),
    }));
  }

  function closeDrawer(index: number) {
    const drawers = get().drawers;
    for (let i = index; i < drawers.length; i++) {
      updateDrawer({ index: i, drawerProps: { opened: false } });
      setTimeout(() => _removeDrawer(i), 200);
    }
  }

  function _removeDrawer(index: number) {
    set((state) => ({
      drawers: state.drawers.filter((_, i) => index !== i),
    }));
  }

  function closeFormDrawer(index: number) {
    const forms = get().formDrawers;
    for (let i = index; i < forms.length; i++) {
      updateFormDrawer({ index: i, formDrawerProps: { opened: false } });
      setTimeout(() => _removeFormDrawer(i), 200);
    }
  }

  function _removeFormDrawer(index: number) {
    set((state) => ({
      formDrawers: state.formDrawers.filter((_, i) => index !== i),
    }));
  }

  return {
    drawers: [],
    formDrawers: [],
    openDrawer,
    updateDrawer,
    closeDrawer,
    openFormDrawer,
    updateFormDrawer,
    closeFormDrawer,
  };
});

export default useDrawerStore;
