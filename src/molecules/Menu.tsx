import { ComponentChildren, JSX } from "preact";
import {
  Action,
  ActionProps,
  ActionStyleTypes,
  useActionChildren,
} from "../atoms/Action.tsx";
import { ActionGroup } from "./ActionGroup.tsx";

export enum MenuStyleTypes {
  Popover = 1 << 0,
  Slideout = 1 << 1,
  Responsive = 1 << 2,
}

export interface MenuProps extends JSX.HTMLAttributes<HTMLElement> {
  menuStyle?: MenuStyleTypes;

  children?: ComponentChildren | Array<ActionProps>;
}

export function Menu(props: MenuProps) {
  const { nav, navActions } = useActionChildren(props.children);

  let showMenu = false;

  const toggleMenu = () => {
    showMenu = !showMenu;
  };

  return (
    <div class="relative">
      <button
        type="button"
        onClick={toggleMenu}
        class="flex items-center p-2 rounded"
      >
        <img src="profile-icon.svg" class="h-8 w-8 rounded-full" />

        <svg
          viewBox="0 0 24 24"
          width="24"
          height="24"
          stroke="currentColor"
          stroke-width="2"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="ml-2"
        >
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </button>

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
