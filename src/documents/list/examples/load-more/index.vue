<template>
	<Example vertical id="example-list-load-more">
		<template slot="source">
			<vui-list>
				<vui-list-item v-for="(item, index) in data" v-bind:key="index">
					<vui-list-item-meta v-bind:avatar="item.avatar" v-bind:description="item.description">
						<a slot="title" href="javascript:;">{{item.title}}</a>
					</vui-list-item-meta>
					<template slot="actions">
						<a href="javascript:;">Edit</a>
						<a href="javascript:;">More</a>
					</template>
				</vui-list-item>
				<template slot="more">
					<vui-spin v-if="loading" />
					<a href="javascript:;" v-else v-on:click="handleLoadMore">Click to load more</a>
				</template>
			</vui-list>
		</template>
		<template slot="title">加载更多</template>
		<template slot="describe">
			<p>加载更多。</p>
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
				loading: false,
				data: [
					{
						avatar: "https://dummyimage.com/32x32/2d8cf0/fff",
						title: "List Item Title",
						description: "This is the description of the list item, which may be very long!"
					},
					{
						avatar: "https://dummyimage.com/32x32/2d8cf0/fff",
						title: "List Item Title",
						description: "This is the description of the list item, which may be very long!"
					},
					{
						avatar: "https://dummyimage.com/32x32/2d8cf0/fff",
						title: "List Item Title",
						description: "This is the description of the list item, which may be very long!"
					},
					{
						avatar: "https://dummyimage.com/32x32/2d8cf0/fff",
						title: "List Item Title",
						description: "This is the description of the list item, which may be very long!"
					}
				]
			};
		},
		methods: {
			handleLoadMore() {
				this.loading = true;

				setTimeout(() => {
					let data = [
						{
							avatar: "https://dummyimage.com/32x32/2d8cf0/fff",
							title: "List Item Title",
							description: "This is the description of the list item, which may be very long!"
						},
						{
							avatar: "https://dummyimage.com/32x32/2d8cf0/fff",
							title: "List Item Title",
							description: "This is the description of the list item, which may be very long!"
						},
						{
							avatar: "https://dummyimage.com/32x32/2d8cf0/fff",
							title: "List Item Title",
							description: "This is the description of the list item, which may be very long!"
						},
						{
							avatar: "https://dummyimage.com/32x32/2d8cf0/fff",
							title: "List Item Title",
							description: "This is the description of the list item, which may be very long!"
						}
					];

					this.loading = false;
					this.data = this.data.concat(data);
				}, 3000);
			}
		}
	};
</script>