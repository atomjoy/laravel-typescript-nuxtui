<script setup>
import { RouterLink } from 'vue-router';
import ChangeLocale from '@/components/utils/head/ChangeLocale.vue';
import ChangeTheme from '@/components/utils/head/ChangeTheme.vue';
</script>

<template>
	<nav class="top-menu">
		<RouterLink to="/" class="homepage-link" :title="$t('Homepage')">
			<img src="/default/logo/logo-light.png" class="logo" alt="Logo" />
		</RouterLink>

		<RouterLink to="/" class="router-link" :title="$t('Homepage')">{{ $t('Homepage') }}</RouterLink>
		<RouterLink to="/about" class="router-link" :title="$t('About')">{{ $t('About') }}</RouterLink>
		<RouterLink to="/login" class="router-link" :title="$t('Login')">{{ $t('Login') }}</RouterLink>

		<ChangeLocale />
		<ChangeTheme />
	</nav>
</template>

<style scoped>
.top-menu {
	float: left;
	width: 100%;
	padding: 10px;
	/* border-bottom: 1px solid var(--border); */
}

.router-link {
	display: inline-block;
	padding: 8px 16px;
	margin: 5px;
	font-weight: 500;
	line-height: 28px;
	color: var(--text-1);
}

.router-link:hover {
	color: var(--accent);
}

.router-link-active {
	color: #fff;
	background: #222;
	border-radius: 50px;
}

.router-link-active:hover {
	color: #fff;
	background: var(--accent);
}

.homepage-link {
	float: left;
	background: transparent;
}

.homepage-link:hover {
	background: transparent;
}

.homepage-link .logo {
	display: block;
	margin: 5px;
	height: 40px;
	width: 40px;
}
</style>
