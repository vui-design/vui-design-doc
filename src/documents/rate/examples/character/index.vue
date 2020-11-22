<template>
	<Example id="example-rate-character">
		<template slot="source">
			<div class="example-rate-character">
				<section>
					<vui-rate allowHalf>
						<vui-icon slot="character" type="heart" />
					</vui-rate>
				</section>
				<section>
					<vui-rate allowHalf character="A" style="font-size: 28px;" />
				</section>
				<section>
					<vui-rate allowHalf character="好" />
				</section>
			</div>
		</template>
		<template slot="title">其他字符</template>
		<template slot="describe">
			<p>可以将星星替换为其他字符，比如字母，数字，字体图标甚至中文。</p>
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

<style>
	.example-rate-character section { display:flex; align-items:center; line-height:1; }
	.example-rate-character section + section { margin-top:16px; }
</style>