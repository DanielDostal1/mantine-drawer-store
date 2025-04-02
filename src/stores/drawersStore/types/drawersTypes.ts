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

// --------------------------------------------

export type DrawerTypes = "red" | "green" | "blue";

export type DrawerCustomProps = DrawerRed | DrawerGreen | DrawerBlue;

export type ExtractDrawerProps<T extends DrawerCustomProps["type"]> = Extract<
  DrawerCustomProps,
  { type: T }
>;

export type DrawerProps<T extends DrawerTypes> = MantineDrawerProps &
  Omit<ExtractDrawerProps<T>, "type">;
