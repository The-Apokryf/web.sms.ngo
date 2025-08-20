import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/",
			name: "home",
			component: HomeView,
		},
		{
			path: "/about",
			name: "about",
			component: () => import("../views/AboutView.vue"),
		},
		{
			path: "/contact",
			name: "contact",
			component: () => import("../views/ContactView.vue"),
		},
		{
			path: "/maps",
			name: "COORDINATES",
			redirect: "/about",
		},
		{
			path: "/fb",
			name: "FB PROFILE",
			redirect: "/contact",
		},
		{
			path: "/insta",
			name: "INSTA PROFILE",
			redirect: "/contact",
		},
		{
			path: "/events",
			name: "CALLENDARIUM",
			redirect: "/about",
		},
		{
			path: "/socialmedia",
			name: "SOC-MED",
			redirect: "/contact",
		},
	],
});

export default router;
