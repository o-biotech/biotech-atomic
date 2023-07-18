import { ComponentChildren, JSX } from "preact";
import { MenuButton, MenuButtonStyleTypes } from "./MenuButton.tsx";
import { MenuIcon } from "../atoms/icons/MenuIcon.tsx";
import { IconStyleTypes } from "../atoms/icons/Icon.tsx";
import { classSet } from "../utils/jsx.tsx";

export interface ResponsiveSetProps extends JSX.HTMLAttributes<HTMLElement> {
  toggleChildren?: ComponentChildren;
}

export function ResponsiveSet(props: ResponsiveSetProps) {
  return (
    <>
      <MenuButton
        class="md:hidden"
        menuStyle={MenuButtonStyleTypes.Responsive}
        toggleChildren={props.toggleChildren || (
          <MenuIcon iconStyle={IconStyleTypes.Outline} />
        )}
      >
        {props.children}
      </MenuButton>

      <span {...props} class={classSet(props, "hidden md:flex")}>
        {props.children}
      </span>
    </>
  );
}
