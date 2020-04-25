<template>
	<Example vertical id="example-input-number-size">
		<template slot="source">
			<div class="example-input-number-size">
				<section>
					<vui-radio-group type="button" v-model="size">
						<vui-radio label="Small" value="small" />
						<vui-radio label="Medium" value="medium" />
						<vui-radio label="Large" value="large" />
					</vui-radio-group>
				</section>
				<section style="margin-top: 15px;">
					<vui-input-number :size="size" v-model="value" />
				</section>
			</div>
		</template>
		<template slot="title">尺寸</template>
		<template slot="describe">
			<p>三种大小的数字输入框。</p>
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
				size: "medium",
				value: 1
			};
		},
		watch: {
			size(value) {
				console.log(value);
			},
			value(value) {
				console.log(value);
			}
		}
	};
</script>