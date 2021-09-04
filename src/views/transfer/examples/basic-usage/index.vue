<template>
	<example v-bind:code="code" id="example-transfer-basic-usage">
		<template slot="demo">
			<vui-transfer
				v-bind:titles="titles"
				v-bind:options="options"
				v-bind:selectedKeys="selectedKeys"
				v-bind:targetKeys="targetKeys"
				v-bind:formatter="formatter"
				v-on:scroll="handleScroll"
				v-on:select="handleSelect"
				v-on:change="handleChange"
			/>
		</template>
		<template slot="title">基本用法</template>
		<template slot="description">
			<p>最基本的用法，展示了 <code>titles</code>、<code>options</code>、<code>selectedKeys</code>、<code>targetKeys</code>、选项的渲染函数 <code>formatter</code> 以及回调函数 <code>onScroll</code>、<code>onSelect</code>、<code>onChange</code> 的用法。</p>
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
			const dataSource = this.getDataSource();

			return {
				code,
				titles: ["Source", "Target"],
				options: dataSource.options,
				selectedKeys: [],
				targetKeys: dataSource.targetKeys,
				formatter: option => option.title
			};
		},
		methods: {
			getDataSource() {
				let options = [];
				let targetKeys = [];

				for (let i = 0; i < 20; i++) {
					const key = i + 1;

					options.push({
						key: key,
						title: "Option " + key,
						description: "Description of option " + key
					});

					if (key > 10) {
						targetKeys.push(key);
					}
				}

				return {
					options,
					targetKeys
				};
			},
			handleScroll(e, direction) {
				console.log("target:", e.target);
				console.log("direction:", direction);
			},
			handleSelect(sourceSelectedKeys, targetSelectedKeys) {
				console.log("sourceSelectedKeys:", sourceSelectedKeys, "targetSelectedKeys:", targetSelectedKeys);

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