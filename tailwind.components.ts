export default [
	{
		Root: import.meta.resolve("./"),
		Components: [
			"./src/atoms/forms/_exports.tsx",
			"./src/atoms/_exports.tsx",
			"./src/molecules/_exports.tsx",
			"./src/organisms/_exports.tsx",
			"./src/state-flow/StateFlowContext.tsx",
			"./src/templates/_exports.tsx",
			"./src/utils/_exports.tsx",
		],
	},
	{
		Root: 'https://raw.githubusercontent.com/fathym-deno/atomic/integration/',
		Components: [
			"./src/organisms/Features.tsx?source",
			"./src/organisms/StepsFeatures.tsx?source",
		],
	},
];