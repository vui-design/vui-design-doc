<template>
	<vui-doc-example v-bind:code="code" id="example-card-basic-usage">
		<template slot="demo">
			<vui-tree showIcon checkable :data="data" :expendedKeys="expendedKeys" />
		</template>
		<template slot="title">基本用法</template>
		<template slot="description">
			<p>省市区级联。</p>
		</template>
	</vui-doc-example>
</template>

<script>
	import VuiDocExample from "src/components/example";
	import code from "./code";

	export default {
		components: {
			VuiDocExample
		},
		data() {
			return {
				code,
				data: [
					{
						title: "Node 1",
						key: "1",
						icon: "emotion-happy",
						children: [
							{
								title: "Node 1-1",
								key: "1-1",
								icon: "emotion-happy",
								children: [
									{
										title: "Node 1-1-1",
										key: "1-1-1",
										icon: "emotion-happy"
									},
									{
										title: "Node 1-1-2",
										key: "1-1-2",
										icon: "emotion-happy"
									}
								]
							},
							{
								title: "Node 1-2",
								key: "1-2",
								icon: "emotion-happy"
							},
							{
								title: "Node 1-3",
								key: "1-3",
								icon: "emotion-happy",
								children: [
									{
										title: "Node 1-3-1",
										key: "1-3-1",
										icon: "emotion-happy"
									},
									{
										title: "Node 1-3-2",
										key: "1-3-2",
										icon: "emotion-happy"
									}
								]
							},
							{
								title: "Node 1-4",
								key: "1-4",
								icon: "emotion-happy"
							}
						]
					},
					{
						title: "Node 2",
						key: "2",
						icon: "emotion-happy",
						children: [
							{
								title: "Node 2-1",
								key: "2-1",
								icon: "emotion-happy"
							},
							{
								title: "Node 2-2",
								key: "2-2",
								icon: "emotion-happy"
							}
						]
					}
				],
				expendedKeys: ["1"]
			};
		}
	};
</script>