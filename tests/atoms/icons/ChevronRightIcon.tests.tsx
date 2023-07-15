import {
  afterEach,
  assert,
  assertEquals,
  beforeEach,
  describe,
  it,
  render,
} from "../../test_deps.ts";

import { IconStyleTypes } from "../../../src/atoms/icons/Icon.tsx";
import { ChevronRightIcon } from "../../../src/atoms/icons/ChevronRightIcon.tsx";

describe("ChevronRightIcon Tests", () => {
  describe("Outline", () => {
    const html = render(
      <ChevronRightIcon iconStyle={IconStyleTypes.Outline} />,
    );

    assertEquals(
      html,
      '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"></path></svg>',
    );
  });

  describe("Solid", () => {
    const html = render(<ChevronRightIcon iconStyle={IconStyleTypes.Solid} />);

    assertEquals(
      html,
      '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path fill-rule="evenodd" d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z" clip-rule="evenodd"></path></svg>',
    );
  });

  describe("Mini", () => {
    const html = render(<ChevronRightIcon iconStyle={IconStyleTypes.Mini} />);

    assertEquals(
      html,
      '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5"><path fill-rule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clip-rule="evenodd"></path></svg>',
    );
  });
});
