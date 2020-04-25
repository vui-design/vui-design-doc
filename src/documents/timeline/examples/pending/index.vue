<template>
	<Example vertical id="example-timeline-pending">
		<template slot="source">
			<div class="example-timeline-pending">
				<vui-timeline pending>
					<vui-timeline-item>Create a services site 2018-01-01</vui-timeline-item>
					<vui-timeline-item>Solve initial network problems 2018-01-01</vui-timeline-item>
					<vui-timeline-item>Technical testing 2018-01-01</vui-timeline-item>
					<vui-timeline-item>Network problems being solved 2018-01-01</vui-timeline-item>
					<vui-timeline-item>Recording...</vui-timeline-item>
				</vui-timeline>
			</div>
		</template>
		<template slot="title">幽灵节点</template>
		<template slot="describe">
			<p>通过 <code>pending</code> 属性来标记最后一个为幽灵节点，表示还未完成。</p>
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