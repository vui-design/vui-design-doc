<template>
	<vui-doc-example v-bind:code="code" id="example-qrcode-correct-level">
		<template slot="demo">
			<div class="example-qrcode-correct-level">
				<vui-qrcode
					v-bind:correctLevel="0"
					value="https://vui-design.github.io/vui-design-doc/"
				/>
				<vui-qrcode
					v-bind:correctLevel="1"
					value="https://vui-design.github.io/vui-design-doc/"
				/>
				<vui-qrcode
					v-bind:correctLevel="2"
					value="https://vui-design.github.io/vui-design-doc/"
				/>
			</div>
		</template>
		<template slot="title">纠错级别</template>
		<template slot="description">
			<p>纠错级别，可取 <code>0</code>、<code>1</code>、<code>2</code>、<code>3</code>，默认为 <code>3</code>，数字越大说明所需纠错级别越大。</p>
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
	.example-qrcode-correct-level { display:flex; justify-content:flex-start; align-items:flex-start; }
	.example-qrcode-correct-level .vui-qrcode + .vui-qrcode { margin-left:24px; }
</style>