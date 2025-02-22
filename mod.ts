export * from "./src/.exports.ts";

import { islandsConfig as fathymAtomicIslandsConfig } from "./src/src.deps.ts";

export function islandsConfig(): {
  baseLocation: string;
  paths: string[];
}[] {
  return [
    ...fathymAtomicIslandsConfig(),
    {
      baseLocation: import.meta.url,
      paths: [],
    },
  ];
}
