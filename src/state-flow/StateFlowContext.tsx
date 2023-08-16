// // deno-lint-ignore-file
// import { computed, signal } from "@preact/signals";
// import { EventEmitter } from "node:events";
// import { isObject } from "../src.deps.ts";

// export class StateFlowProxyHandler {
//   //# Fields
//   private static proxies = new WeakSet();

//   protected objToProxies = new WeakMap();

//   protected proxyToSignals = new WeakMap();
//   //#

//   //# Constructors
//   constructor() {
//   }
//   //#

//   //# Static
//   public static CreateProxy<TState extends object>(
//     target: TState,
//     handlers: ProxyHandler<object>,
//   ): TState {
//     const proxy = new Proxy(target, handlers);

//     this.proxies.add(proxy);

//     return proxy as TState;
//   }
//   //#

//   //# API Methods
//   public apply(target: any, thisArg: any, argArray: any[]): any {
//     return Reflect.apply(target, thisArg, argArray);
//   }

//   public get(target: any, prop: PropertyKey, receiver: unknown) {
//     const signals = this.retrieveSignalForProxy(receiver);

//     if (
//       !signals.has(prop) &&
//       typeof Object.getOwnPropertyDescriptor(target, prop)?.get === "function"
//     ) {
//       signals.set(prop, computed(() => Reflect.get(target, prop, receiver)));
//     } else {
//       let value = Reflect.get(target, prop, receiver);

//       if (!signals.has(prop)) {
//         if (isObject(target)) {
//           if (!this.objToProxies.has(value)) {
//             this.objToProxies.set(
//               target,
//               StateFlowProxyHandler.CreateProxy(value, this),
//             );
//           }

//           value = this.objToProxies.get(target);
//         }

//         signals.set(prop, signal(value));
//       }
//     }

//     return signals.get(prop);
//   }

//   public set(
//     target: any,
//     prop: string | symbol,
//     newValue: any,
//     receiver: any,
//   ): boolean {
//     const signals = this.retrieveSignalForProxy(receiver);

//     let internal = newValue;

//     if (isObject(newValue)) {
//       if (!this.objToProxies.has(newValue)) {
//         this.objToProxies.set(
//           target,
//           StateFlowProxyHandler.CreateProxy(newValue, this),
//         );
//       }

//       internal = this.objToProxies.get(target);
//     }

//     const result = Reflect.set(target, prop, newValue, receiver);

//     if (!signals.has(prop)) {
//       signals.set(prop, signal(internal));
//     } else {
//       signals.get(prop).value = internal;
//     }

//     return result;
//   }
//   //#

//   //# Helpers
//   protected retrieveSignalForProxy(reciever: any) {
//     if (!this.proxyToSignals.has(reciever)) {
//       this.proxyToSignals.set(reciever, new Map());
//     }

//     return this.proxyToSignals.get(reciever);
//   }
//   //#
// }

// export class StateFlowContextService<TState extends object>
//   extends EventEmitter {
//   //# Fields
//   //#

//   //# Properties
//   public State!: TState;
//   //#

//   //# Constructors
//   constructor(initState: TState) {
//     super();

//     this.State = StateFlowProxyHandler.CreateProxy(
//       initState,
//       new StateFlowProxyHandler(),
//     );
//   }
//   //#

//   //# API Methods
//   public $Draft(recipe: (draft: TState) => void): void {
//     recipe(this.State);

//     // mergeDeep(this.State, state);

//     this.emitStateChanged();
//   }
//   //#

//   //# Helpers
//   protected emitStateChanged(): void {
//     const state = this.revertState();

//     this.emit("StateChanged", state);
//   }

//   protected revertState(): TState {
//     return { ...this.State } as TState;
//     // return Object.assign(
//     //   {},
//     //   this.State as RevertDeepSignal<typeof this.State>,
//     // ) as TState;
//   }
//   //#
// }
