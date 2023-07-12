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
    (ActionStyleTypes.SOLID | ActionStyleTypes.OUTLINE |
      ActionStyleTypes.ROUNDED);

  return (
    <>
      {!props.href && (
        <button
          {...(props as ActionButtonProps)}
          className={[
            "block px-4 py-2 font-bold text-white",
            (actionStyle & ActionStyleTypes.LINK) ===
                ActionStyleTypes.LINK
              ? "hover:bg-gray-100 hover:bg-opacity-20"
              : "",
            (actionStyle & ActionStyleTypes.SOLID) === ActionStyleTypes.SOLID
              ? "bg-blue-500 hover:bg-blue-700"
              : "",
            (actionStyle & ActionStyleTypes.ROUNDED) ===
                ActionStyleTypes.ROUNDED
              ? "rounded"
              : "",
            "transition-colors duration-200 ease-out",
            (actionStyle & ActionStyleTypes.OUTLINE) ===
                ActionStyleTypes.OUTLINE
              ? "border-blue-900 border-solid focus:border-none"
              : "outline-none",
            props.className || "",
          ].filter((c) => c).join(" ")}
        />
      )}

      {props.href && (
        <a
          {...(props as ActionAnchorProps)}
          className={[
            "block px-4 py-2 font-bold text-white",
            (actionStyle & ActionStyleTypes.LINK) ===
                ActionStyleTypes.LINK
              ? "hover:bg-gray-100 hover:bg-opacity-20"
              : "",
            (actionStyle & ActionStyleTypes.SOLID) === ActionStyleTypes.SOLID
              ? "bg-blue-500 hover:bg-blue-700"
              : "",
            (actionStyle & ActionStyleTypes.ROUNDED) ===
                ActionStyleTypes.ROUNDED
              ? "rounded"
              : "",
            "transition-colors duration-200 ease-out",
            (actionStyle & ActionStyleTypes.OUTLINE) ===
                ActionStyleTypes.OUTLINE
              ? "border-blue-900 border-solid focus:border-none"
              : "outline-none",
            props.className || "",
          ].filter((c) => c).join(" ")}
        />
      )}
    </>
  );
}
