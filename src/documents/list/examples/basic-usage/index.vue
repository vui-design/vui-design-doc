<template>
	<Example vertical id="example-list-basic-usage">
		<template slot="source">
			<vui-list>
				<vui-list-item v-for="(item, index) in data" v-bind:key="index">
					<vui-list-item-meta v-bind:avatar="item.avatar" v-bind:description="item.description">
						<a slot="title" href="javascript:;">{{item.title}}</a>
					</vui-list-item-meta>
				</vui-list-item>
			</vui-list>
		</template>
		<template slot="title">基础列表</template>
		<template slot="describe">
			<p>基础列表。</p>
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
				data: [
					{
						avatar: "https://dummyimage.com/32x32/2d8cf0/fff",
						title: "List Item Title 1",
						description: "This is the description of the list item, which may be very long!"
					},
					{
						avatar: "https://dummyimage.com/32x32/2d8cf0/fff",
						title: "List Item Title 2",
						description: "This is the description of the list item, which may be very long!"
					},
					{
						avatar: "https://dummyimage.com/32x32/2d8cf0/fff",
						title: "List Item Title 3",
						description: "This is the description of the list item, which may be very long!"
					},
					{
						avatar: "https://dummyimage.com/32x32/2d8cf0/fff",
						title: "List Item Title 4",
						description: "This is the description of the list item, which may be very long!"
					}
				]
			};
		}
	};
</script>