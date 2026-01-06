<template>
	<div class="password_icon">
		<IconEyeClosed v-if="checked" @click="toggle" />
		<IconEyeOpen v-if="!checked" @click="toggle" />
	</div>
</template>

<script setup>
import IconEyeClosed from '@/assets/icons/IconEyeClosed.vue';
import IconEyeOpen from '@/assets/icons/IconEyeOpen.vue';
import { ref } from 'vue';

let checked = ref(true);

const emits = defineEmits(['toggle']);

function toggle() {
	checked.value = !checked.value;
	emits('toggle');
}
</script>

<style>
.password_icon {
	position: relative;
	float: left;
	width: 100%;
	height: 0px;
	z-index: 1;
}

.password_icon svg {
	float: right;
	width: 1.6rem;
	height: 1.6rem;
	margin: 15px;
	cursor: pointer;
	stroke: var(--input-icon);
	stroke-width: 1;
}
</style>
