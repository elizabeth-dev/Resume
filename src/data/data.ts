import {
	mdiCalendar,
	mdiDomain,
	mdiEmail,
	mdiGithub,
	mdiHome,
	mdiInformationOutline,
	mdiLinkedin,
	mdiPhone,
	mdiSchool,
	mdiTrophy,
	mdiWrench,
} from '@mdi/js';
import { IPersonalData, ISectionData } from '../shared/types/Data';

export const personalData: IPersonalData[] = [
	{
		icon: mdiHome,
		content: 'Madrid, España',
	}, {
		icon: mdiPhone,
		content: '611490147',
		link: 'tel:611490147',
	}, {
		icon: mdiEmail,
		content: 'me@elizabeth.sh',
		link: 'mailto:me@elizabeth.sh',
	}, {
		icon: mdiLinkedin,
		content: 'elizabeth-dev',
		link: 'https://linkedin.com/in/elizabeth-dev/',
	}, {
		icon: mdiGithub,
		content: 'elizabeth-dev',
		link: 'https://github.com/elizabeth-dev/',
	},
];

export const description = 'Cuento con experiencia tanto en el desarrollo de microservicios, mediante herramientas' + ' como Java, Spring, o Node.js, como aplicaciones front-end, especialmente a través de Angular o React.js.' + ' Además, últimamente he empezado a explorar opciones más novedosas, como Go o React Native.\nSoy una persona' + ' apasionada por las nuevas tecnologías, siempre dispuesta a seguir adquiriendo nuevas habilidades.';

export const experience: ISectionData[] = [
	{
		title: 'Desarrolladora Full-stack',
		info: [
			{
				icon: mdiCalendar,
				text: 'Octubre 2018 - Actualidad',
			}, {
				icon: mdiDomain,
				text: 'Inetum',
			}, {
				icon: mdiWrench,
				text: 'Participación en diversos proyectos para cliente, que incluyen la evolución de un sistema de ventas mediante una arquitectura de microservicios con Java, y el desarrollo de un gestor de visitas y reserva de espacios, utilizando Angular para el cliente web, y un \nback-end serverless con Node.js.',
			},
		],
	},
];

export const trainingData: ISectionData[] = [
	{
		title: 'Técnico Superior en Desarrollo de Aplicaciones Web',
		info: [
			{
				icon: mdiCalendar,
				text: 'Mayo 2019 - Junio 2020',
			}, {
				icon: mdiSchool,
				text: 'Pruebas libres, IES El Cañaveral',
			},
		],
	}, {
		title: 'Técnico Superior en Administración de Sistemas Informáticos en Red',
		info: [
			{
				icon: mdiCalendar,
				text: 'Septiembre 2017 - Mayo 2019',
			}, {
				icon: mdiSchool,
				text: 'IES Clara del Rey',
			},
		],
	},
];

export const certData: ISectionData[] = [
	{
		title: 'Microsoft Azure Fundamentals',
		info: [
			{
				icon: mdiCalendar,
				text: 'Diciembre 2020 - Diciembre 2022',
			},
		],
	}, {
		title: 'Google Professional Cloud Architect',
		info: [
			{
				icon: mdiCalendar,
				text: 'Diciembre 2019 - Diciembre 2021',
			},
		],
	}, {
		title: 'Google Professional Cloud Security Engineer',
		info: [
			{
				icon: mdiCalendar,
				text: 'Diciembre 2019 - Diciembre 2021',
			},
		],
	}, {
		title: 'Olimpiadas nacionales de FP - Medalla de plata',
		info: [
			{
				icon: mdiCalendar,
				text: 'Marzo 2019',
			}, {
				icon: mdiTrophy,
				text: 'Modalidad TI Administración de Sistemas',
			},
		],
	},
];

export const sideData: ISectionData[] = [
	{
		title: 'Sinope',
		info: [
			{
				icon: mdiCalendar,
				text: 'Diciembre 2019 - Actualidad',
			}, {
				icon: mdiInformationOutline,
				text: 'Prueba de concepto de red social de microblogging. Incluye una aplicación móvil desarrollada en React Native, así como un prototipo de API monolítica en Node.js, en proceso de migración a Go para mayor eficiencia y escalabilidad.',
			},
		],
	},
];

export const knowledge: { title: string }[] = [
	{ title: 'React.js' },
	{ title: 'Angular' },
	{ title: 'Typescript' },
	{ title: 'Java/Kotlin' },
	{ title: 'React Native' },
	{ title: 'Go' },
	{ title: 'CI/CD' },
	{ title: 'Cloud computing' },
	{ title: 'Event sourcing' },
	{ title: 'Programación reactiva' },
	{ title: 'Kubernetes' },
	{ title: 'Node.js' },
];

export const languages: { title: string; subtitle: string }[] = [
	{
		title: 'Español',
		subtitle: 'Lengua nativa',
	}, {
		title: 'Inglés',
		subtitle: 'Alto',
	},
];
