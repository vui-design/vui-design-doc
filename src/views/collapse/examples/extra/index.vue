<template>
	<example v-bind:code="code" id="example-collapse-extra">
		<template slot="demo">
			<vui-collapse>
				<vui-panel title="This is panel header 1" extra="Extra">
					<p>A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.</p>
				</vui-panel>
				<vui-panel title="This is panel header 2">
					<p>A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.</p>
					<vui-badge slot="extra" v-bind:count="10" />
				</vui-panel>
				<vui-panel title="This is panel header 3">
					<p>A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.</p>
					<vui-button slot="extra" size="small">Extra</vui-button>
				</vui-panel>
			</vui-collapse>
		</template>
		<template slot="title">附加内容</template>
		<template slot="description">
			<p>可以在面板标题的右侧添加附加内容。</p>
		</template>
	</example>
</template>

<script>
	import Example from "src/components/example";
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