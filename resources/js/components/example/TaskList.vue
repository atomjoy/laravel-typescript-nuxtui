<script setup lang="ts">
import type { Task } from '@/types/example';

const props = defineProps<{
	tasks: Task[];
}>();

// Props defaults
// interface Props {
// 	msg?: string;
// 	labels?: string[];
// }
// const { msg = 'hello', labels = ['one', 'two'] } = defineProps<Props>();
//  const { foo = 'hello' } = defineProps<{ foo?: string }>()
</script>

<template>
	<h3>There are {{ tasks.length }} tasks.</h3>
	<ol class="list-decimal">
		<li v-for="t in props.tasks" :key="t.id">{{ t.title }} <span v-if="t.done">DONE!</span></li>
	</ol>
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
</style>
