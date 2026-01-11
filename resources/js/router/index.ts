import { createRouter, createWebHistory } from 'vue-router';
import { useAuthStore } from '@/stores/auth.js';
import HomeView from '@/views/page/HomeView.vue';
import authRoutes from './auth';
import panelRoutes from './panel';

const router = createRouter({
	linkActiveClass: 'router-link-active',
	history: createWebHistory('/'),
	routes: [
		...authRoutes,
		...panelRoutes,
		{
			path: '/',
			name: 'home',
			component: HomeView,
		},
		{
			path: '/about',
			name: 'about',
			component: () => import('../views/page/AboutView.vue'),
		},
		{
			path: '/th',
			name: 'th',
			component: () => import('@/components/example/Theme.vue'),
		},
		{
			path: '/:catchAll(.*)',
			name: 'error.page',
			component: () => import('../views/error/404.vue'),
		},
	],
});

router.beforeEach(async (to, from, next) => {
	// ✅ This will work make sure the correct store is used for the current running app
	const auth = useAuthStore();
	// ✅ Login with remember me token and/or check is user authenticated
	await auth.isAuthenticated();
	// ✅ Redirect to panel if logged
	if (to.name == 'login' && auth.isLoggedIn == true) {
		next({ name: 'panel' });
	} else if (to.meta.requiresAuth && auth.isLoggedIn == false) {
		// ✅ Redirect to login if not logged
		next({ name: 'login', query: { redirected_from: to.fullPath } });
	} else {
		// ✅ If roles required
		if (to.meta.hasRole) {
			const roles: any = to.meta.hasRole;
			// ✅ Check allowed roles
			for (let i = 0; i < roles.length; i++) {
				const role = roles[i];
				// ✅ Allow if has role
				if (auth.hasRole(role)) {
					// ✅ Continue
					next();
					return false;
				}
			}
			// ✅ Has not role redirect
			next({ name: 'panel' });
			return false;
		}
		// ✅ Continue
		next();
	}
});

export default router;
