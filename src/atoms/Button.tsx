import { JSX } from "preact";

export function Button(props: JSX.HTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      class="px-4 py-2 font-bold text-white bg-blue-500 hover:bg-blue-700 rounded transition-colors duration-200 ease-out focus:outline-none"
    />
  );
}
