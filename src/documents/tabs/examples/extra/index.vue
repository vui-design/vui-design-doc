<template>
	<Example vertical id="example-tabs-extra">
		<template slot="source">
			<vui-tabs type="card">
				<vui-tab-panel key="tab1" title="Tab 1">
					Content of Tab Panel 1
				</vui-tab-panel>
				<vui-tab-panel key="tab2" title="Tab 2">
					Content of Tab Panel 2
				</vui-tab-panel>
				<vui-tab-panel key="tab3" title="Tab 3">
					Content of Tab Panel 3
				</vui-tab-panel>
				<vui-button size="small" slot="extra">Extra</vui-button>
			</vui-tabs>
		</template>
		<template slot="title">附加内容</template>
		<template slot="describe">
			<p>可以在页签右侧添加附加内容。</p>
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