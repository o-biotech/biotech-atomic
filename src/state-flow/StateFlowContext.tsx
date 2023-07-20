import { DeepSignal, deepSignal } from "$deepsignal";
import type { RevertDeepSignal } from "$deepsignal";
import { EventEmitter } from "node:events";
import { produce } from "immer";
import { mergeDeep } from "../utils/object.utils.tsx";

export type StateFlow = Record<string | number | symbol, unknown>;

export class StateFlowContextService<TState extends StateFlow>
  extends EventEmitter {
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
