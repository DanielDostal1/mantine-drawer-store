import { DrawerProps } from "@mantine/core";
import { create } from "zustand";

type DrawerRevisionUnit = {
  type: "revisionUnit";
  customProp1: string;
};
type DrawerTechnicalObject = {
  type: "technicalObject";
  customProp2: string;
};

type DrawerTypes = "revisionUnit" | "technicalObject";

type DrawerCustomProps = DrawerRevisionUnit | DrawerTechnicalObject;

type ExtractProps<T extends DrawerCustomProps["type"]> = Extract<
  DrawerCustomProps,
  { type: T }
>;

type Drawer<T extends DrawerTypes> = {
  id: string; // Unique identifier
  type: T; // Drawer type (e.g. "revisionUnit", "technicalObject", "inspection")
  entityId?: string; // Id of the entity that the drawer is displaying
  drawerProps: Omit<DrawerProps, "opened" | "onClose">; // opened, onClose, closeOnEscape
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
    drawerProps?: Omit<DrawerProps, "opened" | "onClose">;
    customProps?: Omit<ExtractProps<T>, "type">;
  }) => void;

  closeDrawer: (id: string) => void;
  closeTopDrawer: () => void;
  clearDrawers: () => void;
  getTopDrawer: () => Drawer<DrawerTypes> | null;
};

const useDrawerStore = create<DrawerStore>((set, get) => ({
  drawers: [],

  openDrawer: ({
    id,
    type,
    entityId,
    drawerProps = {},
    customProps = {} as Omit<ExtractProps<typeof type>, "type">,
  }) =>
    set((state: DrawerStore) => ({
      ...state,
      drawers: [
        ...state.drawers,
        { id, type, entityId, drawerProps, customProps },
      ],
    })),

  closeDrawer: (id: string) =>
    set((state: DrawerStore) => ({
      drawers: state.drawers.filter((drawer) => drawer.id !== id),
    })),

  closeTopDrawer: () =>
    set((state: DrawerStore) => ({
      drawers: state.drawers.slice(0, -1),
    })),

  clearDrawers: () => set({ drawers: [] }),

  getTopDrawer: () => get().drawers[get().drawers.length - 1] || null,
}));

export default useDrawerStore;
