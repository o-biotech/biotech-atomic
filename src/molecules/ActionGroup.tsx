import { ComponentChildren, JSX } from "preact";
import {
  Action,
  ActionProps,
  ActionStyleTypes,
  useActionChildren,
} from "../atoms/Action.tsx";

export interface ActionGroupProps extends JSX.HTMLAttributes<HTMLElement> {
  actionStyle?: ActionStyleTypes;

  children?: ComponentChildren | Array<ActionProps>;
}

export function ActionGroup(props: ActionGroupProps) {
  const { nav, navActions } = useActionChildren(props.children);

  return (
    <nav
      {...props}
      class={["px-2 pt-2 pb-4 sm:flex sm:p-0", props.class].filter((c) => c)
        .join(" ")}
    >
      {nav ||
        navActions?.map((action) => (
          <Action actionStyle={props.actionStyle} {...action} />
        ))}
    </nav>
  );
}