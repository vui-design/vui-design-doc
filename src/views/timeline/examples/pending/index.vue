<template>
	<vui-doc-example v-bind:code="code" id="example-timeline-pending">
		<template slot="demo">
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
		<template slot="description">
			<p>通过 <code>pending</code> 属性来标记最后一个为幽灵节点，表示还未完成。</p>
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