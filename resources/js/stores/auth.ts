import { ref, computed } from 'vue';
import { defineStore, storeToRefs } from 'pinia';
import axios from 'axios';

export const useAuthStore = defineStore('auth', () => {
	// State
	const user = ref(null);
	const error = ref(null);
	const errors = ref(null);
	const message = ref(null);

	// Getters
	const getUser = computed(() => user.value);
	const getError = computed(() => error.value);
	const getErrors = computed(() => errors.value);
	const getMessage = computed(() => message.value);

	const isLoggedIn = computed(() => {
		if (user.value != null && typeof user.value === 'object' && parseInt(user.value.id) > 0) {
			return true;
		}
		return false;
	});

	// Actions
	async function isAuthenticated() {
		try {
			// await axios.get('/sanctum/csrf-cookie').then(async (response) => {
			let { data } = await axios.get('/web/api/logged');
			user.value = data?.user;
			console.log('Authenticated');
			// });
		} catch (err) {
			user.value = null;
			console.log('Unauthenticated');
		}
	}

	async function changeLocale(locale) {
		try {
			let res = await axios.get('/web/api/locale/' + locale);
			console.log('Locale', res?.data);
		} catch (err) {
			console.log('Locale err', err?.response?.data?.error ?? err?.message ?? 'Ups! Invalid data');
		}
	}

	function hasRole(role, guard = 'web') {
		const user_roles = user.value.roles ?? [];
		for (let index = 0; index < user_roles.length; index++) {
			const o = user_roles[index];
			if (o.name == role && o.guard_name == guard) {
				return true;
			}
		}
		return false;
	}

	function setMessage(res) {
		clear();
		message.value = res.data.message ?? null;
	}

	function setErrors(err) {
		clear();
		errors.value = err.response.data.errors ?? null;
		error.value = err?.response?.data?.error ?? err?.message ?? null;
	}

	function clear() {
		message.value = null;
		errors.value = null;
		error.value = null;
	}

	function logout() {
		clear();
		user.value = null;
	}

	function scrollTop() {
		window.scrollTo({ top: 1, behavior: 'smooth' });
	}

	function scrollTo(id = '.page_contact') {
		const el = document.querySelector(id);
		const rect = el.getBoundingClientRect();
		window.scrollTo({ top: rect.top + window.scrollY - 50, behavior: 'smooth' });
	}

	return {
		logout,
		hasRole,
		scrollTo,
		scrollTop,
		changeLocale,
		isAuthenticated,
		setMessage,
		setErrors,
		clear,
		isLoggedIn,
		getMessage,
		getErrors,
		getError,
		getUser,
	};
});
