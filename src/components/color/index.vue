<template>
	<div class="vui-doc-color" v-bind:class="value === 'transparent' ? 'vui-doc-color-transparent' : ''" v-bind:style="'background-color: ' + value + ';'">
		<div class="vui-doc-color-body">
			<h4 v-bind:style="'color:' + fontColor + ';'">{{title}}</h4>
			<p v-bind:style="'color:' + fontColor + ';'">{{value}}</p>
		</div>
		<div v-if="showFooter" class="vui-doc-color-footer">
			<div v-bind:style="'background-color: ' + light + '; color:' + fontColor + ';'">Light</div>
			<div v-bind:style="'background-color: ' + dark + '; color:' + fontColor + ';'">Dark</div>
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			title: {
				type: String,
				default: undefined
			},
			value: {
				type: String,
				default: undefined
			},
			light: {
				type: String,
				default: undefined
			},
			dark: {
				type: String,
				default: undefined
			},
			showFooter: {
				type: Boolean,
				default: true
			},
			fontColor: {
				type: String,
				default: "#ffffff"
			}
		}
	};
</script>

<style>
	.vui-doc-color { box-sizing:border-box; border-radius:2px; overflow:hidden; }
	.vui-doc-color-transparent { background:transparent url("~src/assets/images/transparent.png") repeat 50% 50%; }
	.vui-doc-color .vui-doc-color-body { padding:24px; }
	.vui-doc-color .vui-doc-color-body h4 { font-size:16px; }
	.vui-doc-color .vui-doc-color-body p { margin-top:16px; opacity:0.7; font-size:14px; }
	.vui-doc-color .vui-doc-color-footer { display:flex; height:48px; }
	.vui-doc-color .vui-doc-color-footer div { flex:1; opacity:0.7; font-size:14px; text-align:center; line-height:48px; }

	.vui-doc-color + .vui-doc-color { margin-top:16px; }
</style>