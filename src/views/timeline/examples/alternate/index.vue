<template>
	<vui-doc-example v-bind:code="code" id="example-timeline-alternate">
		<template slot="demo">
			<div class="example-timeline-alternate">
				<vui-timeline mode="alternate" pending>
					<vui-timeline-item>
						<h4>2018-01-01</h4>
						<p>Create a services site</p>
					</vui-timeline-item>
					<vui-timeline-item color="red">
						<vui-icon type="time" :size="16" slot="dot" />
						<h4>2018-01-01</h4>
						<p>Solve initial network problems</p>
					</vui-timeline-item>
					<vui-timeline-item>
						<h4>2018-01-01</h4>
						<p>Technical testing</p>
					</vui-timeline-item>
					<vui-timeline-item color="green">
						<h4>2018-01-01</h4>
						<p>Network problems being solved</p>
					</vui-timeline-item>
					<vui-timeline-item>
						<vui-icon type="loading" :size="16" slot="dot" />
						<p>Recording...</p>
					</vui-timeline-item>
				</vui-timeline>
			</div>
		</template>
		<template slot="title">交替显示</template>
		<template slot="description">
			<p>内容在时间轴两侧轮流出现。</p>
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

<style>
	.example-timeline-alternate {  }
	.example-timeline-alternate h4 { margin-bottom:5px; color:#808080; }
	.example-timeline-alternate p { color:#595959; }
</style>