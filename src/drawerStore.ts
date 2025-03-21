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

  closeDrawer: (id: string) => void; // Close drawer with animation
  removeDrawer: (id: string) => void;
  // closeTopDrawer: () => void;
  clearDrawers: () => void;
  // getTopDrawer: () => Drawer<DrawerTypes> | null;
};

const useDrawerStore = create<DrawerStore>((set) => {
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
    entityId,
    drawerProps,
    customProps,
  }: {
    id: string;
    entityId?: string;
    drawerProps?: DrawerProps;
    customProps?: DrawerCustomProps;
  }) {
    set((state: DrawerStore) => ({
      drawers: state.drawers.map((drawer) =>
        drawer.id === id
          ? {
              ...drawer,
              entityId: entityId || drawer.entityId,
              drawerProps: { ...drawer.drawerProps, ...drawerProps },
              customProps: { ...drawer.customProps, ...customProps },
            }
          : drawer,
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

  function clearDrawers() {
    set({ drawers: [] });
  }

  return {
    drawers: [],
    openDrawer,
    closeDrawer,
    removeDrawer,
    clearDrawers,
  };
});

export default useDrawerStore;
