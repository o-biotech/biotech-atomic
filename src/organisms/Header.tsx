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
import { MenuIcon } from "../atoms/icons/MenuIcon.tsx";
import { IconStyleTypes } from "../atoms/icons/Icon.tsx";
import { MenuButton, MenuButtonStyleTypes } from "../molecules/MenuButton.tsx";

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

  responsiveNav?: boolean;
}

export function Header(props: HeaderProps) {
  const { logo, logoAction } = useHeaderLogoChildren(props.logo);

  const loadActions = () => {
    if (props.responsiveNav) {
      return (
        <>
          <MenuButton
            class="md:hidden"
            menuStyle={MenuButtonStyleTypes.Responsive}
            toggleChildren={<MenuIcon iconStyle={IconStyleTypes.Outline} />}
          >
            <ActionGroup>
              {props.nav}
            </ActionGroup>
          </MenuButton>

          <ActionGroup class="hidden md:flex">
            {props.nav}
          </ActionGroup>
        </>
      );
    } else {
      return (
        <ActionGroup>
          {props.nav}
        </ActionGroup>
      );
    }
  };

  return (
    <header
      {...props}
      class={classSet(
        props,
        "flex items-center justify-between",
      )}
    >
      <div class="px-4 py-3 sm:p-0">
        {logo || logoAction}
      </div>

      {loadActions()}
    </header>
  );
}
