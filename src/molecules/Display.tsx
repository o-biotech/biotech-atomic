import { ComponentChildren, JSX } from "preact";
import { ActionGroup } from "./ActionGroup.tsx";
import { classSet } from "../utils/jsx.tsx";

export enum DisplayStyleTypes {
  Top = 1 << 0,
  Center = 1 << 1,
  Bottom = 1 << 2,
  Large = 1 << 3,
  None = 1 << 4,
}

export type DisplayProps = JSX.HTMLAttributes<HTMLDivElement> & {
  displayStyle?: DisplayStyleTypes;

  title?: string | ComponentChildren;
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

  const displayDetails = children instanceof Array<DisplayProps>
    ? children as Array<DisplayProps>
    : undefined;

  const displayElement = display || (
    <>{displayDetails?.map((dd) => <Display {...dd} />)}</>
  );

  return { display, displayDetails, displayElement };
}

export function Display(props: DisplayProps) {
  const displayStyle = props.displayStyle || DisplayStyleTypes.None;

  const displayTitle = typeof props.title === "string"
    ? (
      <h1
        class={classSet(
          undefined,
          "font-bold",
          (displayStyle & DisplayStyleTypes.Large) ===
              DisplayStyleTypes.Large
            ? "text-3xl md:text-4xl inline-block"
            : "text-2xl md:text-3xl inline-block",
        )}
      >
        {props.title}
      </h1>
    )
    : props.title as ComponentChildren;

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
      {props.title}

      {props.children}
    </div>
  );
}
