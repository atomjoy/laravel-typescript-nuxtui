<script setup lang="ts">
import Menu from '@/components/page/Menu.vue';
import Footer from '@/components/page/Footer.vue';
import NuxtUi from '@/components/example/NuxtUi.vue';
import TaskApp from '@/components/example/TaskApp.vue';
</script>

<template>
	<Menu />
	<div class="page-wrapper">
		<h1>{{ $t('About') }}</h1>
		<p>{{ $t('Page content goes here.') }}</p>
		<TaskApp />
		<NuxtUi />
	</div>
	<Footer />
</template>

<style>
.form-wrapper {
	float: left;
	width: 100%;
	background: var(--bg-1);
	border-radius: 20px;
	padding: 20px;
}
</style>
