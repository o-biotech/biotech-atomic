import { DeepSignal, deepSignal } from "npm:deepsignal";
import type { RevertDeepSignal } from "npm:deepsignal";
import { EventEmitter } from "node:events";
import { produce } from "immer";
import { mergeDeep } from "../utils/object.utils.tsx";

// deno-lint-ignore ban-types
export class StateFlowContext<TState extends object> extends EventEmitter {
  //# Fields
  //#

  //# Properties
  public State!: DeepSignal<TState>;
  //#

  //# Constructors
  constructor(initState: TState) {
    super();

    this.State = deepSignal(initState);
  }
  //#

  //# API Methods
  public $Draft(recipe: (draft: TState) => void): void {
    recipe(this.State as TState);

    // mergeDeep(this.State, state);

    this.emitStateChanged();
  }
  //#

  //# Helpers
  protected emitStateChanged(): void {
    const state = this.revertState();

    this.emit("StateChanged", state);
  }

  protected revertState(): TState {
    return Object.assign(
      {},
      this.State as RevertDeepSignal<typeof this.State>,
    ) as TState;
  }
  //#
}
