<template>
	<Example vertical id="example-input-size">
		<template slot="source">
			<div class="example-input-size">
				<section>
					<vui-radio-group type="button" v-model="size">
						<vui-radio label="Small" value="small" />
						<vui-radio label="Medium" value="medium" />
						<vui-radio label="Large" value="large" />
					</vui-radio-group>
				</section>
				<section>
					<vui-input :size="size" placeholder="Enter something..." />
					<vui-input :size="size" suffix="calendar" placeholder="Enter something..." />
					<vui-input :size="size" append="@qq.com" placeholder="Enter something..." />
				</section>
			</div>
		</template>
		<template slot="title">尺寸</template>
		<template slot="describe">
			<p>提供三种尺寸：大、中（默认）、小。</p>
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
				size: "medium"
			};
		}
	};
</script>

<style>
	.example-input-size > section:not(:last-child) { margin-bottom:20px; }
	.example-input-size > section > .vui-input:not(:last-child) { margin-bottom:20px; }
</style>