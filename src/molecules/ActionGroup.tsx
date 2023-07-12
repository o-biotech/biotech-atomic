import { ComponentChildren, JSX } from "preact";
import { Action, ActionOptions } from "../atoms/Action.tsx";

export interface ActionGroupProps extends JSX.HTMLAttributes<HTMLElement> {
  children?: ComponentChildren | Array<ActionOptions>;
}

export function ActionGroup(props: ActionGroupProps) {
  const nav = props.children instanceof Array<ActionOptions>
    ? undefined
    : props.children as ComponentChildren;

  const navActions = props.children instanceof Array<ActionOptions>
    ? props.children as Array<ActionOptions>
    : undefined;

  return (
    <nav class="px-2 pt-2 pb-4 sm:flex sm:p-0">
      {nav ||
        navActions?.map((action) => <Action {...action} />)}
    </nav>
  );
}
