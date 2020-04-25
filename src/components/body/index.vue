<template>
	<div class="body">
		<div class="menu">
			<vui-menu mode="vertical" theme="light" v-bind:selectedName="$route.path">
				<template v-for="item in menu">
					<vui-menu-item-group v-if="item.group" :key="item.group">
						<template slot="title">{{translate("menu", item.group)}}</template>
						<vui-menu-item v-for="child in item.children" :key="child.name" :name="child.path" :to="child.path">
							{{translate("menu", item.group + "-" + child.name)}}
						</vui-menu-item>
					</vui-menu-item-group>
					<vui-menu-item v-else :key="item.name" :name="item.path" :to="item.path">
						{{translate("menu", item.name)}}
					</vui-menu-item>
				</template>
			</vui-menu>
		</div>
		<div class="document">
			<slot></slot>
			<div ref="catalogue" class="catalogue" v-bind:class="affixed ? 'affixed' : ''">
				<div class="catalogue-header">{{ translate("catalogue", "title") }}</div>
				<div class="catalogue-body">
					<ul>
						<li v-for="item in catalogue" v-bind:key="item">
							<a href="javascript:;" v-on:click="handleScrollTo(item)">{{ translate("catalogue", item) }}</a>
						</li>
					</ul>
				</div>
				<div class="catalogue-footer">
					<vui-button icon="chevron-up" v-on:click="handleScrollToTop"></vui-button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import { mapState, mapMutations } from "vuex";
	import MixinTranslate from "@/mixins/translate";
	import getMenuByRoutes from "@/utils/getMenuByRoutes";
	import getElementRectTop from "@/utils/getElementRectTop";
	import getScrollTop from "@/utils/getScrollTop";
	import smoothScrollTo from "@/utils/smoothScrollTo";

	export default {
		mixins: [
			MixinTranslate
		],
		data() {
			return {
				collapsed: false,
				affixed: false,
				rectTop: 0,
				offsetTop: 0
			};
		},
		computed: {
			...mapState({
				menu: state => state.app.menu,
				catalogue: state => state.app.catalogue
			})
		},
		methods: {
			...mapMutations([
				"setMenu"
			]),
			handleScrollTo(id) {
				smoothScrollTo(window, getScrollTop(), getElementRectTop(document.getElementById(id)));
			},
			handleScrollToTop(e) {
				smoothScrollTo(window, getScrollTop(), 0);
			},
			handleWindowScroll(e) {
				this.affixed = getScrollTop() > (this.rectTop - this.offsetTop);
			}
		},
		created() {
			this.setMenu(this.$router.options.routes);
		},
		mounted() {
			const elCatalogue = this.$refs.catalogue;

			this.rectTop = getElementRectTop(elCatalogue);
			this.offsetTop = elCatalogue.offsetTop;

			window.addEventListener("scroll", this.handleWindowScroll);
		},
		beforeDestroy() {
			window.removeEventListener("scroll", this.handleWindowScroll);
		}
	};
</script>

<style>
	.body { display:flex; width:100%; min-height:calc(100vh - 164px); }

	.menu { position:relative; box-sizing:border-box; width:250px; min-height:100%; border-right:1px solid #e6e6e6; }

	.document { position:relative; box-sizing:border-box; width:calc(100% - 250px); min-height:100%; padding:30px 180px 30px 30px; }
	.document .catalogue { position:absolute; top:30px; right:0; width:150px; font-size:12px; line-height:2; }
	.document .catalogue.affixed { position:fixed; top:30px; right:0; }
	.document .catalogue .catalogue-header { border-left:1px dashed #e6e6e6; padding:0 15px; font-weight:600; }
	.document .catalogue .catalogue-body { border-left:1px dashed #e6e6e6; padding:0 15px; }
	.document .catalogue .catalogue-body a { display:block; overflow:hidden; color:#595959; white-space:nowrap; text-overflow:ellipsis; transition:all 0.2s; }
	.document .catalogue .catalogue-body a:hover { color:#4298f2; }
	.document .catalogue .catalogue-body a:active { color:#297ed8; }
	.document .catalogue .catalogue-footer { margin-top:10px; }
</style>