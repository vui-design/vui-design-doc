<template>
	<Example vertical id="example-collapse-extra">
		<template slot="source">
			<vui-collapse>
				<vui-panel title="This is panel header 1" extra="Extra">
					<p>A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.</p>
				</vui-panel>
				<vui-panel title="This is panel header 2">
					<p>A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.</p>
					<vui-badge :count="10" slot="extra" />
				</vui-panel>
				<vui-panel title="This is panel header 3">
					<p>A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.</p>
					<vui-button size="small" slot="extra">Extra</vui-button>
				</vui-panel>
			</vui-collapse>
		</template>
		<template slot="title">附加内容</template>
		<template slot="describe">
			<p>可以在面板标题的右侧添加附加内容。</p>
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