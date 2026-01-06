<script setup lang="ts">
import Menu from '@/components/page/Menu.vue';
import Footer from '@/components/page/Footer.vue';
import { type BreadcrumbItem, type User } from '@/types';

interface Payload {
	name: string;
	amount: number;
}

const breadcrumbs: BreadcrumbItem[] = [
	{ title: 'Dashboard', href: '/dashboard' },
	{ title: 'Settings', href: '/settings' },
];

function getUser(): User {
	let user = <User>{ id: 1, name: 'Jax Fish' };
	return user;
}

const submit = (payload: Payload) => {
	console.log(payload, breadcrumbs);
};
</script>

<template>
	<Menu />
	<div class="page-wrapper">
		<h1>{{ $t('Home') }}</h1>
		<p>{{ $t('Page content goes here.') }}</p>
		<button class="fbutton" @click="submit({ name: 'Jax', amount: 123 })">Log to console</button>
	</div>
	<Footer />
</template>

<style>
.fbutton {
	color: #fff;
	background: var(--accent);
	padding: 13px 30px;
	border-radius: 10px;
	margin-block: 20px;
	cursor: pointer;
}
</style>
