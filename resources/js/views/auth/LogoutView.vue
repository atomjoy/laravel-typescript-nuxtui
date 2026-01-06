<script setup>
import axios from 'axios';
import Menu from '@/components/page/Menu.vue';
import Footer from '@/components/page/Footer.vue';
import { useAuthStore } from '@/stores/auth.js';
import { onMounted } from 'vue';

const auth = useAuthStore();

onMounted(async () => {
	const res = await axios.get('/web/api/logout');
	console.log(res);
	auth.logout();
	location.href = '/';
});
</script>

<template>
	<Menu />
	<div class="page-wrapper">
		<form class="auth-form">
			<div class="form-wrapper">
				<div class="form-title">{{ $t('Logout') }}</div>
			</div>
		</form>
	</div>
	<Footer />
</template>

<style>
@import url('@/assets/css/auth/auth.css');
</style>
