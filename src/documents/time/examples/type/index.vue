<template>
	<Example vertical id="example-time-type">
		<template slot="source">
			<div class="example-time-type">
				<vui-time :time="time" />
				<br />
				<vui-time type="date" :time="time" />
				<br />
				<vui-time type="datetime" :time="time" />
			</div>
		</template>
		<template slot="title">显示类型</template>
		<template slot="describe">
			<p>可以根据情况，设置不同的显示类型。</p>
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
				time: new Date().getTime() - 5 * 24 * 60 * 60 * 1000
			};
		}
	};
</script>