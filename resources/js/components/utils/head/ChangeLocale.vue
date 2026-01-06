<template>
	<div class="change_locale">
		<select v-model="locale" class="locale_select">
			<option v-for="lang in availableLocales" :key="`locale-${lang}`" :value="lang">
				{{ t(lang) }}
			</option>
		</select>
	</div>
</template>

<script setup>
import axios from 'axios';
import { useI18n } from 'vue-i18n';
import { watch, onMounted } from 'vue';

const { t, locale, availableLocales, fallbackLocale } = useI18n({
	useScope: 'global',
});

const props = defineProps({
	locale_url: { default: '/web/api/locale/' },
});

onMounted(() => {
	locale.value = localStorage.getItem('locale-xxx-locale') ?? fallbackLocale.value ?? 'en';
	console.log('ChangeLocale', locale.value, availableLocales);
});

watch(
	() => locale.value,
	(lang) => {
		localStorage.setItem('locale-xxx-locale', lang);
		changeLocale(lang);
	}
);

async function changeLocale(locale) {
	if (props.locale_url) {
		try {
			let res = await axios.get(props.locale_url + locale);
			// console.log(res);
		} catch (err) {
			console.log('ChangeLocale error', err);
		}
	}
}
</script>

<style scoped>
.change_locale {
	float: right;
	width: auto;
	height: auto;
	cursor: pointer;
}
.change_locale .locale_select {
	box-sizing: border-box;
	float: left;
	height: 45px;
	width: 45px;
	margin: 5px;
	padding: 10px;
	border: 0px;
	cursor: pointer;
	text-align: center;
	font-size: 14px;
	font-weight: 500;
	color: var(--icon-1);
	background: var(--bg-1);
	border-radius: var(--border-radius);
	border: 1px solid var(--border);
	appearance: none;
	--webkit-appearance: none;
}
.change_locale .locale_select option,
.change_locale .locale_select > * {
	background: var(--bg-1);
	color: var(--text-1);
}
.change_locale .locale_select:hover {
	box-shadow: none;
	color: var(--accent);
}
</style>

<!--
import { createI18n } from 'vue-i18n'

const lang = {
  // Allow compositions api (required)
  allowComposition: true,
  globalInjection: true,
  legacy: false,

  // Locales
  locale: 'en',
  fallbackLocale: 'en',
  availableLocales: ['en', 'pl'],
  messages: {
    en: { en: "English", pl: "Polish" },
    pl: { en: "Angielski", pl: "Polski" },
  },
}

const i18n = createI18n(lang)
app.use(i18n)
-->
