import { ComponentChildren, JSX } from "preact";
import { ActionGroup } from "./ActionGroup.tsx";
import { classSet } from "../utils/jsx.tsx";

export enum DisplayStyleTypes {
  Top = 1 << 0,
  Center = 1 << 1,
  Bottom = 1 << 2,
  None = 1 << 3,
}

export type DisplayProps = JSX.HTMLAttributes<HTMLDivElement> & {
  displayStyle?: DisplayStyleTypes;

  title?: string;
};

export function useDisplayChildren(
  children: ComponentChildren | Array<DisplayProps>,
): {
  display: ComponentChildren;
  displayDetails: Array<DisplayProps> | undefined;
  displayElement: ComponentChildren;
} {
  const display = children instanceof Array<DisplayProps>
    ? undefined
    : children as ComponentChildren;

  console.log(display);

  const displayDetails = children instanceof Array<DisplayProps>
    ? children as Array<DisplayProps>
    : undefined;

  console.log(displayDetails);

  const displayElement = display || (
    <>{displayDetails?.map((dd) => <Display {...dd} />)}</>
  );

  console.log(displayElement);

  return { display, displayDetails, displayElement };
}

export function Display(props: DisplayProps) {
  const displayStyle = props.displayStyle || DisplayStyleTypes.None;

  return (
    <div
      {...props}
      class={classSet(
        props,
        "flex flex-col",
        (displayStyle & DisplayStyleTypes.Center) ===
            DisplayStyleTypes.Center
          ? "justify-center items-center"
          : undefined,
        (displayStyle & DisplayStyleTypes.Top) ===
            DisplayStyleTypes.Top
          ? "justify-start items-start"
          : undefined,
        (displayStyle & DisplayStyleTypes.Bottom) ===
            DisplayStyleTypes.Bottom
          ? "justify-end items-end"
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
