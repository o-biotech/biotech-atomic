import { ComponentChildren, JSX } from "preact";
import { useEffect, useState } from "preact/hooks";
import {
  Action,
  ActionProps,
  ActionStyleTypes,
  useActionChildren,
} from "../atoms/Action.tsx";
import { ActionGroup } from "./ActionGroup.tsx";
import { ChevronDownIcon } from "../atoms/icons/ChevronDownIcon.tsx";
import { IconStyleTypes } from "../atoms/icons/Icon.tsx";
import { classSet } from "../utils/jsx.tsx";

export enum MenuStyleTypes {
  Popover = 1 << 0,
  Slideout = 1 << 1,
  Responsive = 1 << 2,
}

export interface MenuButtonProps extends JSX.HTMLAttributes<HTMLElement> {
  children?: ComponentChildren | Array<ActionProps>;

  menuStyle?: MenuStyleTypes;

  toggleChildren?: ComponentChildren;
}

export function MenuButton(props: MenuButtonProps) {
  const { nav, navActions } = useActionChildren(props.children);

  const [showMenu, setShowMenu] = useState(false);

  const menuCloseCheck = (eTarget: HTMLDivElement) => {
    setShowMenu(!!eTarget!.closest(".menu-wrapper"));
  };

  const outsideClickHandler = () => {
    const eventHandler = (e: MouseEvent) => {
      menuCloseCheck(e.target as HTMLDivElement);
    };

    window.document.addEventListener("click", eventHandler);

    return () => {
      window.document.removeEventListener(
        "click",
        eventHandler,
      );
    };
  };

  useEffect(outsideClickHandler, []);

  return (
    <div class={classSet(props, "menu-wrapper relative")}>
      <Action
        onClick={() => setShowMenu(!showMenu)}
        class="flex items-center p-2 rounded"
      >
        {props.toggleChildren || (
          <ChevronDownIcon iconStyle={IconStyleTypes.Outline} />
        )}
      </Action>

      {showMenu && (
        <div
          class={classSet(
            undefined,
            "bg-white shadow-md",
            props.menuStyle === MenuStyleTypes.Popover
              ? "absolute right-0 mt-2"
              : undefined,
            props.menuStyle === MenuStyleTypes.Slideout
              ? "fixed top-0 bottom-0 left-0 z-50 w-[80%]"
              : undefined,
            props.menuStyle === MenuStyleTypes.Responsive
              ? "fixed top-0 bottom-0 left-0 z-50 w-[80%] md:absolute md:right-0 md:mt-2 md:top-auto md:bottom-auto md:left-auto md:w-auto"
              : undefined,
          )}
        >
          {nav || (
            <ul class="divide-y divide-gray-200">
              {navActions?.map((action) => (
                <li>
                  <Action
                    actionStyle={ActionStyleTypes.None}
                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    {...action}
                  />
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}
