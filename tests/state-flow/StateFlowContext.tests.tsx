import { assert, describe, render } from "../test_deps.ts";

import { Action } from "../../src/atoms/Action.tsx";
import { Header, HeaderLogo } from "../../src/organisms/Header.tsx";
import {
  StateFlow,
  StateFlowContextService,
} from "../../src/state-flow/StateFlowContext.tsx";
import { assertEquals } from "$std/testing/asserts.ts";
import { DeepSignal, deepSignal } from "$deepsignal";

interface CountState extends StateFlow {
  count: number;

  get double(): number;
}

interface TestState extends StateFlow {
  FirstName: string;

  get FullName(): string;

  LastName: string;
}

class TestStateFlowContextService extends StateFlowContextService<TestState> {
  constructor(initState: TestState) {
    super(initState);
  }

  public ChangeName(first: string, last: string): void {
    this.$Draft((draft) => {
      draft.FirstName = first;

      draft.LastName = last;
    });
  }
}

describe("StateFlowContext Tests", () => {
  describe("Change Name Test", () => {
    // const state = deepSignal({
    //   count: 0,
    //   get double(): number {
    //     return state.count * 2;
    //   },
    // } as CountState);

    // assertEquals(state.count, 0);
    // assertEquals(state.double, 0);

    // state.count += 1;

    // assertEquals(state.count, 1);
    // assertEquals(state.double, 2);

    const testCtxt = new TestStateFlowContextService({
      FirstName: "",
      LastName: "",
      get FullName(): string {
        return `${testCtxt.State.FirstName} ${testCtxt.State.LastName}`;
      },
    });

    assertEquals(testCtxt.State.FirstName, "");
    assertEquals(testCtxt.State.LastName, "");

    testCtxt.ChangeName("Michael", "Gearhardt");

    assertEquals(testCtxt.State.FirstName, "Michael");
    assertEquals(testCtxt.State.LastName, "Gearhardt");
    assertEquals(testCtxt.State.FullName, "Michael Gearhardt");
  });
});
