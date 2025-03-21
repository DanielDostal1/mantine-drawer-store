import { DrawerProps as MantineDrawerProps } from "@mantine/core";
import { create } from "zustand";

type DrawerProps = Omit<MantineDrawerProps, "opened" | "onClose"> & {
  opened?: boolean;
  onClose?: () => void;
};

type DrawerRevisionUnit = {
  type: "revisionUnit";
  customProp1: string;
};
type DrawerTechnicalObject = {
  type: "technicalObject";
  customProp2: string;
};
type DrawerDefect = {
  type: "defect";
  customProp3: string;
};

type DrawerTypes = "revisionUnit" | "technicalObject" | "defect";

type DrawerCustomProps =
  | DrawerRevisionUnit
  | DrawerTechnicalObject
  | DrawerDefect;

type ExtractProps<T extends DrawerCustomProps["type"]> = Extract<
  DrawerCustomProps,
  { type: T }
>;

type Drawer<T extends DrawerTypes> = {
  id: string; // Unique identifier
  type: T; // Drawer type (e.g. "revisionUnit", "technicalObject", "inspection")
  entityId?: string; // Id of the entity that the drawer is displaying
  drawerProps: DrawerProps; // Props for the drawer component
  customProps: Omit<ExtractProps<T>, "type">; // Custom props for the drawer
};

type DrawerStore = {
  drawers: Drawer<DrawerTypes>[];

  openDrawer: <T extends DrawerTypes>({
    id,
    type,
    entityId,
    drawerProps,
    customProps,
  }: {
    id: string;
    type: T;
    entityId: string;
    drawerProps?: DrawerProps;
    customProps?: Omit<ExtractProps<T>, "type">;
  }) => void;

  closeDrawer: (id: string) => void;
  closeTopDrawer: () => void;
  clearDrawers: () => void;
  getTopDrawer: () => Drawer<DrawerTypes> | null;
};

const useDrawerStore = create<DrawerStore>((set, get) => {
  function openDrawer<T extends DrawerTypes>({
    id,
    type,
    entityId,
    drawerProps = {},
    customProps = {} as Omit<ExtractProps<typeof type>, "type">,
  }: {
    id: string;
    type: T;
    entityId: string;
    drawerProps?: Omit<DrawerProps, "opened" | "onClose">;
    customProps?: Omit<ExtractProps<T>, "type">;
  }) {
    set((state: DrawerStore) => ({
      ...state,
      drawers: [
        ...state.drawers,
        {
          id,
          type,
          entityId,
          drawerProps: { ...drawerProps, opened: false },
          customProps,
        },
      ],
    }));
    setTimeout(
      () => updateDrawer({ id, drawerProps: { ...drawerProps, opened: true } }),
      0,
    );
  }

  function updateDrawer({
    id,
    drawerProps,
  }: {
    id: string;
    drawerProps: DrawerProps;
  }) {
    set((state: DrawerStore) => ({
      drawers: state.drawers.map((drawer) =>
        drawer.id === id ? { ...drawer, drawerProps } : drawer,
      ),
    }));
  }

  function closeDrawer(id: string) {
    updateDrawer({ id, drawerProps: { opened: false } });
    setTimeout(() => removeDrawer(id), 200);
  }

  function removeDrawer(id: string) {
    set((state: DrawerStore) => ({
      drawers: state.drawers.filter((drawer) => drawer.id !== id),
    }));
  }

  function closeTopDrawer() {
    set((state: DrawerStore) => ({
      drawers: state.drawers.slice(0, -1),
    }));
  }

  function clearDrawers() {
    set({ drawers: [] });
  }

  function getTopDrawer() {
    return get().drawers[get().drawers.length - 1] || null;
  }

  return {
    drawers: [],
    openDrawer,
    closeDrawer,
    closeTopDrawer,
    clearDrawers,
    getTopDrawer,
  };
});

export default useDrawerStore;
