import { JSX } from "preact";

export enum ActionStyleTypes {
  SOLID = 1 << 0,
  OUTLINE = 1 << 1,
  LINK = 1 << 2,
  ROUNDED = 1 << 3,
  NONE = 1 << 4,
  All = ~0 << 5,
}

export interface ActionProps {
  actionStyle?: ActionStyleTypes;
}

export interface ActionAnchorProps
  extends JSX.HTMLAttributes<HTMLAnchorElement>, ActionProps {
}

export interface ActionButtonProps
  extends JSX.HTMLAttributes<HTMLButtonElement>, ActionProps {
}

export function Action(
  props:
    | ActionButtonProps
    | ActionAnchorProps,
) {
  const actionStyle = props.actionStyle ||
    (ActionStyleTypes.SOLID |
      ActionStyleTypes.ROUNDED | ActionStyleTypes.LINK);

  const shared = (
    <div
      class={[
        "block px-4 py-2 font-bold text-white",
        "transition-colors duration-200 ease-out",
        (actionStyle & ActionStyleTypes.ROUNDED) ===
            ActionStyleTypes.ROUNDED
          ? "rounded"
          : "",
        (actionStyle & ActionStyleTypes.SOLID) === ActionStyleTypes.SOLID
          ? "bg-blue-500"
          : "",
        (actionStyle & ActionStyleTypes.LINK) ===
            ActionStyleTypes.LINK
          ? "hover:bg-blue-700 hover:bg-opacity-80"
          : "",
        (actionStyle & ActionStyleTypes.OUTLINE) ===
            ActionStyleTypes.OUTLINE
          ? "border-blue-700 border-solid border hover:border-blue-900"
          : "border-none",
        props.class || "",
      ].filter((c) => c).join(" ")}
    >
    </div>
  );

  return (
    <>
      {!props.href && (
        <button
          {...(props as ActionButtonProps)}
          class={shared.props.class}
        />
      )}

      {props.href && (
        <a
          {...(props as ActionAnchorProps)}
          class={shared.props.class}
        />
      )}
    </>
  );
}
