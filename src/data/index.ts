import {
	mdiHome,
	mdiPhone,
	mdiEmail,
	mdiWeb,
	mdiCalendar,
	mdiTrophy,
	mdiSchool,
	mdiDomain,
} from '@mdi/js';
import { IPersonalData, ISectionData } from '../types/Data';

export const personalData: IPersonalData[] = [
	{ icon: mdiHome, content: 'Madrid, España' },
	{ icon: mdiPhone, content: '611490147' },
	{ icon: mdiEmail, content: 'eli@zabeth.es' },
	{ icon: mdiWeb, content: 'https://eli.zabeth.es/' },
];

export const description =
	'Me especializo en el diseño de UI y el uso de frameworks de front-end como React.js o Angular, además, tengo conocimientos para desarrollar plataformas de back-end (APIs REST, microservicios, websockets...) en entornos como Node.js y ciertas nociones de Java. Además de como desarrolladora, también poseo habilidades en la gestión de servidores y redes, tanto en entornos Windows como GNU/Linux.';

export const experience: ISectionData[] = [
	{
		title: 'Desarrolladora Web Full-stack',
		info: [
			{ icon: mdiCalendar, text: 'Octubre 2018 - actualidad' },
			{ icon: mdiDomain, text: 'Informática El Corte Inglés S.A.' },
		],
	},
];

export const trainingData: ISectionData[] = [
	{
		title: 'Grado en Ingeniería Informática',
		info: [
			{
				icon: mdiCalendar,
				text: 'Septiembre 2019 - Mayo 2025 (cursando)',
			},
			{
				icon: mdiSchool,
				text: 'Universidad Nacional de Educación a Distancia',
			},
		],
	},
	{
		title: 'Técnico Superior en Desarrollo de Aplicaciones Web',
		info: [
			{ icon: mdiCalendar, text: 'Mayo 2019 - Junio 2020 (cursando)' },
			{ icon: mdiSchool, text: 'Pruebas libres, IES El Cañaveral' },
		],
	},
	{
		title:
			'Técnico Superior en Administración de Sistemas Informáticos en Red',
		info: [
			{ icon: mdiCalendar, text: 'Septiembre 2017 - Mayo 2019' },
			{ icon: mdiSchool, text: 'IES Clara del Rey' },
		],
	},
	{
		title: 'Título de Bachillerato',
		info: [
			{ icon: mdiCalendar, text: 'Septiembre 2015 - Mayo 2017' },
			{ icon: mdiSchool, text: 'IES Andrés Bello, Tenerife' },
		],
	},
];

export const certData: ISectionData[] = [
	{
		title: 'Google Professional Cloud Architect',
		info: [{ icon: mdiCalendar, text: 'Diciembre 2019 - Diciembre 2021' }],
	},
	{
		title: 'Olimpiadas nacionales de FP. Medalla de plata.',
		info: [
			{ icon: mdiCalendar, text: 'Marzo 2019' },

			{
				icon: mdiTrophy,
				text: 'Modalidad de TI Administración de sistemas',
			},
		],
	},
	{
		title: 'MCSA Windows Server 2012',
		info: [{ icon: mdiCalendar, text: 'Agosto 2017' }],
	},
	{
		title: 'Certificado de nivel avanzado en la lengua inglesa (Nivel B2)',
		info: [
			{ icon: mdiCalendar, text: 'Mayo 2017' },
			{ icon: mdiSchool, text: 'EOI Santa Cruz de Tenerife' },
		],
	},
];

export const knowledge: { title: string }[] = [
	{ title: 'React.js' },
	{ title: 'Angular' },
	{ title: 'Typescript' },
	{ title: 'SQL' },
	{ title: 'React Native' },
	{ title: 'GNU/Linux' },
	{ title: 'CI/CD' },
	{ title: 'Cloud computing' },
	{ title: 'CQRS' },
	{ title: 'Kubernetes' },
	{ title: 'Programación reactiva' },
	{ title: 'Node.js' },
];

export const languages: { title: string; subtitle: string }[] = [
	{
		title: 'Español',
		subtitle: 'Lengua nativa',
	},
	{
		title: 'Catalán',
		subtitle: 'Lengua nativa',
	},
	{
		title: 'Inglés',
		subtitle: 'Avanzado (Nivel B2)',
	},
];
