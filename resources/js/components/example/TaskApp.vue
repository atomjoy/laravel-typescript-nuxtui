<script setup lang="ts">
import type { Task } from '@/types/example';
import { ref } from 'vue';
import TaskForm from './TaskForm.vue';

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

		<h3>There are {{ tasks.length }} tasks.</h3>
		<ol class="list-decimal">
			<li v-for="t in tasks">{{ t.title }} <span v-if="t.done">DONE!</span></li>
		</ol>
	</div>
</template>

<style scoped>
h3 {
	margin-top: 20px;
}
ol li {
	margin-left: 20px;
}
ol li span {
	margin-left: 20px;
	color: #5c5;
	font-weight: 900;
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
