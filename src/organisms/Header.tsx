import { ComponentChildren, JSX } from "preact";
import {
  Action,
  ActionAnchorProps,
  ActionButtonProps,
  ActionProps,
  ActionStyleTypes,
} from "../atoms/Action.tsx";
import { ActionGroup } from "../molecules/ActionGroup.tsx";
import { classSet } from "../utils/jsx.tsx";

export class HeaderLogo {
  public LogoAlt?: string;

  public LogoUrl?: string;

  public LogoHref?: string;
}

export function useHeaderLogoChildren(
  children: ComponentChildren | Array<ActionProps>,
): {
  logo: ComponentChildren;
  logoDetails: HeaderLogo | undefined;
  logoAction: JSX.Element;
} {
  const logo = children instanceof HeaderLogo
    ? undefined
    : children as ComponentChildren;

  const logoDetails = children instanceof HeaderLogo
    ? children as HeaderLogo
    : undefined;

  const logoAction = (
    <Action
      href={logoDetails?.LogoHref}
      actionStyle={ActionStyleTypes.Link | ActionStyleTypes.Rounded}
    >
      <img
        src={logoDetails?.LogoUrl}
        class="w-48 sm:w-32"
        alt={logoDetails?.LogoAlt}
      />
    </Action>
  );

  return { logo, logoDetails, logoAction };
}

export interface HeaderProps extends JSX.HTMLAttributes<HTMLElement> {
  logo?: ComponentChildren | HeaderLogo;

  nav?: ComponentChildren | Array<ActionProps>;
}

export function Header(props: HeaderProps) {
  const { logo, logoAction } = useHeaderLogoChildren(props.logo);

  return (
    <header
      {...props}
      class={classSet(
        props,
        "bg-blue-500 sm:(flex justify-between items-center px-4 py-3)",
      )}
    >
      <div class="flex items-center justify-between px-4 py-3 sm:p-0">
        <div>
          {logo || logoAction}
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

      <ActionGroup>
        {props.nav}
      </ActionGroup>
    </header>
  );
}
