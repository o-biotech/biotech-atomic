export default [
	{
		Root: import.meta.resolve("./"),
		Components: [
			"./src/state-flow/StateFlowContext.tsx",
		],
	},
	{
		Root: 'https://deno.land/x/fathym_atomic_design_kit@v0.0.31/',
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
		Root: 'https://deno.land/x/fathym_atomic@v0.0.101/',
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
	{
		Root: 'https://deno.land/x/fathym_atomic_chat@v0.0.24/',
		Components: [
			"./src/molecules/ChatBox.tsx",
			"./src/molecules/ChatInput.tsx",
			"./src/organisms/ChatHistory.tsx",
		],
	},
	{
		Root: 'https://deno.land/x/fathym_atomic_iot@v0.0.41/',
		Components: [
			"./src/molecules/IoTDisplay.tsx",
		],
	},
	{
		Root: 'https://deno.land/x/fathym_atomic_reports@v0.0.14/',
		Components: [
			"./src/molecules/BasicSummary.tsx",
			"./src/molecules/BulletList.tsx",
			"./src/molecules/charts/BarChart.tsx",
			"./src/molecules/charts/BubbleChart.tsx",
			"./src/molecules/charts/DoughnutChart.tsx",
			"./src/molecules/charts/FathymChart.tsx",
			"./src/molecules/charts/LineChart.tsx",
			"./src/molecules/charts/PieChart.tsx",
			"./src/molecules/charts/PolarChart.tsx",
			"./src/molecules/charts/RadarChart.tsx",
			"./src/molecules/charts/ScatterChart.tsx",
		],
	},
	{
		Root: 'https://deno.land/x/fathym_atomic_social@v0.0.48/',
		Components: [
			"./src/organisms/FeedCard.tsx",
			"./src/organisms/FeedCardList.tsx",
			"./src/organisms/PostForm.tsx",
			"./src/organisms/PostWithFeed.tsx",
			"./src/organisms/ProfileDisplay.tsx",
		],
	},
];