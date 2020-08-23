<template>
	<Example vertical id="example-tabs-custom-title">
		<template slot="source">
			<vui-tabs>
				<vui-tab-panel key="tab1">
					<template slot="title">
						<span style="margin-right: 8px; vertical-align: middle;">Tab 1</span>
						<vui-badge status="error" />
					</template>
					Content of Tab Panel 1
				</vui-tab-panel>
				<vui-tab-panel key="tab2" title="Tab 2">Content of Tab Panel 2</vui-tab-panel>
				<vui-tab-panel key="tab3" title="Tab 3">Content of Tab Panel 3</vui-tab-panel>
			</vui-tabs>
		</template>
		<template slot="title">自定义标题</template>
		<template slot="describe">
			<p>可以通过具名 <code>slot</code> 来实现自定义页签标题。</p>
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