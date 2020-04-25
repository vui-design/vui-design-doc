<template>
	<Example vertical id="example-spin-state">
		<template slot="source">
			<div class="example-spin-state">
				<h3>登金陵凤凰台</h3>
				<address>李白</address>
				<article>
					<p>凤凰台上凤凰游，凤去台空江自流。</p>
					<p>吴宫花草埋幽径，晋代衣冠成古丘。</p>
					<p>三山半落青天外，二水中分白鹭洲。</p>
					<p>总为浮云能蔽日，长安不见使人愁。</p>
				</article>
				<vui-spin fixed v-if="showSpin" />
			</div>
			<vui-switch v-model="showSpin" style="margin-top: 10px;" />
		</template>
		<template slot="title">状态切换</template>
		<template slot="describe">
			<p>控制 <code>Spin</code> 组件的显示和消失。</p>
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
				showSpin: false
			};
		}
	};
</script>

<style>
	.example-spin-state { position:relative; border:1px solid #e6e6e6; padding:20px; text-align:center; }
</style>
