<script setup lang="ts">
import Menu from '@/components/page/Menu.vue';
import Footer from '@/components/page/Footer.vue';
import NuxtUi from '@/components/NuxtUi.vue';
import { ref, shallowRef, useTemplateRef } from 'vue';
import { CalendarDate } from '@internationalized/date';
import { Time } from '@internationalized/date';

const inputDate = useTemplateRef('inputDate');
const color = ref('#00C16A');
const time = shallowRef(new Time(16, 30, 0));
const data = shallowRef(new CalendarDate(2026, 1, 10));
const slider = ref([25, 75]);
const page = ref(5);
const progress = ref(3);
</script>

<template>
	<Menu />
	<div class="page-wrapper">
		<h1>{{ $t('About') }}</h1>
		<p>{{ $t('Page content goes here.') }}</p>
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
