<script setup>
import { useAuthStore } from '@/stores/auth';
const props = defineProps(['name']);
const auth = useAuthStore();
</script>

<template>
	<div class="form_alert" v-if="auth.getErrors" v-for="err in auth.getErrors[name]">
		<!-- <i class="fa-solid fa-triangle-exclamation"></i> -->
		<i class="fa-regular fa-circle-xmark"></i>
		{{ err }}
	</div>
</template>

<style>
.form_alert {
	float: left;
	width: 100%;
	display: flex;
	align-items: baseline;
	margin-top: 5px;
	margin-bottom: 20px;
	font-size: 14px;
	color: var(--alert-error);
}

.form_alert i {
	margin-right: 10px;
}
</style>
