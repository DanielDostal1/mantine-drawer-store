import { createStore } from "zustand";
import {
  DrawerStore,
  OpenDrawerProps,
  Drawer,
  DrawerProps,
  DrawerTypes,
} from "./types/storeTypes";

export type CreateDrawerStoreProps = {
  initialDrawers?: Drawer<DrawerTypes>[];
};

const createDrawerStore = ({ initialDrawers = [] }: CreateDrawerStoreProps) =>
  createStore<DrawerStore>((set, get) => {
    function openDrawer<T extends DrawerTypes>({
      stackIndex,
      type,
      isPriorityDrawer = false,
      drawerProps = {} as DrawerProps<T>,
    }: OpenDrawerProps<T>) {
      const drawers = get().drawers;
      if (drawers.length > stackIndex) {
        if (drawers[stackIndex].type === type) {
          updateDrawer({
            stackIndex,
            drawerProps: { ...drawerProps },
          });
          closeDrawer(stackIndex + 1);
          return;
        }
      }
      closeDrawer(stackIndex); // Close all drawers after the current one
      _openDrawer({ stackIndex, type, isPriorityDrawer, drawerProps });
    }

    function _openDrawer<T extends DrawerTypes>({
      stackIndex,
      type,
      isPriorityDrawer = false,
      drawerProps = {} as DrawerProps<T>,
    }: OpenDrawerProps<T>) {
      if (isPriorityDrawer) {
        set({
          priorityDrawerIndexStack: [
            ...get().priorityDrawerIndexStack,
            stackIndex,
          ],
        });
      }

      set((state: DrawerStore) => ({
        ...state,
        drawers: [
          ...state.drawers,
          {
            stackIndex,
            type,
            isPriorityDrawer,
            drawerProps: { ...drawerProps, opened: false },
          },
        ],
      }));
      setTimeout(
        () =>
          updateDrawer({
            stackIndex,
            drawerProps: { ...drawerProps, opened: true },
          }),
        0,
      );
    }

    function updateDrawer<T extends DrawerTypes>({
      stackIndex,
      drawerProps,
    }: {
      stackIndex: number;
      drawerProps?: DrawerProps<T>;
    }) {
      set((state: DrawerStore) => ({
        drawers: state.drawers.map((drawer, i) =>
          i === stackIndex
            ? {
              ...drawer,
              drawerProps: { ...drawer.drawerProps, ...drawerProps },
            }
            : drawer,
        ),
      }));
    }

    function closeDrawer(stackIndex: number) {
      const drawers = get().drawers;
      for (let i = stackIndex; i < drawers.length; i++) {
        updateDrawer({ stackIndex: i, drawerProps: { opened: false } });
        setTimeout(() => _removeDrawer(i), 200); // Delay removal to allow closing animation
      }
    }

    function _removeDrawer(stackIndex: number) {
      set((state) => ({
        drawers: state.drawers.filter((_, i) => stackIndex !== i),
        priorityDrawerIndexStack: state.priorityDrawerIndexStack.filter(
          (index) => index !== stackIndex,
        ),
      }));
    }

    return {
      drawers: initialDrawers,
      priorityDrawerIndexStack: [],
      actions: {
        openDrawer,
        updateDrawer,
        closeDrawer,
      },
    };
  });

export default createDrawerStore;
