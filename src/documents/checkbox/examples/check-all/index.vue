<template>
	<Example vertical id="example-checkbox-check-all">
		<template slot="source">
			<div class="example-checkbox-check-all">
				<vui-checkbox :indeterminate="indeterminate" :checked="checkAll" @change="handleChange">Check All</vui-checkbox>
				<div style="margin-top: 15px; font-size: 0;">
					<vui-checkbox-group :options="options" v-model="checkedList" @change="handleGroupChange" />
				</div>
			</div>
		</template>
		<template slot="title">全选</template>
		<template slot="describe">
			<p>在实现全选效果时，你可能会用到 <code>indeterminate</code> 属性。</p>
		</template>
		<template slot="code">{{code}}</template>
	</Example>
</template>

<script>
	import Example from "@/components/example";
	import code from "./code";

	let options = ["A", "B", "C", "D"];
	let checkedList = ["A"];
	let indeterminate = checkedList.length < options.length;

	export default {
		name: "ExampleCheckboxCheckAll",
		components: {
			Example
		},
		data() {
			return {
				code,
				options,
				checkedList,
				indeterminate,
				checkAll: false
			};
		},
		methods: {
			handleChange(checked) {
				this.checkedList = checked ? options : [];
				this.indeterminate = false;
				this.checkAll = checked;
			},
			handleGroupChange(checkedList) {
				this.indeterminate = !!checkedList.length && (checkedList.length < options.length);
				this.checkAll = checkedList.length === options.length;
			}
		}
	};
</script>