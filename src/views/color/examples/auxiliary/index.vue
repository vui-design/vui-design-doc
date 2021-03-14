<template>
	<div id="example-color-auxiliary">
		<vui-row v-bind:gutter="16">
			<vui-col v-bind:span="6">
				<vui-doc-color value="#5bc0de" light="#6bc6e1" dark="#52adc8" title="Info" />
			</vui-col>
			<vui-col v-bind:span="6">
				<vui-doc-color value="#faad14" light="#fbb52b" dark="#e19c12" title="Warning" />
			</vui-col>
			<vui-col v-bind:span="6">
				<vui-doc-color value="#52c41a" light="#63ca31" dark="#4ab017" title="Success" />
			</vui-col>
			<vui-col v-bind:span="6">
				<vui-doc-color value="#ff4d4f" light="#ff5f61" dark="#e64547" title="Error" />
			</vui-col>
		</vui-row>
	</div>
</template>

<script>
	import VuiDocColor from "src/components/color";

	export default {
		components: {
			VuiDocColor
		}
	};
</script>