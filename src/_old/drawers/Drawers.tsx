import useDrawerStore from "../_drawerStoree";
import useFormDrawerStore from "../formDrawerStore";
import {
  DefectDrawer,
  RevisionUnitDrawer,
  TechnicalObjectDrawer,
} from "./detailDrawers";

export const Drawers = () => {
  const { drawers, closeDrawer } = useDrawerStore();
  const { formDrawers } = useFormDrawerStore();

  return (
    <>
      {drawers.map((drawer, i) => {
        const commonDrawerProps = {
          ...drawer.drawerProps,
          ...drawer.customProps,
          closeOnEscape:
            drawer.drawerProps.closeOnEscape !== undefined
              ? drawer.drawerProps.closeOnEscape
              : drawers.length === i + 1,
          opened:
            formDrawers.length > 0
              ? false
              : drawer.drawerProps.opened === undefined
                ? true
                : drawer.drawerProps.opened,
          onClose: () => {
            closeDrawer(drawer.id);
            drawer.drawerProps.onClose?.();
          },
        };

        switch (drawer.type) {
          case "defect":
            return (
              <DefectDrawer
                key={drawer.id}
                defectId={drawer.entityId}
                {...commonDrawerProps}
              />
            );

          case "revisionUnit":
            return (
              <RevisionUnitDrawer
                key={drawer.id}
                revisionUnitId={drawer.entityId}
                {...commonDrawerProps}
              />
            );

          case "technicalObject":
            return (
              <TechnicalObjectDrawer
                key={drawer.id}
                technicalObjectId={drawer.entityId}
                {...commonDrawerProps}
              />
            );
        }
      })}
    </>
  );
};
