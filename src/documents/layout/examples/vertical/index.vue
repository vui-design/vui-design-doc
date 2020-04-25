<template>
	<Example id="example-layout-vertical">
		<template slot="source">
			<Browser>
				<vui-layout>
					<vui-header theme="dark">
						<h1 style="float: left; width: 124px; height: 30px; background-color: rgba(255,255,255,0.2); margin: 17px 0;" />
						<vui-menu mode="horizontal" theme="dark" selectedName="1" style="float: left; margin-left: 25px; line-height: 64px;">
							<vui-menu-item name="1" title="Item 1" />
							<vui-menu-item name="2" title="Item 2" />
							<vui-menu-item name="3" title="Item 3" />
						</vui-menu>
					</vui-header>
					<vui-content style="padding: 0 50px;">
						<vui-breadcrumb style="margin: 25px 0;">
							<vui-breadcrumb-item>Home</vui-breadcrumb-item>
							<vui-breadcrumb-item>Components</vui-breadcrumb-item>
							<vui-breadcrumb-item>Layout</vui-breadcrumb-item>
						</vui-breadcrumb>
						<div style="min-height: 250px; background-color: #fff; padding: 25px;">Content</div>
					</vui-content>
					<vui-footer style="text-align: center;">2010-2020 © EXAMPLE</vui-footer>
				</vui-layout>
			</Browser>
		</template>
		<template slot="title">垂直布局</template>
		<template slot="describe">
			<p>最基本的『上-中-下』垂直布局。</p>
			<p>一般主导航放置于页面的顶端，从左自右依次为：logo、一级导航项、辅助菜单（用户、设置、通知等）。通常将内容放在固定尺寸（例如：1200px）内，整个页面排版稳定，不受用户终端显示器影响；上下级的结构符合用户上下浏览的习惯，也是较为经典的网站导航模式。页面上下切分的方式提高了主工作区域的信息展示效率，但在纵向空间上会有一些牺牲。此外，由于导航栏水平空间的限制，不适合那些一级导航项很多的信息结构。</p>
		</template>
		<template slot="code">{{code}}</template>
	</Example>
</template>

<script>
	import Example from "@/components/example";
	import Browser from "@/components/browser";
	import code from "./code";

	export default {
		components: {
			Example,
			Browser
		},
		data() {
			return {
				code
			};
		}
	};
</script>