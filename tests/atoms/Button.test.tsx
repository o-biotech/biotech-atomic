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
  describe("Anchor Exists", () => {
    const html = render(<Button href="/">Hello</Button>);

    assertEquals(
      html,
      `<a href="/" class="px-4 py-2 font-bold text-white bg-blue-500 hover:bg-blue-700 rounded transition-colors duration-200 ease-out focus:outline-none">Hello</a>`,
    );
  });

  describe("Button Exists", () => {
    const html = render(<Button disabled>Hello</Button>);

    assertEquals(
      html,
      `<button disabled class="px-4 py-2 font-bold text-white bg-blue-500 hover:bg-blue-700 rounded transition-colors duration-200 ease-out focus:outline-none">Hello</button>`,
    );
  });
});
