import { ComponentChildren, JSX } from "preact";
import { classSet } from "../utils/jsx.tsx";
import { DisplayProps, useDisplayChildren } from "../molecules/Display.tsx";

export interface FeaturesProps extends JSX.HTMLAttributes<HTMLDivElement> {
  children?: ComponentChildren | Array<DisplayProps>;
}

export function Features(props: FeaturesProps) {
  const { displayElement } = useDisplayChildren(props.children);

  return (
    <div
      {...props}
      class={classSet(
        props,
        "flex flex-col gap-8 justify-center md:(flex-row)",
      )}
    >
      {displayElement}
    </div>
  );
}
