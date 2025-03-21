import useDrawerStore from "../drawerStore";
import { DefectDrawer } from "./DefectDrawer";
import { RevisionUnitDrawer } from "./RevisionUnitDrawer";
import { TechnicalObjectDrawer } from "./TechnicalObjectDrawer";

export const Drawers = () => {
  const { drawers, closeDrawer } = useDrawerStore();

  return (
    <>
      {drawers.map((drawer, i) => {
        switch (drawer.type) {
          case "defect":
            return (
              <DefectDrawer
                key={drawer.id}
                defectId={drawer.entityId}
                opened={drawer.drawerProps.opened || true}
                onClose={() => {
                  closeDrawer(drawer.id);
                  drawer.drawerProps.onClose?.();
                }}
                closeOnEscape={drawers.length === i + 1}
                {...drawer.drawerProps}
                {...drawer.customProps}
              />
            );
          case "revisionUnit":
            return (
              <RevisionUnitDrawer
                key={drawer.id}
                revisionUnitId={drawer.entityId}
                opened={true}
                onClose={() => closeDrawer(drawer.id)}
                closeOnEscape={drawers.length === i + 1}
                {...drawer.drawerProps}
                {...drawer.customProps}
              />
            );
          case "technicalObject":
            return (
              <TechnicalObjectDrawer
                key={drawer.id}
                technicalObjectId={drawer.entityId}
                opened={true}
                onClose={() => closeDrawer(drawer.id)}
                closeOnEscape={drawers.length === i + 1}
                {...drawer.drawerProps}
                {...drawer.customProps}
              />
            );
        }
      })}
    </>
  );
};
