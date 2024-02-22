import { createRouter, createWebHashHistory } from "vue-router";
import { useMainStore } from "@/stores";
import { storeToRefs } from "pinia";

const routes = [
	{
		path: "/",
		component: () => import("../views/Home.vue"),
	},
	{
		path: "/noBorder",
		component: () => import("../views/Home_noBorder.vue"),
	},
	{
		path: "/modelViewer",
		component: () => import("../views/ModelViewer.vue"),
	},
];
const router = createRouter({
	history: createWebHashHistory(),
	routes,
});

router.beforeEach((to, from) => {
    const store = useMainStore();
    const { iframeVisible } = storeToRefs(store);
	iframeVisible.value = false;
});

export default router;
