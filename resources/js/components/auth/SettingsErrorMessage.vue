<script setup>
const props = defineProps(['error', 'message']);
</script>

<template>
	<div class="alert-info" v-if="props.message">{{ $t(props.message) }}</div>
	<div class="alert-error" v-else-if="props.error">{{ $t(props.error) }}</div>
</template>
