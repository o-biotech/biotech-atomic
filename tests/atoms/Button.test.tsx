import {
  afterEach,
  assert,
  assertEquals,
  beforeEach,
  describe,
  DOMParser,
  it,
  // JSDOM,
  render,
} from "../test_deps.ts";

import { Button } from "../../src/atoms/Button.tsx";

describe("Button Tests", () => {
  describe("Exists", () => {
    const html = render(<Button>Hello</Button>);

    console.log(html);

    assertEquals(html, `<button disabled>Hello</button>`);
  });
});
