import { JSX } from "preact";

export enum IconStyleTypes {
  Outline = 1 << 0,
  Solid = 1 << 1,
  Mini = 1 << 2,
}

export interface IconProps extends JSX.HTMLAttributes<SVGElement> {
  iconStyle?: IconStyleTypes;
}
