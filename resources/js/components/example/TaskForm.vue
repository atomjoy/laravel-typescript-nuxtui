<script setup lang="ts">
import { ref } from 'vue';

const task = ref('');

const emit = defineEmits<{
	addTask: [newTask: string];
}>();

function onSubmit(e: Event) {
	if (task.value) {
		emit('addTask', task.value);
		task.value = '';
	} else {
		alert('The task cannot be empty!');
	}

	let form = e.target as HTMLFormElement;
	console.log(form);
}
</script>

<template>
	<form @submit.prevent="onSubmit" method="post" enctype="multipart/form-data">
		<h1>Tasks App</h1>

		<label>New task</label>
		<input type="text" v-model="task" name="task" placeholder="Task content here..." />
		<button>Add Task</button>
	</form>
</template>

<style scoped>
label {
	float: left;
	margin-bottom: 5px;
	font-size: 0.9rem;
	color: #707070;
}
button {
	color: #fff;
	background: #0055ff;
	padding: 10px 20px;
	margin-inline: 20px;
	border-radius: var(--border-radius);
}
input {
	padding: 10px;
	border: 1px solid var(--input-border);
	border-radius: var(--border-radius);
}
.form-wrapper {
	float: left;
	width: 100%;
	margin-block: 20px;
	background: var(--bg-1);
	border-radius: 20px;
	padding: 20px;
}
</style>
