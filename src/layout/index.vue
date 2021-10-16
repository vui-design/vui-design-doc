<template>
	<vui-layout class="layout">
		<vui-header theme="light" class="layout-header">
			<h1 class="logo">
				<router-link to="/">
					<img src="~src/assets/images/logo.svg" />Vui Design
				</router-link>
			</h1>
			<vui-space v-bind:size="40" style="float: right; display: flex;">
				<ul class="nav-list">
					<li class="nav">
						<router-link to="/guide" active-class="active">{{translate("header.guide")}}</router-link>
					</li>
					<li class="nav">
						<router-link to="/components" active-class="active">{{translate("header.components")}}</router-link>
					</li>
				</ul>
				<vui-space style="display: flex;">
					<!--
					<vui-button size="small" style="display: block;" v-on:click="handleChangeLanguage">{{language === "zh-CN" ? "English" : "中文"}}</vui-button>
					-->
					<a href="https://npmjs.org/package/vui-design" target="_blank" class="npm">
						<img src="https://camo.githubusercontent.com/5e58706616d56949dacf3deadaa10179a06bbc69aace9baf79133a22dbd5637e/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f7675692d64657369676e2e7376673f7374796c653d666c61742d737175617265" />
					</a>
					<div class="github">
						<a href="https://github.com/vui-design/vui-design" target="_blank" class="github-repository">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" version="1.1">
								<path d="M0 524.714667c0 223.36 143.146667 413.269333 342.656 482.986666 26.88 6.826667 22.784-12.373333 22.784-25.344v-88.618666c-155.136 18.176-161.322667-84.48-171.818667-101.589334-21.077333-35.968-70.741333-45.141333-55.936-62.250666 35.328-18.176 71.338667 4.608 112.981334 66.261333 30.165333 44.672 89.002667 37.12 118.912 29.653333a144.64 144.64 0 0 1 39.68-69.546666c-160.682667-28.757333-227.712-126.848-227.712-243.541334 0-56.576 18.688-108.586667 55.253333-150.570666-23.296-69.205333 2.176-128.384 5.546667-137.173334 66.474667-5.973333 135.424 47.573333 140.8 51.754667 37.76-10.197333 80.810667-15.573333 128.981333-15.573333 48.426667 0 91.733333 5.546667 129.706667 15.872 12.8-9.813333 76.885333-55.765333 138.666666-50.133334 3.285333 8.789333 28.16 66.602667 6.272 134.826667 37.077333 42.069333 55.936 94.549333 55.936 151.296 0 116.864-67.413333 215.04-228.565333 243.456a145.92 145.92 0 0 1 43.52 104.106667v128.64c0.896 10.282667 0 20.48 17.194667 20.48 202.410667-68.224 348.16-259.541333 348.16-484.906667C1023.018667 242.176 793.941333 13.312 511.573333 13.312 228.864 13.184 0 242.090667 0 524.714667z" fill="#000000"></path>
							</svg>
						</a>
						<a href="https://github.com/vui-design/vui-design/stargazers" target="_blank" class="github-stargazers">7</a>
					</div>
				</vui-space>
			</vui-space>
		</vui-header>
		<vui-layout class="layout-body">
			<vui-sider class="layout-body-sider" showScrollbar v-bind:width="240">
				<a href="https://github.com/vui-design/vui-design-pro" target="_blank" class="ad">
					<img src="~src/assets/images/vui-design-pro.png" />
				</a>
				<div class="menu">
					<vui-menu mode="vertical" theme="light" v-bind:selectedName="$route.path">
						<template v-for="item in menu">
							<vui-menu-item-group v-if="item.group" v-bind:key="item.group">
								<template slot="title">{{translate("menu." + item.group)}}</template>
								<vui-menu-item v-for="child in item.children" v-bind:key="child.name" v-bind:name="child.path" v-bind:to="child.path">
									{{translate("menu." + item.group + "-" + child.name)}}
								</vui-menu-item>
							</vui-menu-item-group>
							<vui-menu-item v-else v-bind:key="item.name" v-bind:name="item.path" v-bind:to="item.path">
								{{translate("menu." + item.name)}}
							</vui-menu-item>
						</template>
					</vui-menu>
				</div>
			</vui-sider>
			<vui-layout class="layout-body-content">
				<vui-content class="layout-body-content-body">
					<div class="article">
						<div class="article-content">
							<router-view v-bind:key="$route.fullPath" />
						</div>
						<div class="article-anchors">
							<vui-anchor v-bind:offset="96" v-bind:offsetTop="96" v-on:click="handleClickAnchor">
								<vui-anchor-link v-for="anchor in anchors" v-bind:key="anchor" v-bind:href="'#' + anchor" v-bind:title="getAnchorTitle(anchor)" />
							</vui-anchor>
						</div>
					</div>
				</vui-content>
				<vui-footer class="layout-body-content-footer">
					<p>© 2018-{{year}} Coded By Dingwei</p>
				</vui-footer>
			</vui-layout>
		</vui-layout>
		<vui-backtop />
	</vui-layout>
</template>

<script>
	import { createNamespacedHelpers } from "vuex";
	import MixinLocale from "src/mixins/locale";
	import getMenuByRoutes from "src/utils/getMenuByRoutes";

	const { mapState, mapMutations } = createNamespacedHelpers("app");

	export default {
		mixins: [
			MixinLocale
		],
		data() {
			return {

			};
		},
		computed: {
			...mapState({
				year: state => state.year,
				language: state => state.language,
				menu: state => state.menu,
				anchors: state => state.anchors
			})
		},
		methods: {
			...mapMutations([
				"setLanguage",
				"setMenu"
			]),
			getAnchorTitle(anchor) {
				return this.translate("anchors." + anchor);
			},
			handleChangeLanguage() {
				const language = this.language === "zh-CN" ? "en-US" : "zh-CN";

				this.$i18n.locale = language;
				this.setLanguage(language);
			},
			handleClickAnchor(e, link) {
				e.preventDefault();
			}
		},
		created() {
			this.setMenu(this.$router.options.routes);
		}
	};
</script>

<style>
	.layout { position:relative; z-index:1; min-height:100vh; background-color:#fff; padding-top:64px; }

	.layout-header { position:fixed; top:0; left:0; right:0; z-index:100; border-bottom:1px solid #f0f0f0; padding:0 20px; }
	.layout-header .logo { float:left; display:block; padding:16px 0; }
	.layout-header .logo a { display:block; color:rgba(0,0,0,0.85); font-size:18px; font-weight:500; line-height:32px; }
	.layout-header .logo img { float:left; display:block; width:32px; height:32px; margin-right:16px; }
	.layout-header .nav-list { float:left; height:64px; }
	.layout-header .nav { float:left; height:64px; }
	.layout-header .nav a { display:block; height:64px; border-bottom:2px solid transparent; color:rgba(0,0,0,0.85); font-size:16px; line-height:64px; transition:all 0.2s; }
	.layout-header .nav a:hover { border-bottom-color:#2d8cf0; color:#2d8cf0; }
	.layout-header .nav a.active { border-bottom-color:#2d8cf0; color:#2d8cf0; }
	.layout-header .nav + .nav { margin-left:40px; }
	.layout-header .npm { float:left; display:block; height:20px; }
	.layout-header .npm img { display:block; max-height:100%; }
	.layout-header .github { float:left; display:block; }
	.layout-header .github .github-repository { float:left; display:block; width:20px; height:20px; margin:2px 0; }
	.layout-header .github .github-repository svg { display:block; width:100%; height:100%; }
	.layout-header .github .github-stargazers { float:left; position:relative; display:block; border:1px solid #e0e0e0; border-radius:2px; background-color:#fff; margin-left:12px; padding:4px 8px; color:rgba(0,0,0,0.85); font-size:14px; line-height:1; }
	.layout-header .github .github-stargazers:before { content:""; position:absolute; top:50%; left:0; width:8px; height:8px; border-width:1px; border-style:solid; border-color:#e0e0e0 transparent transparent #e0e0e0; border-radius:2px; background-color:#fff; margin-top:-4px; margin-left:-4px; transform:rotate(-45deg); }

	.layout-body { background-color:#fff; }
	.layout-body-sider { position:fixed; left:0; top:0; bottom:0; border-right:1px solid #f0f0f0; background-color:#fff; padding-top:64px; }
	.layout-body-sider .ad { display:block; height:84px; border-radius:2px; background-color:#fafafa; margin:16px 16px 0 16px; overflow:hidden; opacity:0.9; transition:all 0.2s; }
	.layout-body-sider .ad img { display:block; width:100%; }
	.layout-body-sider .ad:hover { opacity:1; }
	.layout-body-sider .menu { padding:16px 0; }
	.layout-body-content { background-color:#fff; padding-left:241px; }
	.layout-body-content .layout-body-content-body { padding:32px; }
	.layout-body-content .layout-body-content-footer { border-top:1px solid #f0f0f0; padding:32px; text-align:center; }
	.layout-body-content .article { display:flex; align-items:stretch; }
	.layout-body-content .article-content { flex:1; overflow:hidden; }
	.layout-body-content .article-anchors { width:120px; margin-left:32px; }
	.layout-body-content .article-anchors .vui-anchor { font-size:12px; }
</style>