import { createStore } from "zustand";
import {
  DrawerStore,
  OpenDrawerProps,
  OpenFormDrawerProps,
  Drawer,
  DrawerProps,
  DrawerTypes,
  FormDrawerProps,
  FormDrawerTypes,
} from "./types/storeTypes";

export type CreateDrawerStoreProps = {
  initialDrawers?: Drawer<DrawerTypes>[];
};

const createDrawerStore = ({ initialDrawers = [] }: CreateDrawerStoreProps) =>
  createStore<DrawerStore>((set, get) => {
    function openDrawer<T extends DrawerTypes>({
      index,
      type,
      drawerProps = {} as DrawerProps<T>,
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
      drawerProps = {} as DrawerProps<T>,
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
          updateDrawer({
            index,
            drawerProps: { ...drawerProps, opened: true },
          }),
        0,
      );
    }

    function openFormDrawer<T extends FormDrawerTypes>({
      index,
      type,
      formDrawerProps = {} as FormDrawerProps<T>,
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
      formDrawerProps = {} as FormDrawerProps<T>,
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
      drawerProps?: DrawerProps<T>;
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
      formDrawerProps?: FormDrawerProps<T>;
    }) {
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
      drawers: initialDrawers,
      formDrawers: [],
      actions: {
        openDrawer,
        updateDrawer,
        closeDrawer,
      },
      formActions: {
        openFormDrawer,
        updateFormDrawer,
        closeFormDrawer,
      },
    };
  });

export default createDrawerStore;
