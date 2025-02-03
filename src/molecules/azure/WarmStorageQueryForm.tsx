import {
  Action,
  ActionGroup,
  classSet,
  Input,
  type JSX,
} from "../../src.deps.ts";

export type WarmStorageQueryFormProps = {
  query: string;
  lookup: string;
} & JSX.HTMLAttributes<HTMLFormElement>;

export default function WarmStorageQueryForm(
  props: WarmStorageQueryFormProps,
): JSX.Element {
  return (
    <form
      method="post"
      {...props}
      class={classSet(
        ["-:w-full -:max-w-sm -:md:max-w-md -:mx-auto -:p-3 -:mt-8"],
        props,
      )}
    >
      <div class="flex flex-wrap -mx-3 mb-4">
        <div class="w-full px-3">
          <div class="w-full p-3">
            <label
              for="query"
              class="block uppercase tracking-wide font-bold mb-2 text-lg text-left"
            >
              Query
            </label>

            <Input
              id="query"
              name="query"
              type="text"
              value={props.query || ""}
              multiline
              required
              placeholder="Enter warm storage query"
              class="w-[120%] h-[250%] border border-gray-300 p-2" // Apply scaling here
            />
          </div>
        </div>
      </div>

      <ActionGroup class="mt-8 flex-col">
        <Action
          type="submit"
          class="w-full md:w-auto text-white font-bold m-1 py-2 px-4 rounded focus:outline-none shadow-lg"
        >
          Run
        </Action>
      </ActionGroup>
    </form>
  );
}
