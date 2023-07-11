import {
  afterEach,
  assert,
  assertEquals,
  beforeEach,
  describe,
  it,
  render,
} from "../test_deps.ts";

import { Header } from "../../src/organisms/Header.tsx";

describe("Header Tests", () => {
  describe("Exists", () => {
    const html = render(<Header />);

    console.log(html);

    assert(html.includes("Logo"));
  });
});
