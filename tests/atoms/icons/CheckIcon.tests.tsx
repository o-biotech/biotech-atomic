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
import { CheckIcon } from "../../../src/atoms/icons/CheckIcon.tsx";

describe("CheckIcon Tests", () => {
  describe("Outline", () => {
    const html = render(<CheckIcon iconStyle={IconStyleTypes.Outline} />);

    assertEquals(
      html,
      '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"></path></svg>',
    );
  });

  describe("Solid", () => {
    const html = render(<CheckIcon iconStyle={IconStyleTypes.Solid} />);

    assertEquals(
      html,
      '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path fill-rule="evenodd" d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z" clip-rule="evenodd"></path></svg>',
    );
  });

  describe("Mini", () => {
    const html = render(<CheckIcon iconStyle={IconStyleTypes.Mini} />);

    assertEquals(
      html,
      '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5"><path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd"></path></svg>',
    );
  });
});
