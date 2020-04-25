<template>
	<Example vertical id="example-time-interval">
		<template slot="source">
			<div class="example-time-interval">
				<vui-time :time="time" :interval="interval" />
			</div>
		</template>
		<template slot="title">更新间隔</template>
		<template slot="describe">
			<p>设置自动更新间隔，默认为 <code>60</code> 秒。</p>
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
				code,
				time: new Date().getTime(),
				interval: 5 * 60
			};
		}
	};
</script>