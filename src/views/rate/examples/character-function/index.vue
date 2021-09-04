<template>
	<example v-bind:code="code" id="example-rate-character-function">
		<template slot="demo">
			<div class="example-rate-character-function">
				<section>
					<vui-rate v-model="value1" v-bind:character="getRateCharacter1" />
				</section>
				<section>
					<vui-rate v-model="value2" v-bind:character="getRateCharacter2" />
				</section>
			</div>
		</template>
		<template slot="title">自定义字符</template>
		<template slot="description">
			<p>可以使用函数类型的 <code>character</code> 属性自定义每一个字符。</p>
		</template>
	</example>
</template>

<script>
	import Example from "src/components/example";
	import code from "./code";

	export default {
		components: {
			Example
		},
		data() {
			return {
				code,
				value1: 2,
				value2: 3
			};
		},
		methods: {
			getRateCharacter1(index) {
				return index + 1;
			},
			getRateCharacter2(index) {
				const h = this.$createElement;
				const types = ["emotion-skull", "emotion-unhappy", "emotion-normal", "emotion-happy", "emotion"];
				const attrs = {
					props: {
						type: types[index]
					}
				};

				return h("vui-icon", attrs);
			}
		}
	};
</script>

<style>
	.example-rate-character-function section { display:flex; align-items:center; line-height:1; }
	.example-rate-character-function section + section { margin-top:16px; }
</style>