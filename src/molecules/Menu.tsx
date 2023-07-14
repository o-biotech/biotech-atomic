import { ComponentChildren, JSX } from "preact";
import { useSignal } from "@preact/signals";
import {
  Action,
  ActionProps,
  ActionStyleTypes,
  useActionChildren,
} from "../atoms/Action.tsx";
import { ActionGroup } from "./ActionGroup.tsx";
import { ChevronDownIcon } from "../atoms/icons/ChevronDownIcon.tsx";
import { IconStyleTypes } from "../atoms/icons/Icon.tsx";

export enum MenuStyleTypes {
  Popover = 1 << 0,
  Slideout = 1 << 1,
  Responsive = 1 << 2,
}

export interface MenuProps extends JSX.HTMLAttributes<HTMLElement> {
  children?: ComponentChildren | Array<ActionProps>;

  menuStyle?: MenuStyleTypes;

  toggleChildren?: ComponentChildren;
}

export function Menu(props: MenuProps) {
  const { nav, navActions } = useActionChildren(props.children);

  const showMenu = useSignal(false);

  const toggleMenu = () => {
    showMenu.value = !showMenu.value;
  };

  return (
    <div class="relative">
      <Action
        onClick={() => {
          toggleMenu();
        }}
        class="flex items-center p-2 rounded"
      >
        {props.toggleChildren || (
          <ChevronDownIcon iconStyle={IconStyleTypes.Outline} />
        )}
      </Action>

      {showMenu && (
        <div
          class={`bg-white shadow-md ${
            props.menuStyle === MenuStyleTypes.Popover
              ? "absolute right-0 mt-2"
              : "fixed top-0 bottom-0 left-0 z-50"
          }`}
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