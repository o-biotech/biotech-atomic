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

export function ChevronRightIcon(
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
          d="M8.25 4.5l7.5 7.5-7.5 7.5"
        />
      )}

      {props.iconStyle === IconStyleTypes.Solid && (
        <path
          fill-rule="evenodd"
          d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z"
          clip-rule="evenodd"
        />
      )}

      {props.iconStyle === IconStyleTypes.Mini && (
        <path
          fill-rule="evenodd"
          d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
          clip-rule="evenodd"
        />
      )}
    </svg>
  );
}
