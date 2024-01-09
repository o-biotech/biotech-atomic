export default [
	{
		Root: import.meta.resolve("./"),
		Components: [
			"./src/state-flow/StateFlowContext.tsx",
		],
	},
	{
		Root: 'https://deno.land/x/fathym_atomic_design_kit@v0.0.27-integration/',
		Components: [
			"./src/atoms/Logo.tsx",
			"./src/molecules/azure/connect.form.tsx",
			"./src/molecules/azure/existing.form.tsx",
			"./src/molecules/eac/calz.form.tsx",
			"./src/molecules/eac/connect.form.tsx",
			"./src/molecules/eac/create.form.tsx",
			"./src/organisms/FathymHeader.tsx",
			"./src/organisms/feed/BuildFeedCard.tsx",
		],
	},
	{
		Root: 'https://deno.land/x/fathym_atomic@v0.0.100/',
		Components: [
			"./src/atoms/Action.tsx",
			"./src/atoms/forms/Input.tsx",
			"./src/atoms/forms/SlideToggle.tsx",
			"./src/molecules/ActionGroup.tsx",
			"./src/molecules/Display.tsx",
			"./src/molecules/LineItem.tsx",
			"./src/molecules/MenuButton.tsx",
			"./src/molecules/ResponsiveSet.tsx",
			"./src/molecules/Tabs.tsx",
			"./src/organisms/Features.tsx",
			"./src/organisms/Footer.tsx",
			"./src/organisms/Header.tsx",
			"./src/organisms/Hero.tsx",
			"./src/organisms/SignIn.tsx",
			"./src/organisms/SignUp.tsx",
			"./src/organisms/StepsFeatures.tsx",
			"./src/templates/BasicLayout.tsx",
		],
	},
];