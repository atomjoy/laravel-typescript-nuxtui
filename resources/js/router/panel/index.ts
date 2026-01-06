// import partnerRoutes from './partner';

const adminRoles = ['admin', 'worker', 'super_admin'];

const routes = [
	// Panel
	{
		path: '/panel',
		name: 'panel',
		component: () => import('@/views/panel/DashboardView.vue'),
		meta: { requiresAuth: true },
	},
	// Panel with roles
	{
		path: '/panel/partner',
		name: 'panel.partner',
		component: () => import('@/views/panel/PartnerView.vue'),
		meta: { requiresAuth: true, hasRole: ['partner', ...adminRoles] },
	},
	// Import routes
	// ...partnerRoutes,
];

export default routes;
