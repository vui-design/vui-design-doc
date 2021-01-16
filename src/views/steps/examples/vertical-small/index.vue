<template>
	<vui-doc-example v-bind:code="code" id="example-steps-vertical-small">
		<template slot="demo">
			<vui-steps direction="vertical" size="small" v-bind:step="1">
				<vui-step title="Finished" description="This is a description." />
				<vui-step title="In Progress" description="This is a description." />
				<vui-step title="Waiting" description="This is a description." />
				<vui-step title="Waiting" description="This is a description." />
			</vui-steps>
		</template>
		<template slot="title">纵向的小型步骤条</template>
		<template slot="description">
			<p>纵向的小型步骤条。</p>
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