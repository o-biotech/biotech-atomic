import { ComponentChildren, JSX } from "preact";
import {
  Action,
  ActionProps,
  ActionStyleTypes,
  useActionChildren,
} from "../atoms/Action.tsx";
import { ActionGroup } from "./ActionGroup.tsx";

export enum HeroStyleTypes {
  Rounded = 1 << 0,
  Inset = 1 << 1,
  Horizonal = 1 << 2,
  All = ~0 << 3,
}

export interface HeroProps extends JSX.HTMLAttributes<HTMLElement> {
  children?: ComponentChildren | Array<ActionProps>;

  callToAction?: string | ComponentChildren;

  heroStyle?: HeroStyleTypes;

  title?: string;
}

export function Hero(props: HeroProps) {
  const callToAction = typeof props.callToAction === "string"
    ? <p class="text-xl max-w-lg text-blue-100">{props.callToAction}</p>
    : props.callToAction as ComponentChildren;
  return (
    <div
      class="w-full flex px-8 h-96 justify-center items-center flex-col gap-8 bg-cover bg-center bg-no-repeat bg-gray-100 rounded-xl text-white"
      style="background-image:linear-gradient(rgba(0, 0, 40, 0.8),rgba(0, 0, 40, 0.8)), url('/gallery/hero-bg.webp');"
    >
      <div class="space-y-4 text-center">
        {props.title && (
          <h1 class="text-4xl inline-block font-bold">{props.title}</h1>
        )}

        {callToAction}
      </div>

      <ActionGroup>{props.children}</ActionGroup>
    </div>
  );
}
