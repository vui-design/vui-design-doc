<template>
	<div class="header">
		<h1 class="logo">
			<router-link to="/">
				<img src="../../assets/images/logo.svg" />Vui Design
			</router-link>
		</h1>
		<ul class="nav-list">
			<li class="nav">
				<router-link to="/guide" active-class="active">{{translate("header", "guide")}}</router-link>
			</li>
			<li class="nav">
				<router-link to="/components" active-class="active">{{translate("header", "components")}}</router-link>
			</li>
			<!--
			<li class="nav">
				<a href="javascript:;">{{translate("header", "ecosystem")}}</a>
			</li>
			-->
		</ul>
		<div class="pull-right" style="padding: 17px 0;">
			<div class="algolia-search">
				<vui-input type="text" :placeholder="translate('header', 'placeholder')" />
			</div>
			<vui-button href="https://github.com/vui-design/" target="_blank">{{translate("header", "github")}}</vui-button>
		</div>
	</div>
</template>

<script>
	import { mapState, mapMutations } from "vuex";
	import mixinTranslate from "@/mixins/translate";

	export default {
		name: "Header",
		mixins: [
			mixinTranslate
		],
		computed: {
			...mapState({
				language: state => state.app.language
			})
		},
		methods: {
			...mapMutations([
				"setLanguage"
			]),
			handleSetLanguage() {
				const newLanguage = this.language === "zh-CN" ? "en-US" : "zh-CN";

				this.$i18n.locale = newLanguage;
				this.setLanguage(newLanguage);
			}
		}
	};
</script>

<style>
	.header { height:68px; border-bottom:1px solid #e6e6e6; background-color:#fff; padding:0 20px; }
	.header .logo { float:left; display:block; height:36px; padding:16px 0; }
	.header .logo a { display:block; height:36px; color:#35495e; font-size:16px; font-weight:600; line-height:36px; }
	.header .logo img { float:left; display:block; width:36px; height:36px; margin-right:10px; }
	.header .nav-list { float:left; height:68px; margin-left:50px; }
	.header .nav { float:left; height:68px; }
	.header .nav a { display:block; height:68px; border-bottom:1px solid transparent; padding:0 15px; color:#666; font-size:16px; line-height:68px; transition:all 0.2s; }
	.header .nav a:hover { border-bottom-color:#2d8cf0; color:#2d8cf0; }
	.header .nav a.active { border-bottom-color:#2d8cf0; color:#2d8cf0; }
	.header .algolia-search { float:left; width:140px; }
	.header .vui-button { float:left; margin-left:10px; }
</style>