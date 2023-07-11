import {
  afterEach,
  assert,
  assertEquals,
  beforeEach,
  describe,
  it,
  render,
} from "../test_deps.ts";

import { Button } from "../../src/atoms/Button.tsx";

describe("Button Tests", () => {
  describe("Exists", () => {
    const html = render(<Button disabled>Hello</Button>);

    console.log(html);

    assertEquals(
      html,
      `<button disabled class="px-4 py-2 font-bold text-white bg-green-500 hover:bg-green-700 rounded transition-colors duration-200 ease-out focus:outline-none">Hello</button>`,
    );
  });
});
