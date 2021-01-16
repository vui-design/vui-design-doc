<template>
	<vui-doc-example v-bind:code="code" id="example-transfer-basic-usage">
		<template slot="demo">
			<div class="example-transfer-basic-usage">
				<vui-switch v-model="disabled">
					<template slot="checked">Enabled</template>
					<template slot="unchecked">Disabled</template>
				</vui-switch>
				<vui-transfer
					v-bind:titles="titles"
					v-bind:data="data"
					v-bind:selectedKeys="selectedKeys"
					v-bind:targetKeys="targetKeys"
					v-bind:formatter="item => item.title"
					v-bind:searchable="true"
					v-bind:disabled="disabled"
					v-on:select="handleSelect"
					v-on:change="handleChange"
				/>
			</div>
		</template>
		<template slot="title">基本用法</template>
		<template slot="description">
			<p>最基本的用法，展示了 <code>data</code>、<code>targetKeys</code>、每行的渲染函数 <code>formatter</code> 以及回调函数 <code>onChange</code>、<code>onSelectChange</code>、<code>onScroll</code> 的用法。</p>
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
			const data = [];

			for (let i = 0; i < 20; i++) {
				const index = i + 1;

				data.push({
					key: i,
					label: "Option " + index,
					description: "description of content " + index,
					disabled: i % 3 < 1
				});
			}

			const targetKeys = data.filter(item => +item.key % 3 > 1).map(item => item.key);

			return {
				code,
				disabled: false,
				titles: ["Source", "Target"],
				data,
				selectedKeys: [],
				targetKeys
			};
		},
		methods: {
			handleSelect(sourceSelectedKeys, targetSelectedKeys) {
				console.log("sourceSelectedKeys:", sourceSelectedKeys);
				console.log("targetSelectedKeys:", targetSelectedKeys);

				this.selectedKeys = [...sourceSelectedKeys, ...targetSelectedKeys];
			},
			handleChange(nextTargetKeys, direction, moveKeys) {
				console.log("targetKeys:", nextTargetKeys);
				console.log("direction:", direction);
				console.log("moveKeys:", moveKeys);

				this.targetKeys = nextTargetKeys;
			}
		}
	};
</script>

<style>
	.example-transfer-basic-usage .vui-transfer { margin-top:16px; }
</style>