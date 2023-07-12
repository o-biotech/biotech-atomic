import {
  afterEach,
  assert,
  assertEquals,
  beforeEach,
  describe,
  it,
  render,
} from "../test_deps.ts";

import { Action } from "../../src/atoms/Action.tsx";

describe("Action Tests", () => {
  describe("Anchor Exists", () => {
    const html = render(<Action href="/" className="w-32">Hello</Action>);

    assertEquals(
      html,
      `<a href="/" class="w-32 px-4 py-2 font-bold text-white bg-blue-500 hover:bg-blue-700 rounded transition-colors duration-200 ease-out focus:outline-none">Hello</a>`,
    );
  });

  describe("Button Exists", () => {
    const html = render(<Action disabled>Hello</Action>);

    assertEquals(
      html,
      `<button disabled class=" px-4 py-2 font-bold text-white bg-blue-500 hover:bg-blue-700 rounded transition-colors duration-200 ease-out focus:outline-none">Hello</button>`,
    );
  });
});