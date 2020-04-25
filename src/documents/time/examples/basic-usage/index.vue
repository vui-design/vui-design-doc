<template>
	<Example vertical id="example-time-basic-usage">
		<template slot="source">
			<div class="example-time-basic-usage">
				<vui-time :time="time1" />
				<br />
				<vui-time :time="time2" />
				<br />
				<vui-time :time="time3" />
				<br />
				<vui-time :time="time4" />
				<br />
				<vui-time :time="time5" />
				<br />
				<vui-time :time="time6" />
			</div>
		</template>
		<template slot="title">基本用法</template>
		<template slot="describe">
			<p>设置一个 <code>Date</code> 对象、日期字符串或时间戳，可自动转换为相对于此时此刻的时间描述。</p>
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
				time1: new Date("2014-01-01"),
				time2: "2019-04-01",
				time3: new Date().getTime() - 5 * 24 * 60 * 60 * 1000,
				time4: new Date().getTime() - 5 * 60 * 60 * 1000,
				time5: new Date().getTime() - 5 * 60 * 1000,
				time6: new Date().getTime()
			};
		}
	};
</script>