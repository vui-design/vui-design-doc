import Vue from "vue";
import VuiDesign from "vui-design";
import Router from "vue-router";
import title from "@/config/title";
import routes from "./routes";

Vue.use(Router);

const router =  new Router({
	mode: "history",
	scrollBehavior: () => ({ y: 0 }),
	routes
});

router.beforeEach((to, from, next) => {
	VuiDesign.Loading.start();
	next();
});

router.afterEach((to, from) => {
	if (to.meta && to.meta.title) {
		window.document.title = to.meta.title + " - Vui Design";
	}
	else {
		window.document.title = title;
	}

	VuiDesign.Loading.finish();
});

export default router;