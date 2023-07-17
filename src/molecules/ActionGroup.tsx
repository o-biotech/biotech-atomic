import { ComponentChildren, JSX } from "preact";
import {
  Action,
  ActionProps,
  ActionStyleTypes,
  useActionChildren,
} from "../atoms/Action.tsx";
import { classSet } from "../utils/jsx.tsx";
import { MenuButton, MenuButtonStyleTypes } from "./MenuButton.tsx";

export interface ActionGroupProps extends JSX.HTMLAttributes<HTMLElement> {
  actionStyle?: ActionStyleTypes;

  children?: ComponentChildren | Array<ActionProps>;

  responsive?: boolean;

  toggleChildren?: ComponentChildren;
}

export function ActionGroup(props: ActionGroupProps) {
  const { nav, navActions } = useActionChildren(props.children);

  const children: ComponentChildren = nav ||
    navActions?.map((action) => (
      <Action actionStyle={props.actionStyle} {...action} />
    ));

  let render = (
    <nav
      {...props}
      class={classSet(props, "px-2 pt-2 pb-4 flex")}
    >
      {children}
    </nav>
  );

  if (props.responsive) {
    render = (
      <>
        <MenuButton
          class="md:hidden"
          menuStyle={MenuButtonStyleTypes.Responsive}
          toggleChildren={props.toggleChildren}
        >
          {children}
        </MenuButton>

        <nav
          {...props}
          class={classSet(
            props,
            "px-2 pt-2 pb-4 hidden md:flex",
          )}
        >
          {children}
        </nav>
      </>
    );
  }

  return render;
}
