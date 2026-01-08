<script setup lang="ts">
import type { Task } from '@/types/example';
import { ref } from 'vue';
import TaskForm from './TaskForm.vue';
import TaskList from './TaskList.vue';

const tasks = ref<Task[]>([
	{
		id: '1',
		title: 'Go to gym!',
		done: false,
	},
	{
		id: '2',
		title: 'Go to park!',
		done: true,
	},
]);

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
		<TaskForm @add-task="addTask" />
		<TaskList :tasks="tasks" />
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
