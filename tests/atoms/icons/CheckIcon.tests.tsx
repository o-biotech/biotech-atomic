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
      '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path></svg>',
    );
  });

  describe("Solid", () => {
    const html = render(<CheckIcon iconStyle={IconStyleTypes.Solid} />);

    assertEquals(
      html,
      '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path fill-rule="evenodd" d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z" clip-rule="evenodd"></path></svg>',
    );
  });

  describe("Mini", () => {
    const html = render(<CheckIcon iconStyle={IconStyleTypes.Mini} />);

    assertEquals(
      html,
      '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5"><path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd"></path></svg>',
    );
  });
});
