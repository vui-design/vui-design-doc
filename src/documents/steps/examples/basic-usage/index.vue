<template>
	<Example id="example-steps-basic-usage">
		<template slot="source">
			<vui-steps v-bind:step="1">
				<vui-step title="Finished" description="This is a description." />
				<vui-step title="In Progress" description="This is a description." />
				<vui-step title="Waiting" description="This is a description." />
				<vui-step title="Waiting" description="This is a description." />
			</vui-steps>
		</template>
		<template slot="title">基本用法</template>
		<template slot="describe">
			<p>简单的步骤条。</p>
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