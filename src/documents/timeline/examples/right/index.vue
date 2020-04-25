<template>
	<Example vertical id="example-timeline-right">
		<template slot="source">
			<div class="example-timeline-right">
				<vui-timeline mode="right" pending>
					<vui-timeline-item>Create a services site 2018-01-01</vui-timeline-item>
					<vui-timeline-item color="red">
						<vui-icon type="time" :size="16" slot="dot" />
						Solve initial network problems 2018-01-01
					</vui-timeline-item>
					<vui-timeline-item>Technical testing 2018-01-01</vui-timeline-item>
					<vui-timeline-item color="green">Network problems being solved 2018-01-01</vui-timeline-item>
					<vui-timeline-item>
						<vui-icon type="loading" :size="16" slot="dot" />
						Recording...
					</vui-timeline-item>
				</vui-timeline>
			</div>
		</template>
		<template slot="title">右侧时间轴点</template>
		<template slot="describe">
			<p>时间轴点可以在内容的右边。</p>
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