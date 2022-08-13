import Vue from "vue";
import VuiDesign from "vui-design";
import Router from "vue-router";
import title from "src/config/title";
import routes from "src/routes";

Vue.use(Router);

const env = process.env.NODE_ENV;
const router =  new Router({
	mode: env === "production" ? "hash" : "history",
	scrollBehavior: () => ({ y: 0 }),
	routes
});

router.beforeEach((to, from, next) => {
	VuiDesign.loading.start();
	next();
});

router.afterEach((to, from) => {
	if (to.meta && to.meta.title) {
		window.document.title = to.meta.title + " - Vui Design";
	}
	else {
		window.document.title = title;
	}

	VuiDesign.loading.finish();
});

export default router;