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
import { Header } from "../../src/organisms/Header.tsx";

describe("Header Tests", () => {
  describe("Exists", () => {
    const html = render(<Header logo={<Button>Hello World</Button>} />);

    assert(html.includes("Hello World"));
  });
});
