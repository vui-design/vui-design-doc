<template>
	<Example id="example-steps-dot">
		<template slot="source">
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
		<template slot="describe">
			<p>包含步骤点的进度条。</p>
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