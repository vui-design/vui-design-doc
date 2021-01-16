<template>
	<vui-doc-example v-bind:code="code" id="example-steps-basic-usage">
		<template slot="demo">
			<vui-steps v-bind:step="1">
				<vui-step title="Finished" description="This is a description." />
				<vui-step title="In Progress" description="This is a description." />
				<vui-step title="Waiting" description="This is a description." />
				<vui-step title="Waiting" description="This is a description." />
			</vui-steps>
		</template>
		<template slot="title">基本用法</template>
		<template slot="description">
			<p>简单的步骤条。</p>
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
				code
			};
		}
	};
</script>