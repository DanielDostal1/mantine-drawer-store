import { useEffect } from "react";
import { DrawerProvider } from "./DrawerProvider";
import { useDrawerActions } from "./hooks";
// import { Drawer, DrawerProps } from "@mantine/core";

const Component = () => {
  const { openDrawer, closeDrawer } = useDrawerActions();

  useEffect(() => {
    openDrawer();
    return () => closeDrawer();
  }, [closeDrawer, openDrawer]);

  return null;
};

export const Container = () => {
  return (
    <DrawerProvider>
      <Component />
    </DrawerProvider>
  );
};

// -----------------------------------------------------------------------------------------

// type RevisionUnitDetailActions = {
//   onEdit?: (revisionUnitId: string) => void;
//   onDelete?: (revisionUnitId: string) => void;
// };

// type RevisionUnitDetailProps = {
//   revisionUnitId: string;
//   actions?: RevisionUnitDetailActions;
// };

// const RevisionUnitDetailDrawer = ({
//   opened,
//   onClose,
//   closeOnEscape,
//   revisionUnitId,
//   actions,
// }: DrawerProps & RevisionUnitDetailProps) => {
//   return <Drawer opened={opened} onClose={onClose} />;
// };
