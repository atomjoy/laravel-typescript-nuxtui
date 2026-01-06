// PrimeVue example

import './bootstrap';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { createI18n } from 'vue-i18n';
import lang from './lang';
import router from './router';
import App from './App.vue';
import PrimeVue from 'primevue/config';
import ToastService from 'primevue/toastservice';
// import Aura from '@primeuix/themes/aura';
import Lara from '@primeuix/themes/lara';
import { definePreset, palette } from '@primeuix/themes';
import 'primeicons/primeicons.css';
import './assets/css/main.css';

// custom primary color
const customColors = palette('#0075ff');

const customPreset = definePreset(Lara, {
	// inputVariant: 'filled',
	primitive: {
		borderRadius: {
			none: '0',
			xs: '5px',
			sm: '6px',
			md: '8px',
			lg: '10px',
			xl: '15px',
		},
	},
	semantic: {
		primary: {
			50: customColors['50'],
			100: customColors['100'],
			200: customColors['200'],
			300: customColors['300'],
			400: customColors['400'],
			500: customColors['500'],
			600: customColors['600'],
			700: customColors['700'],
			800: customColors['800'],
			900: customColors['900'],
			950: customColors['950'],
		},
		formField: {
			paddingY: '15px',
			paddingX: '25px',
			borderRadius: '10px',
		},
		colorScheme: {
			light: {
				primary: {
					color: '{primary.500}',
				},
				semantic: {
					focusRing: {
						width: '4px',
						style: 'solid',
						color: '{primary.50}',
						offset: '0px',
					},
					formField: {
						background: '#fcfcfc',
						hoverBorderColor: '{primary.color}',
						focusBorderColor: '{primary.color}',
					},
				},
			},
			dark: {
				primary: {
					color: '{primary.500}',
				},
				surface: {
					0: '#ffffff',
					50: '{stone.50}',
					100: '{stone.100}',
					200: '{stone.200}',
					300: '{stone.300}',
					400: '{stone.400}',
					500: '{stone.500}',
					600: '{stone.600}',
					700: '{stone.700}',
					800: '{stone.800}',
					900: '{stone.900}',
					950: '{stone.900}',
				},
				semantic: {
					focusRing: {
						width: '4px',
						style: 'solid',
						color: '{primary.900}',
						offset: '0px',
					},
					formField: {
						background: '#262626',
						hoverBorderColor: '{primary.color}',
						focusBorderColor: '{primary.color}',
					},
				},
			},
		},
	},
	components: {
		inputgroup: {
			addon: {
				minWidth: '3.25rem',
			},
		},
	},
});

const app = createApp(App);
const i18n = createI18n(lang);
const stores = createPinia();

app.use(i18n);
app.use(stores);
app.use(router);
app.use(ToastService);
app.use(PrimeVue, {
	theme: {
		// preset: Aura,
		preset: customPreset,
		options: {
			prefix: 'p',
			darkModeSelector: '.app-dark',
		},
	},
	locale: {
		currentLocale: 'en',
		dayNames: ['Niedziela', 'Poniedziałek', 'Wtorek', 'Środa', 'Czwartek', 'Piątek', 'Sobota'],
		dayNamesShort: ['Niedz', 'Pon', 'Wt', 'Śr', 'Czw', 'Pt', 'Sob'],
		dayNamesMin: ['Nd', 'Po', 'Wt', 'Śr', 'Cz', 'Pt', 'So'],
		monthNames: ['Styczeń', 'Luty', 'Marzec', 'Kwiecień', 'Maj', 'Czerwiec', 'Lipiec', 'Sierpień', 'Wrzesień', 'Październik', 'Listopad', 'Grudzień'],
		monthNamesShort: ['Sty', 'Lut', 'Mar', 'Kwi', 'Maj', 'Cze', 'Lip', 'Sie', 'Wrz', 'Paź', 'Lis', 'Gru'],
	},
});
app.mount('#app');
