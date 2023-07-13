import {
  afterEach,
  assert,
  assertEquals,
  beforeEach,
  describe,
  it,
  render,
} from "../test_deps.ts";

import { Action, ActionStyleTypes } from "../../src/atoms/Action.tsx";

describe("Action Tests", () => {
  describe("Anchor Exists", () => {
    const html = render(<Action href="/" class="w-32">Hello</Action>);

    assertEquals(
      html,
      `<a href="/" class="block px-4 py-2 font-bold text-white transition-colors duration-200 ease-out rounded bg-blue-500 hover:bg-blue-700 hover:bg-opacity-80 border-none w-32">Hello</a>`,
    );
  });

  describe("Button Exists", () => {
    const html = render(<Action disabled>Hello</Action>);

    assertEquals(
      html,
      `<button disabled class="block px-4 py-2 font-bold text-white transition-colors duration-200 ease-out rounded bg-blue-500 hover:bg-blue-700 hover:bg-opacity-80 border-none">Hello</button>`,
    );
  });

  describe("Action Styles: None", () => {
    const html = render(
      <Action actionStyle={ActionStyleTypes.None}>Hello</Action>,
    );

    assertEquals(
      html,
      `<button actionStyle="16" class="block px-4 py-2 font-bold text-white transition-colors duration-200 ease-out border-none">Hello</button>`,
    );
  });
});
