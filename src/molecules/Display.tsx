import { ComponentChildren, JSX } from "preact";
import { ActionGroup } from "./ActionGroup.tsx";
import { classSet } from "../utils/jsx.tsx";

export enum DisplayStyleTypes {
  Left = 1 << 0,
  Center = 1 << 1,
  Right = 1 << 2,
  None = 1 << 3,
}

export interface DisplayProps extends JSX.HTMLAttributes<HTMLDivElement> {
  children?: ComponentChildren;

  displayStyle?: DisplayStyleTypes;

  title?: string;
}

export function Display(props: DisplayProps) {
  const displayStyle = props.displayStyle || DisplayStyleTypes.None;

  return (
    <div
      {...props}
      class={classSet(
        props,
        "flex",
        (displayStyle & DisplayStyleTypes.Center) ===
            DisplayStyleTypes.Center
          ? "justify-center items-center text-center"
          : undefined,
        (displayStyle & DisplayStyleTypes.Left) ===
            DisplayStyleTypes.Left
          ? "justify-start items-start text-left"
          : undefined,
        (displayStyle & DisplayStyleTypes.Right) ===
            DisplayStyleTypes.Right
          ? "justify-end items-end text-right"
          : undefined,
      )}
    >
      {props.title && (
        <h1 class="text-4xl inline-block font-bold">{props.title}</h1>
      )}

      {props.children}
    </div>
  );
}
