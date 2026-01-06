<script setup>
import axios from 'axios';
import Menu from '@/components/page/Menu.vue';
import Footer from '@/components/page/Footer.vue';
import Alert from '@/components/auth/Alert.vue';
import Checkbox from '@/components/auth/Checkbox.vue';
import ErrorMessage from '@/components/auth/ErrorMessage.vue';
import PasswordIcon from '@/components/auth/PasswordIcon.vue';
import { useAuthStore } from '@/stores/auth.js';
import { ref } from 'vue';

const auth = useAuthStore();
let enabled = ref(false);
let text = ref('password');

auth.clear();

async function submit(e) {
	auth.scrollTop();
	try {
		if (enabled.value) {
			const form = new FormData(e.target);
			let res = await axios.post('/web/api/register', form);
			auth.setMessage(res);
			console.log(res.data);
		}
	} catch (err) {
		auth.setErrors(err);
	}
}

function toggle() {
	enabled.value = !enabled.value;
}

function togglePass() {
	text.value == 'password' ? (text.value = 'text') : (text.value = 'password');
}
</script>
<template>
	<Menu />
	<div class="page-wrapper">
		<form class="auth-form" @submit.prevent="submit" method="post">
			<div class="form-wrapper">
				<div class="form-title">{{ $t('register.Title') }}</div>
				<div class="form-text">{{ $t('register.Welcome_text') }}</div>

				<ErrorMessage />

				<label class="form-label">{{ $t('register.Name') }}</label>
				<input class="form-input" type="text" name="name" />
				<Alert name="name" />

				<label class="form-label">{{ $t('register.Email_address') }}</label>
				<input class="form-input" type="email" name="email" />
				<Alert name="email" />

				<label class="form-label">{{ $t('register.Password') }}</label>
				<PasswordIcon @toggle="togglePass" />
				<input class="form-input" :type="text" name="password" />
				<Alert name="password" />

				<label class="form-label">{{ $t('register.Confirm_password') }}</label>
				<input class="form-input" type="password" name="password_confirmation" />

				<div class="form-row">
					<Checkbox name="policy" value="1" @toggle="toggle" />
					<label class="form-label">
						{{ $t('register.Confirm_services') }}
						<RouterLink class="form-link-docs font-small" to="/docs">{{ $t('register.Policy') }}</RouterLink>
					</label>
				</div>

				<button class="form-button" :disabled="!enabled">{{ $t('register.Register') }}</button>
			</div>

			<RouterLink class="form-link-account font-small" to="/login">{{ $t('register.Login') }}</RouterLink>
		</form>
	</div>
	<Footer />
</template>

<style>
@import url('@/assets/css/auth/auth.css');
</style>
