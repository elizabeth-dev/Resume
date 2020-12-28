import {
	mdiHome,
	mdiPhone,
	mdiEmail,
	mdiCalendar,
	mdiTrophy,
	mdiSchool,
	mdiDomain,
	mdiLinkedin,
	mdiGithub
} from '@mdi/js';
import { IPersonalData, ISectionData } from '../shared/types/Data';

export const personalData: IPersonalData[] = [
	{ icon: mdiHome, content: 'Madrid, España' },
	{ icon: mdiPhone, content: '611490147', link: 'tel:611490147' },
	{ icon: mdiEmail, content: 'me@elizabeth.sh', link: 'mailto:me@elizabeth.sh' },
	{ icon: mdiLinkedin, content: 'elizabeth-dev', link: 'https://linkedin.com/in/elizabeth-dev/' },
	{ icon: mdiGithub, content: 'elizabeth-dev', link: 'https://github.com/elizabeth-dev/' },
];

export const description = 'Cuento con experiencia tanto en el desarrollo de microservicios,' +
	' mediante herramientas como Java, Spring, o Node.js, como aplicaciones front-end,' +
	' especialmente a través de Angular o React.js. También siento interés por el desarrollo en' +
	' Android, ya sea de forma nativa, o mediante frameworks como React Native. Soy una persona' +
	' apasionada por las nuevas tecnologías, siempre dispuesta a seguir adquiriendo nuevas' +
	' habilidades.';

export const experience: ISectionData[] = [
	{
		title: 'Desarrolladora Full-stack',
		info: [
			{ icon: mdiCalendar, text: 'Octubre 2018 - Actualidad' },
			{ icon: mdiDomain, text: 'Inetum' },
		],
	},
];

export const trainingData: ISectionData[] = [
	{
		title: 'Técnico Superior en Desarrollo de Aplicaciones Web',
		info: [
			{ icon: mdiCalendar, text: 'Mayo 2019 - Junio 2020' },
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
		title: 'Microsoft Azure Fundamentals',
		info: [{ icon: mdiCalendar, text: 'Diciembre 2020 - Diciembre 2022' }],
	},
	{
		title: 'Google Professional Cloud Architect',
		info: [{ icon: mdiCalendar, text: 'Diciembre 2019 - Diciembre 2021' }],
	},
	{
		title: 'Google Professional Cloud Security Engineer',
		info: [{ icon: mdiCalendar, text: 'Diciembre 2019 - Diciembre 2021' }],
	},
	{
		title: 'Olimpiadas nacionales de FP - Medalla de plata',
		info: [
			{ icon: mdiCalendar, text: 'Marzo 2019' },
			{
				icon: mdiTrophy,
				text: 'Modalidad TI Administración de sistemas',
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
	{ title: 'NoSQL' },
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
	},
	{
		title: 'Inglés',
		subtitle: 'Alto',
	},
];
