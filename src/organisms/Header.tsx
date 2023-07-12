import { ComponentChildren, JSX } from "preact";
import {
  Action,
  ActionAnchorProps,
  ActionButtonProps,
  ActionStyleTypes,
} from "../atoms/Action.tsx";

export class HeaderLogo {
  public LogoAlt?: string;

  public LogoUrl?: string;

  public LogoHref?: string;
}

export class HeaderAction {
  public Class?: string;

  public HREF?: string;

  public Text?: string;
}

export interface HeaderProps extends JSX.HTMLAttributes<HTMLElement> {
  logo?: ComponentChildren | HeaderLogo;

  nav?: ComponentChildren | HeaderAction[];
}

export function Header(props: HeaderProps) {
  const logo = props.logo instanceof HeaderLogo
    ? undefined
    : props.logo as ComponentChildren;

  const logoDetails = props.logo instanceof HeaderLogo
    ? props.logo as HeaderLogo
    : undefined;

  const nav = props.nav instanceof Array<HeaderAction>
    ? undefined
    : props.nav as ComponentChildren;

  const navActions = props.nav instanceof Array<HeaderAction>
    ? props.nav as Array<HeaderAction>
    : undefined;

  return (
    <header
      {...props}
      class="bg-blue-500 sm:flex sm:justify-between sm:items-center sm:px-4 sm:py-3"
    >
      <div class="flex items-center justify-between px-4 py-3 sm:p-0">
        <div>
          {logo || (
            <Action
              href={logoDetails?.LogoHref}
              actionStyle={ActionStyleTypes.LINK | ActionStyleTypes.ROUNDED}
            >
              <img
                src={logoDetails?.LogoUrl}
                class="w-48 sm:w-32"
                alt={logoDetails?.LogoAlt}
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
        {nav ||
          navActions?.map((action) => (
            <Action href={action.HREF} class={action.Class}>
              {action.Text}
            </Action>
          ))}
      </nav>
    </header>
  );
}
