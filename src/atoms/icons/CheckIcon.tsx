import { JSX } from "preact";
import { useEffect } from "preact/hooks";
import { IconProps, IconStyleTypes, useIconsRoot } from "./Icon.tsx";
import { classSet } from "../../utils/jsx.tsx";

// export const UserIconName = "user";

// export function UserIcon(
//   props: IconProps,
// ) {
//   // const { useIcon } = useIconsRoot(props);

//   // const { icon } = useIcon(UserIconName);

//   // return <>{icon}</>;
//   return <ArchiveBoxSolid />;
// }

export function CheckIcon(
  props: IconProps,
) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class={classSet(
        props,
        props.iconStyle === IconStyleTypes.Mini ? "w-5 h-5" : "w-6 h-6",
      )}
    >
      {props.iconStyle === IconStyleTypes.Outline && (
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M4.5 12.75l6 6 9-13.5"
        />
      )}

      {props.iconStyle === IconStyleTypes.Solid && (
        <path
          fill-rule="evenodd"
          d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
          clip-rule="evenodd"
        />
      )}

      {props.iconStyle === IconStyleTypes.Mini && (
        <path
          fill-rule="evenodd"
          d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
          clip-rule="evenodd"
        />
      )}
    </svg>
  );
}
