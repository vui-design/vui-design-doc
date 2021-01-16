<template>
	<vui-doc-example v-bind:code="code" id="example-steps-dot">
		<template slot="demo">
			<div class="example-steps-dot">
				<vui-steps type="dot" v-bind:step="1">
					<vui-step title="Finished" description="This is a description." />
					<vui-step title="In Progress" description="This is a description." />
					<vui-step title="Waiting" description="This is a description." />
					<vui-step title="Waiting" description="This is a description." />
				</vui-steps>
				<vui-divider dashed />
				<vui-steps type="dot" direction="vertical" v-bind:step="1">
					<vui-step title="Finished" />
					<vui-step title="In Progress" description="This is a description." />
					<vui-step title="Waiting" description="This is a description." />
					<vui-step title="Waiting" description="This is a description." />
				</vui-steps>
			</div>
		</template>
		<template slot="title">点状步骤条</template>
		<template slot="description">
			<p>包含步骤点的进度条。</p>
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