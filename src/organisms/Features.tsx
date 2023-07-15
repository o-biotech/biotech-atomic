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
        "flex flex-col gap-16 justify-center md:(flex-row gap-8)",
      )}
    >
      {displayElement}
    </div>
  );
}
