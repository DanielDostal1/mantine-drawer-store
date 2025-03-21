import useFormDrawerStore from "../formDrawerStore";
import { DefectFormDrawer } from "./formDrawers/DefectFormDrawer";
import { RevisionUnitFormDrawer } from "./formDrawers/RevisionUnitFormDrawer";
import { TechnicalObjectFormDrawer } from "./formDrawers/TechnicalObjectFormDrawer";

export const FormDrawers = () => {
  const { formDrawers, closeFormDrawer } = useFormDrawerStore();

  return (
    <>
      {formDrawers.map((formDrawer, i) => {
        const commonFormDrawerProps = {
          opened:
            formDrawer.drawerProps.opened === undefined
              ? true
              : formDrawer.drawerProps.opened,
          onClose: () => {
            closeFormDrawer(formDrawer.id);
            formDrawer.drawerProps.onClose?.();
          },
          closeOnEscape: formDrawers.length === i + 1,
          ...formDrawer.drawerProps,
          ...formDrawer.customProps,
        };

        switch (formDrawer.type) {
          case "defect":
            return (
              <DefectFormDrawer
                key={formDrawer.id}
                defectId={formDrawer.entityId}
                {...commonFormDrawerProps}
              />
            );

          case "revisionUnit":
            return (
              <RevisionUnitFormDrawer
                key={formDrawer.id}
                revisionUnitId={formDrawer.entityId}
                {...commonFormDrawerProps}
              />
            );

          case "technicalObject":
            return (
              <TechnicalObjectFormDrawer
                key={formDrawer.id}
                technicalObjectId={formDrawer.entityId}
                {...commonFormDrawerProps}
              />
            );
        }
      })}
    </>
  );
};
