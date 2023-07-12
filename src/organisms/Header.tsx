import { ComponentChildren, JSX } from "preact";
import { Action, ActionStyleTypes } from "../atoms/Action.tsx";

export interface HeaderLogo {
  LogoAlt?: string;

  LogoUrl?: string;

  LogoHref?: string;
}

export interface HeaderProps extends JSX.HTMLAttributes<HTMLElement> {
  logo?: ComponentChildren & HeaderLogo;

  nav?: ComponentChildren;
}

export function Header(props: HeaderProps) {
  return (
    <header
      {...props}
      class="bg-blue-500 sm:flex sm:justify-between sm:items-center sm:px-4 sm:py-3"
    >
      <div class="flex items-center justify-between px-4 py-3 sm:p-0">
        <div>
          {!props.logo?.LogoHref ? props.logo : (
            <Action
              href={props.logo?.LogoHref}
              actionStyle={ActionStyleTypes.LINK | ActionStyleTypes.ROUNDED}
            >
              <img
                src={props.logo?.LogoUrl}
                class="w-48 sm:w-32"
                alt={props.logo?.LogoAlt}
              />
            </Action>
          )}
        </div>

        <div class="sm:hidden">
          <Action type="button">
            <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
              <path
                class="hidden"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4 18h16v-2H4v2ZM4 13h16v-2H4v2ZM4 6v2h16V6H4Z"
              />
            </svg>
          </Action>
        </div>
      </div>

      <nav class="px-2 pt-2 pb-4 sm:flex sm:p-0">
        {props.nav}
      </nav>
    </header>
  );
}
