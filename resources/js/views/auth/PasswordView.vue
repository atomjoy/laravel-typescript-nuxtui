<script setup>
import axios from 'axios';
import Menu from '@/components/page/Menu.vue';
import Footer from '@/components/page/Footer.vue';
import Alert from '@/components/auth/Alert.vue';
import ErrorMessage from '@/components/auth/ErrorMessage.vue';
import { useAuthStore } from '@/stores/auth.js';

const auth = useAuthStore();

auth.clear();

async function submit(e) {
	auth.scrollTop();
	try {
		const form = new FormData(e.target);
		let res = await axios.post('/web/api/password', form);
		auth.setMessage(res);
	} catch (err) {
		auth.setErrors(err);
	}
}
</script>
<template>
	<Menu />
	<div class="page-wrapper">
		<form class="auth-form" @submit.prevent="submit" method="post">
			<div class="form-wrapper">
				<div class="form-title">{{ $t('password.Title') }}</div>
				<div class="form-text">{{ $t('password.Welcome_text') }}</div>

				<ErrorMessage />

				<label class="form-label">{{ $t('password.Email_address') }}</label>
				<input class="form-input" type="email" name="email" />
				<Alert name="email" />

				<button class="form-button">{{ $t('password.Send') }}</button>
			</div>

			<RouterLink class="form-link-account font-small" to="/login">{{ $t('password.Account') }}</RouterLink>
		</form>
	</div>
	<Footer />
</template>

<style>
@import url('@/assets/css/auth/auth.css');
</style>
