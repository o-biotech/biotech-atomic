import {
  afterEach,
  assert,
  assertEquals,
  beforeEach,
  describe,
  it,
  render,
} from "../test_deps.ts";

import { DisplayProps } from "../../src/molecules/Display.tsx";
import { Features } from "../../src/organisms/Features.tsx";
import { factory } from "../../mod.ts";

describe("Features Tests", () => {
  describe("Simple", () => {
    const html = render(
      <Features>
        {[
          {
            title: "Start with Fathym CLI",
          } as DisplayProps,
          {
            title: "Start with Fathym UI",
          } as DisplayProps,
          {
            title: "Start with Thinky AI",
          } as DisplayProps,
        ]}
      </Features>,
    );

    assert(html.includes("Fathym CLI"));
    assert(html.includes("Fathym UI"));
    assert(html.includes("Thinky AI"));
  });
});
