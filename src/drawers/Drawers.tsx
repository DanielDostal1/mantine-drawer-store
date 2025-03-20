import useDrawerStore from "../drawerStore";
import { RevisionUnitDrawer } from "./RevisionUnitDrawer";
import { TechnicalObjectDrawer } from "./TechnicalObjectDrawer";

export const Drawers = () => {
  const { drawers, closeDrawer } = useDrawerStore();

  return (
    <>
      {drawers.map((drawer) => {
        switch (drawer.type) {
          case "revisionUnit":
            return (
              <RevisionUnitDrawer
                revisionUnitId={drawer.entityId}
                opened={true}
                onClose={() => closeDrawer(drawer.id)}
                {...drawer.drawerProps}
                {...drawer.customProps}
              />
            );
          case "technicalObject":
            return (
              <TechnicalObjectDrawer
                technicalObjectId={drawer.entityId}
                opened={true}
                onClose={() => closeDrawer(drawer.id)}
                {...drawer.drawerProps}
                {...drawer.customProps}
              />
            );
        }
      })}
    </>
  );
};
