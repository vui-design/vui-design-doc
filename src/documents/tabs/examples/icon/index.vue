<template>
	<Example vertical id="example-tabs-icon">
		<template slot="source">
			<vui-tabs>
				<vui-tab-panel name="tab1" icon="apps" title="Tab 1">
					Content of Tab Panel 1
				</vui-tab-panel>
				<vui-tab-panel name="tab2" icon="bar-chart" title="Tab 2">
					Content of Tab Panel 2
				</vui-tab-panel>
				<vui-tab-panel name="tab3" icon="pie-chart" title="Tab 3">
					Content of Tab Panel 3
				</vui-tab-panel>
			</vui-tabs>
		</template>
		<template slot="title">图标</template>
		<template slot="describe">
			<p>通过设置 <code>icon</code> 属性，可以为页签添加一个图标</p>
		</template>
		<template slot="code">{{code}}</template>
	</Example>
</template>

<script>
	import Example from "@/components/example";
	import code from "./code";

	export default {
		components: {
			Example
		},
		data() {
			return {
				code
			};
		}
	};
</script>