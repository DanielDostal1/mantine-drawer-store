import { DrawerProps as MantineDrawerProps } from "@mantine/core";
import { create } from "zustand";

type DrawerProps = Omit<MantineDrawerProps, "opened" | "onClose"> & {
  opened?: boolean;
  onClose?: () => void;
};

type FormDrawerRevisionUnit = {
  type: "revisionUnit";
  customFormProp1: string;
};
type FormDrawerTechnicalObject = {
  type: "technicalObject";
  customFormProp2: string;
};
type FormDrawerDefect = {
  type: "defect";
  customFormProp3: string;
};

type FormDrawerTypes = "revisionUnit" | "technicalObject" | "defect";

type DrawerCustomProps =
  | FormDrawerRevisionUnit
  | FormDrawerTechnicalObject
  | FormDrawerDefect;

type ExtractProps<T extends DrawerCustomProps["type"]> = Extract<
  DrawerCustomProps,
  { type: T }
>;

type Drawer<T extends FormDrawerTypes> = {
  id: string; // Unique identifier
  type: T; // Drawer type (e.g. "revisionUnit", "technicalObject", "inspection")
  entityId?: string; // Id of the entity that the drawer is displaying
  drawerProps: DrawerProps; // Props for the drawer component
  customProps: Omit<ExtractProps<T>, "type">; // Custom props for the drawer
};

type FormDrawerStore = {
  formDrawers: Drawer<FormDrawerTypes>[];

  openFormDrawer: <T extends FormDrawerTypes>({
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

  closeFormDrawer: (id: string) => void; // Close drawer with animation
  removeFormDrawer: (id: string) => void;
  // closeTopDrawer: () => void;
  clearFormDrawers: () => void;
  // getTopDrawer: () => Drawer<DrawerTypes> | null;
};

const useFormDrawerStore = create<FormDrawerStore>((set) => {
  function openFormDrawer<T extends FormDrawerTypes>({
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
    set((state: FormDrawerStore) => ({
      ...state,
      formDrawers: [
        ...state.formDrawers,
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
      () =>
        updateFormDrawer({ id, drawerProps: { ...drawerProps, opened: true } }),
      0,
    );
  }

  function updateFormDrawer({
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
    set((state: FormDrawerStore) => ({
      formDrawers: state.formDrawers.map((formDrawer) =>
        formDrawer.id === id
          ? {
              ...formDrawer,
              entityId: entityId || formDrawer.entityId,
              drawerProps: { ...formDrawer.drawerProps, ...drawerProps },
              customProps: { ...formDrawer.customProps, ...customProps },
            }
          : formDrawer,
      ),
    }));
  }

  function closeFormDrawer(id: string) {
    updateFormDrawer({ id, drawerProps: { opened: false } });
    setTimeout(() => removeFormDrawer(id), 200);
  }

  function removeFormDrawer(id: string) {
    set((state: FormDrawerStore) => ({
      formDrawers: state.formDrawers.filter(
        (formDrawer) => formDrawer.id !== id,
      ),
    }));
  }

  function clearFormDrawers() {
    set({ formDrawers: [] });
  }

  return {
    formDrawers: [],
    openFormDrawer,
    closeFormDrawer,
    removeFormDrawer,
    clearFormDrawers,
  };
});

export default useFormDrawerStore;
