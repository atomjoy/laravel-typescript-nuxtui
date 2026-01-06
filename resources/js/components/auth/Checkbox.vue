<template>
	<div class="checkbox_wrapper">
		<div class="checkbox_wrapper_checkmark"><IconCheckmark v-if="checked" /></div>
		<input type="checkbox" class="checkbox_wrapper_field" :value="props.value" :name="props.name" :disabled="props.disabled" v-model="model" @click="emits('toggle')" />
	</div>
</template>

<script setup>
import { computed } from 'vue';
import IconCheckmark from '@/assets/icons/IconCheckmark.vue';

const emits = defineEmits(['toggle']);

const props = defineProps({
	name: { type: String, default: 'remember_me' },
	value: { type: String, required: true, default: 1 },
	disabled: { type: Boolean, default: false },
});

const model = defineModel();

const checked = computed(() => {
	if (model.value instanceof Array) {
		return model.value.includes(props.value);
	}
	return model.value;
});
</script>

<style>
.checkbox_wrapper {
	position: relative;
	float: left;
	width: auto;
	margin-block: 20px;
}

.checkbox_wrapper_checkmark {
	float: left;
	width: auto;
	width: 30px;
	height: 30px;
	min-width: 30px;
	min-height: 30px;
	margin-top: -3px;
	background: var(--input-bg);
	border: 1px solid var(--input-border);
	border-radius: var(--input-radius);
	margin-right: 10px;
	z-index: 0;
}

.checkbox_wrapper_checkmark svg {
	position: absolute;
	box-sizing: border-box;
	top: 0px;
	left: 0px;
	width: 30px;
	height: 30px;
	min-width: 30px;
	min-height: 30px;
	padding: 2px;
	margin-top: -3px;
	color: #fff;
	background: var(--accent);
	border: 1px solid var(--accent);
	border-radius: var(--input-radius);
	text-align: center;
	z-index: 0;
}

.checkbox_wrapper_field {
	position: absolute;
	top: 0px;
	left: 0px;
	width: 30px;
	height: 30px;
	min-width: 30px;
	min-height: 30px;
	margin: 0px;
	opacity: 0;
	z-index: 1;
	cursor: pointer;
}
</style>
