<template>
	<Example vertical id="example-tooltip-customized-content">
		<template slot="source">
			<vui-tooltip>
				<vui-button type="primary">Customized content</vui-button>
				<div slot="content">
					<h4 style="margin-bottom: 5px; font-size:14px; font-weight: 600;">This is title</h4>
					<p>Some descriptions...</p>
				</div>
			</vui-tooltip>
		</template>
		<template slot="title">自定义内容</template>
		<template slot="describe">
			<p>通过 <code>content</code> 插槽自定义更丰富的内容。</p>
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