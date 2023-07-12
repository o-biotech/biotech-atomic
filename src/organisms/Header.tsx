import { ComponentChildren, JSX } from "preact";
import { Action } from "../atoms/Action.tsx";

export interface HeaderProps extends JSX.HTMLAttributes<HTMLElement> {
  logo?: ComponentChildren;
}

export function Header(props: HeaderProps) {
  return (
    <header
      {...props}
      className="bg-blue-500 sm:flex sm:justify-between sm:items-center sm:px-4 sm:py-3"
    >
      <div className="flex items-center justify-between px-4 py-3 sm:p-0">
        <div>
          {props.logo}
        </div>

        <div className="sm:hidden">
          <Action type="button">
            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
              <path
                className="hidden"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4 18h16v-2H4v2ZM4 13h16v-2H4v2ZM4 6v2h16V6H4Z"
              />
            </svg>
          </Action>
        </div>
      </div>

      <nav className="px-2 pt-2 pb-4 sm:flex sm:p-0">
        <Action href="/" className="text-xl">
          Home
        </Action>

        <Action href="/about" className="text-xl">
          About
        </Action>

        <Action href="/contact" className="text-xl">
          Contact
        </Action>
      </nav>
    </header>
  );
}
