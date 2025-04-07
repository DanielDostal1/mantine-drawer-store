import { DrawerProps as _MantineDrawerProps } from "@mantine/core";

export type MantineDrawerProps = Omit<
  _MantineDrawerProps,
  "opened" | "onClose"
> & {
  opened?: boolean;
  onClose?: () => void;
};

// Custom drawer types

export type DrawerRed = {
  type: "red";
  redProp?: string;
  redEntityId?: string;
};

export type DrawerGreen = {
  type: "green";
  greenProp?: string;
  greenEntityId?: string;
};

export type DrawerBlue = {
  type: "blue";
  blueProp?: string;
  blueEntityId?: string;
};

export type DrawerFormRed = {
  type: "redForm";
  redProp?: string;
  redEntityId?: string;
};

export type DrawerFormGreen = {
  type: "greenForm";
  greenProp?: string;
  greenEntityId?: string;
};

export type DrawerFormBlue = {
  type: "blueForm";
  blueProp?: string;
  blueEntityId?: string;
};

// --------------------------------------------

export type DrawerTypes =
  | "red"
  | "green"
  | "blue"
  | "redForm"
  | "greenForm"
  | "blueForm";

export type DrawerCustomProps =
  | DrawerRed
  | DrawerGreen
  | DrawerBlue
  | DrawerFormRed
  | DrawerFormGreen
  | DrawerFormBlue;

export type ExtractDrawerProps<T extends DrawerCustomProps["type"]> = Extract<
  DrawerCustomProps,
  { type: T }
>;

export type DrawerProps<T extends DrawerTypes> = MantineDrawerProps &
  Omit<ExtractDrawerProps<T>, "type">;
