import { ComponentChildren, JSX } from "preact";
import { Action, ActionStyleTypes } from "../atoms/Action.tsx";

export interface FooterProps extends JSX.HTMLAttributes<HTMLElement> {
  companyDescription?: string;

  companyName: string;

  nav?: ComponentChildren;
}

export function Footer(props: FooterProps) {
  return (
    <footer {...props} class="bg-gray-900 text-white">
      <div class="max-w-6xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div class="md:flex justify-between">
          <div class="mb-4 md:mb-0">
            <Action
              href="/"
              class="text-2xl uppercase tracking-widest"
              actionStyle={ActionStyleTypes.LINK | ActionStyleTypes.ROUNDED}
            >
              {props.companyName}
            </Action>

            {props.companyDescription && (
              <p class="text-gray-400 mt-2">{props.companyDescription}</p>
            )}
          </div>

          <div class="md:flex md:flex-col md:items-end">
            <nav class="flex flex-wrap justify-center -mx-2 mt-4 md:mt-0">
              <a
                href="#"
                class="px-2 py-1 text-gray-400 hover:text-white md:mx-2"
              >
                Home
              </a>

              <a
                href="#"
                class="px-2 py-1 text-gray-400 hover:text-white md:mx-2"
              >
                Products
              </a>

              <a
                href="#"
                class="px-2 py-1 text-gray-400 hover:text-white md:mx-2"
              >
                Services
              </a>

              <a
                href="#"
                class="px-2 py-1 text-gray-400 hover:text-white md:mx-2"
              >
                About Us
              </a>

              <a
                href="#"
                class="px-2 py-1 text-gray-400 hover:text-white md:mx-2"
              >
                Contact
              </a>
            </nav>

            <div class="mt-4 md:mt-8">
              <p class="text-gray-400">
                &copy; {new Date().getFullYear()}{" "}
                {props.companyName}. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
