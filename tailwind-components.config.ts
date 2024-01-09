import { constructTailwindComponentsConfig } from './src/src.deps.ts';

await constructTailwindComponentsConfig(
  import.meta,
  [
    {
      Directory: './src',
      Extensions: ['.tsx'],
    },
  ],
  [
    {
      Root: 'https://raw.githubusercontent.com/fathym-deno/atomic/integration/',
      Components: [
        './src/organisms/Features.tsx?source',
        './src/organisms/StepsFeatures.tsx?source',
      ],
    },
  ]
);
