<script setup lang="ts">
import type { Task } from '@/types/example';
import { ref } from 'vue';

const task = ref('');
const tasks = ref<Task[]>([]);

const emit = defineEmits<{
	addTask: [newTask: string];
}>();

function onSubmit(e: Event) {
	if (task.value) {
		emit('addTask', task.value);
		addTask(task.value);
		task.value = '';
	}

	let form = e.target as HTMLFormElement;
	console.log(form);
}

function addTask(task: string) {
	tasks.value.push({
		id: crypto.randomUUID(),
		title: task,
		done: false,
	});
}
</script>

<template>
	<div class="form-wrapper">
		<form @submit.prevent="onSubmit" method="post" enctype="multipart/form-data">
			<h1>Tasks App</h1>

			<label for="task">
				New Task
				<input type="text" v-model="task" name="task" />
			</label>
			<button>Add Task</button>

			<h3>There are {{ tasks.length }} tasks.</h3>
		</form>
	</div>
</template>

<style scoped>
.form-wrapper {
	float: left;
	width: 100%;
	margin-block: 20px;
	background: var(--bg-1);
	border-radius: 20px;
	padding: 20px;
}
</style>
