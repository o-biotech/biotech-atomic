// import { assert, describe, render } from "../test.deps.ts";
// import {
//   StateFlowContextService,
// } from "../../src/state-flow/StateFlowContext.tsx";

// class CounterState {
//   public Count = 0;

//   public get Double(): number {
//     return this.Count * 2;
//   }
// }

// class TestState {
//   public Counter: CounterState = new CounterState();

//   public FirstName!: string;

//   public get FullName(): string {
//     return `${this.FirstName} ${this.LastName}`;
//   }

//   public LastName!: string;
// }

// class TestStateFlowContextService extends StateFlowContextService<TestState> {
//   constructor() {
//     super(new TestState());
//   }

//   public ChangeName(first: string, last: string): void {
//     this.State.FirstName = first;

//     this.State.LastName = last;
//   }

//   public Increment(): void {
//     this.State.Counter.Count = this.State.Counter.Count + 1;
//   }
// }

// describe("StateFlowContext Tests", () => {
//   describe("Change Name Test", () => {
//     const testCtxt = new TestStateFlowContextService(); //{
//     //   FirstName: "",
//     //   LastName: "",
//     //   get FullName(): string {
//     //     return `${testCtxt.State.FirstName} ${testCtxt.State.LastName}`;
//     //   },
//     // });

//     // assertEquals(testCtxt.State.FirstName, undefined);
//     // assertEquals(testCtxt.State.LastName, undefined);
//     assertEquals(testCtxt.State.Counter.Count, undefined);

//     // testCtxt.ChangeName("Michael", "Gearhardt");

//     testCtxt.Increment();

//     // assertEquals(testCtxt.State.FirstName, "Michael");
//     // assertEquals(testCtxt.State.LastName, "Gearhardt");
//     // assertEquals(testCtxt.State.FullName, "Michael Gearhardt");
//     // assertEquals(testCtxt.State.Counter.Count, 1);

//     // const html = render(
//     //   <div>
//     //     {testCtxt.State.FirstName} <br />
//     //     {testCtxt.State.LastName} <br />
//     //     {testCtxt.State.FullName} <br />
//     //     {testCtxt.State.Counter.Count} <br />

//     //     {
//     //       /* <Action>
//     //       <>Michael Gearhardt</>
//     //     </Action> */
//     //     }

//     //     {
//     //       /* <Action>
//     //       Pete Sanchez
//     //     </Action> */
//     //     }
//     //   </div>,
//     // );

//     // assertEquals(
//     //   html,
//     //   "<div>Michael <br/>Gearhardt <br/>Michael Gearhardt <br/></div>",
//     // );
//   });
// });
