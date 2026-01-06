<script setup>
import axios from 'axios';
import { useAuthStore } from '@/stores/auth.js';
import Menu from '@/components/page/Menu.vue';
import Footer from '@/components/page/Footer.vue';
import Alert from '@/components/auth/Alert.vue';
import Checkbox from '@/components/auth/Checkbox.vue';
import ErrorMessage from '@/components/auth/ErrorMessage.vue';

const auth = useAuthStore();
auth.clear();

async function submit(e) {
	auth.scrollTop();
	try {
		const form = new FormData(e.target);
		let res = await axios.post('/web/api/login', form);
		console.log(res);
		// // Two factor
		// if (res?.data?.redirect != null) {
		// 	location.href = res?.data?.redirect;
		// } else {
		// 	auth.setMessage(res);
		// 	location.href = '/panel';
		// }
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
				<div class="form-title">{{ $t('login.Title') }}</div>
				<div class="form-text">{{ $t('login.Welcome_text') }}</div>

				<ErrorMessage />

				<label class="form-label">{{ $t('login.Email_address') }}</label>
				<input class="form-input" type="email" name="email" :tabindex="1" />
				<Alert name="email" />

				<label class="form-label">
					{{ $t('login.Password') }}
					<RouterLink class="form-link-password font-small" to="/password">{{ $t('login.Forgot_password') }}</RouterLink>
				</label>
				<input class="form-input" type="password" name="password" :tabindex="2" />
				<Alert name="password" />

				<div class="form-row">
					<Checkbox name="remember_me" value="1" />
					<label class="form-label">{{ $t('login.Remember_me') }}</label>
				</div>

				<button class="form-button">{{ $t('login.Login') }}</button>
			</div>

			<RouterLink class="form-link-account font-small" to="/register">{{ $t('login.Account') }}</RouterLink>
		</form>
	</div>
	<Footer />
</template>

<style>
@import url('@/assets/css/auth/auth.css');
</style>
