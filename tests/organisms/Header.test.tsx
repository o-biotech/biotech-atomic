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
import { Header } from "../../src/organisms/Header.tsx";

describe("Header Tests", () => {
  describe("Exists", () => {
    const html = render(
      <Header
        logo={<Action>Hello World</Action>}
        nav={
          <>
            <Action href="/" class="text-xl mx-1">
              Home
            </Action>

            <Action href="/about" class="text-xl mx-1">
              About
            </Action>

            <Action href="/contact" class="text-xl mx-1">
              Contact
            </Action>
          </>
        }
      />,
    );

    assert(html.includes("Hello World"));
    assert(html.includes("Contact"));
  });
});
