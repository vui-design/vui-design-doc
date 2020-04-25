<template>
	<Example vertical id="example-tabs-disabled">
		<template slot="source">
			<vui-tabs>
				<vui-tab-panel name="tab1" title="Tab 1">
					Content of Tab Panel 1
				</vui-tab-panel>
				<vui-tab-panel name="tab2" title="Tab 2" disabled>
					Content of Tab Panel 2
				</vui-tab-panel>
				<vui-tab-panel name="tab3" title="Tab 3">
					Content of Tab Panel 3
				</vui-tab-panel>
			</vui-tabs>
		</template>
		<template slot="title">禁用</template>
		<template slot="describe">
			<p>添加 <code>disabled</code> 属性可以禁用页签。</p>
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