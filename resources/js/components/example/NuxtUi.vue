<script setup lang="ts">
import { ref, shallowRef, useTemplateRef } from 'vue';
import { CalendarDate } from '@internationalized/date';
import { Time } from '@internationalized/date';

const inputDate = useTemplateRef('inputDate');
const color = ref('#76DC18');
const time = shallowRef(new Time(16, 30, 0));
const data = shallowRef(new CalendarDate(2026, 1, 10));
const slider = ref([25, 75]);
const page = ref(5);
const progress = ref(3);

const emit = defineEmits<{
	addTask: [newTask: string];
}>();
</script>

<template>
	<div class="form-wrapper">
		<h1>NuxtUi Components</h1>

		<form class="vuxt-form">
			<UFormField label="Color" :help="'Current color: ' + color" required class="text-base vuxt-label"> <UColorPicker v-model="color" size="xl" /> </UFormField>

			<UFormField label="Range" help="Specify the range" class="text-base vuxt-label">
				<USlider v-model="slider" tooltip size="xl" />
				<!-- <USlider v-model="slider" tooltip color="secondary" /> -->
			</UFormField>

			<UFormField label="Time" help="Specify the time" class="text-base vuxt-label">
				<UInputTime :hour-cycle="24" :default-value="time" size="xl" icon="i-lucide-clock" />
			</UFormField>

			<UFormField label="Date" help="Specify the date" class="text-base vuxt-label">
				<UInputDate ref="inputDate" v-model="data" size="xl">
					<template #trailing>
						<UPopover :reference="inputDate?.inputsRef[3]?.$el">
							<UButton color="neutral" variant="link" size="sm" icon="i-lucide-calendar" aria-label="Select a date" class="px-0" />

							<template #content>
								<UCalendar v-model="data" class="p-2" />
							</template>
						</UPopover>
					</template>
				</UInputDate>
			</UFormField>

			<UFormField label="Component" help="Paginate" class="text-base vuxt-label">
				<UPagination v-model:page="page" :items-per-page="20" :total="100" size="xl" active-variant="subtle" />
			</UFormField>

			<UFormField label="Component" help="Progress" class="text-base vuxt-label">
				<UProgress v-model="progress" size="xl" :max="['Waiting...', 'Cloning...', 'Migrating...', 'Deploying...', 'Done!']" />
			</UFormField>
		</form>
	</div>
</template>

<style>
.vuxt-label {
	float: left;
	width: 100%;
	margin-top: 20px;
}
.vuxt-form {
	float: left;
	width: 100%;
	height: auto;
}
</style>
