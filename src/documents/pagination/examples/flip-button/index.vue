<template>
	<Example id="example-pagination-flip-button">
		<template slot="source">
			<vui-pagination v-model="page" :total="100" prevPageText="上一页" nextPageText="下一页" />
		</template>
		<template slot="title">翻页按钮文本</template>
		<template slot="describe">
			<p>自定义翻页按钮的文本。</p>
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
				page: 1
			};
		},
		watch: {
			page(value) {
				console.log("page: " + value);
			}
		}
	};
</script>