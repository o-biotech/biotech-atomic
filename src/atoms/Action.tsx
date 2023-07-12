import { JSX } from "preact";

export function Action(
  props:
    | JSX.HTMLAttributes<HTMLButtonElement>
    | JSX.HTMLAttributes<HTMLAnchorElement>,
) {
  return (
    <>
      {!props.href && (
        <button
          {...(props as JSX.HTMLAttributes<HTMLButtonElement>)}
          className={[
            props.className || "",
            "px-4 py-2 font-bold text-white bg-blue-500 hover:bg-blue-700 rounded transition-colors duration-200 ease-out focus:outline-none",
          ].join(" ")}
        />
      )}

      {props.href && (
        <a
          {...(props as JSX.HTMLAttributes<HTMLAnchorElement>)}
          className={[
            props.className,
            "px-4 py-2 font-bold text-white bg-blue-500 hover:bg-blue-700 rounded transition-colors duration-200 ease-out focus:outline-none",
          ].join(" ")}
        />
      )}
    </>
  );
}
