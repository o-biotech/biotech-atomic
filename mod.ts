export * from "./src/_exports.ts";

import { islandsConfig as fathymAtomicIslandsConfig } from "./src/src.deps.ts";

export function islandsConfig() {
  return [
    ...fathymAtomicIslandsConfig(),
    {
      baseLocation: import.meta.url,
      paths: [
        "./src/molecules/MenuButton.tsx",
        "./src/molecules/ResponsiveSet.tsx",
        "./src/molecules/Tabs.tsx",
      ],
    },
  ];
}
