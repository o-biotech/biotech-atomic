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
    const html = render(<Header logo={<Action>Hello World</Action>} />);

    assert(html.includes("Hello World"));
  });
});
