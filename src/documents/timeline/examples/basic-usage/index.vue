<template>
	<Example vertical id="example-timeline-basic-usage">
		<template slot="source">
			<div class="example-timeline-basic-usage">
				<vui-timeline>
					<vui-timeline-item>Create a services site 2018-01-01</vui-timeline-item>
					<vui-timeline-item>Solve initial network problems 2018-01-01</vui-timeline-item>
					<vui-timeline-item>Technical testing 2018-01-01</vui-timeline-item>
					<vui-timeline-item>Network problems being solved 2018-01-01</vui-timeline-item>
				</vui-timeline>
			</div>
		</template>
		<template slot="title">基本用法</template>
		<template slot="describe">
			<p>最简单定义一个时间轴的用法。</p>
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