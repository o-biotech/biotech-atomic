import { ComponentChildren, JSX } from "preact";
import {
  Action,
  ActionProps,
  ActionStyleTypes,
  useActionChildren,
} from "../atoms/Action.tsx";
import { classSet } from "../utils/jsx.tsx";

export interface ActionGroupProps extends JSX.HTMLAttributes<HTMLElement> {
  actionStyle?: ActionStyleTypes;

  children?: ComponentChildren | Array<ActionProps>;
}

export function ActionGroup(props: ActionGroupProps) {
  const { nav, navActions } = useActionChildren(props.children);

  return (
    <nav
      {...props}
      class={classSet(props, "px-2 pt-2 pb-4 flex sm:p-0")}
    >
      {nav ||
        navActions?.map((action) => (
          <Action actionStyle={props.actionStyle} {...action} />
        ))}
    </nav>
  );
}
