<script setup lang="ts">
// import Menu from '@/components/error/Menu.vue';
// import Footer from '@/components/error/Footer.vue';
</script>

<template>
	<div class="error-page">
		<h1>{{ $t('Error 404') }}</h1>
		<p>{{ $t('Page does not exists!') }}</p>
	</div>
</template>

<style>
.error-page {
	text-align: center;
	min-height: 350px;
}

.error-page h1 {
	font-size: 50px;
	margin-top: 50px;
	color: var(--accent);
}
</style>
