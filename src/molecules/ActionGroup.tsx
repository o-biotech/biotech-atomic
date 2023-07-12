import { ComponentChildren, JSX } from "preact";
import { Action, ActionProps, ActionStyleTypes } from "../atoms/Action.tsx";

export interface ActionGroupProps extends JSX.HTMLAttributes<HTMLElement> {
  actionStyle?: ActionStyleTypes;

  children?: ComponentChildren | Array<ActionProps>;
}

export function ActionGroup(props: ActionGroupProps) {
  const nav = props.children instanceof Array<ActionProps>
    ? undefined
    : props.children as ComponentChildren;

  const navActions = props.children instanceof Array<ActionProps>
    ? props.children as Array<ActionProps>
    : undefined;

  return (
    <nav {...props} class="px-2 pt-2 pb-4 sm:flex sm:p-0">
      {nav ||
        navActions?.map((action) => (
          <Action actionStyle={props.actionStyle} {...action} />
        ))}
    </nav>
  );
}
