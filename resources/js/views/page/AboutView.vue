<script setup>
import Menu from '@/components/page/Menu.vue';
import Footer from '@/components/page/Footer.vue';
import { ref, shallowRef, useTemplateRef } from 'vue';
import { CalendarDate } from '@internationalized/date';
import { Time } from '@internationalized/date';

const inputDate = useTemplateRef('inputDate');
const color = ref('#00C16A');
const time = shallowRef(new Time(16, 30, 0));
const data = shallowRef(new CalendarDate(2026, 1, 10));
const slider = ref([25, 75]);
const page = ref(5);
const progress = ref(3);
</script>

<template>
	<Menu />
	<div class="page-wrapper">
		<h1>{{ $t('About') }}</h1>
		<p>{{ $t('Page content goes here.') }}</p>

		<div class="form-wrapper">
			<UFormField label="Color" help="Specify the color" required class="text-base">
				<UColorPicker v-model="color" size="xl" />
			</UFormField>

			<UFormField label="Range" help="Specify the range" class="text-base">
				<USlider v-model="slider" tooltip size="xl" />
				<!-- <USlider v-model="slider" tooltip color="secondary" /> -->
			</UFormField>

			<UFormField label="Time" help="Specify the time" class="text-base">
				<UInputTime :hour-cycle="24" :default-value="time" size="xl" icon="i-lucide-clock" />
			</UFormField>

			<UFormField label="Date" help="Specify the date" class="text-base">
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

			<UFormField label="Component" help="Paginate" class="text-base">
				<UPagination v-model:page="page" :items-per-page="20" :total="100" size="xl" active-variant="subtle" />
			</UFormField>

			<UFormField label="Component" help="Progress" class="text-base">
				<UProgress v-model="progress" size="xl" :max="['Waiting...', 'Cloning...', 'Migrating...', 'Deploying...', 'Done!']" />
			</UFormField>
		</div>
	</div>
	<Footer />
</template>

<style>
.form-wrapper {
	float: left;
	width: 100%;
	background: var(--bg-1);
	border-radius: 20px;
	padding: 20px;
}
</style>
