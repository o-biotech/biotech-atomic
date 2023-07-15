import { ComponentChildren, JSX } from "preact";
import {
  Action,
  ActionProps,
  ActionStyleTypes,
  useActionChildren,
} from "../atoms/Action.tsx";
import { ActionGroup } from "./ActionGroup.tsx";
import { classSet } from "../utils/jsx.tsx";
import { Display, DisplayProps } from "./Display.tsx";

export enum HeroStyleTypes {
  Rounded = 1 << 0,
  Inset = 1 << 1,
  Horizonal = 1 << 2,
  None = 1 << 3,
}

export interface HeroProps extends DisplayProps {
  children?: ComponentChildren | Array<ActionProps>;

  callToAction?: string | ComponentChildren;

  heroStyle?: HeroStyleTypes;
}

export function Hero(props: HeroProps) {
  const callToAction = typeof props.callToAction === "string"
    ? <p class="text-xl max-w-lg text-blue-100">{props.callToAction}</p>
    : props.callToAction as ComponentChildren;

  const heroStyle = props.heroStyle ||
    (HeroStyleTypes.Rounded | HeroStyleTypes.Inset);

  return (
    <Display
      {...props}
      title={props.title}
      class={classSet(
        props,
        "flex-col px-8 h-96 gap-8",
        (heroStyle & HeroStyleTypes.Inset) ===
            HeroStyleTypes.Inset
          ? "w-[80%] my-8 mx-auto md:(w-[90%] my-6) sm:(w-[95%] my-4) xs:(w-[98%] max-w-[98%] my-2)"
          : "w-full",
        "bg-cover bg-center bg-no-repeat bg-gray-100 text-white",
        (heroStyle & HeroStyleTypes.Rounded) ===
            HeroStyleTypes.Rounded
          ? "rounded-3xl"
          : undefined,
      )}
    >
      <div
        class={classSet(
          undefined,
          "flex",
          (heroStyle & HeroStyleTypes.Horizonal) ===
              HeroStyleTypes.Horizonal
            ? "flex-col [&>*]:mx-auto md:(flex-row [&>*]:mx-2)"
            : "flex-col [&>*]:mx-auto",
        )}
      >
        {callToAction}

        <ActionGroup>{props.children}</ActionGroup>
      </div>
    </Display>
  );
}
