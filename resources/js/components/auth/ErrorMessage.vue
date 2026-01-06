<script setup>
import { useAuthStore } from '@/stores/auth';
const auth = useAuthStore();
</script>

<template>
	<div class="alert-info" v-if="auth.getMessage">{{ $t(auth.getMessage) }}</div>
	<div class="alert-error" v-else-if="auth.getError">{{ $t(auth.getError) }}</div>
</template>
