import { MantineDrawerProps } from "./storeTypes";

// Custom drawer types

export type FormDrawerRed = {
  type: "red";
  redProp?: string;
  redEntityId?: string;
};

export type FormDrawerGreen = {
  type: "green";
  greenProp?: string;
  greenEntityId?: string;
};

export type FormDrawerBlue = {
  type: "blue";
  blueProp?: string;
  blueEntityId?: string;
};

// --------------------------------------------

export type FormDrawerTypes = "red" | "green" | "blue";

export type FormDrawerCustomProps =
  | FormDrawerRed
  | FormDrawerGreen
  | FormDrawerBlue;

export type ExtractFormDrawerProps<T extends FormDrawerCustomProps["type"]> =
  Extract<FormDrawerCustomProps, { type: T }>;

export type FormDrawerProps<T extends FormDrawerTypes> = MantineDrawerProps &
  Omit<ExtractFormDrawerProps<T>, "type">;
