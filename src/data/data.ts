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
		content: 'Madrid, Spain',
	},
	{
		icon: mdiPhone,
		content: '(+34) 611490147',
		link: 'tel:+34611490147',
	},
	{
		icon: mdiEmail,
		content: 'me@elizabeth.sh',
		link: 'mailto:me@elizabeth.sh',
	},
	{
		icon: mdiLinkedin,
		content: 'elizabeth-dev',
		link: 'https://linkedin.com/in/elizabeth-dev/',
	},
	{
		icon: mdiGithub,
		content: 'elizabeth-dev',
		link: 'https://github.com/elizabeth-dev/',
	},
];

export const description =
	'Full Stack Developer with experience in microservice development, mainly using Node.js and Go, and specially oriented towards event-driven architectures. Skilled in front-end development with React.js and Angular, and curious about mobile development, mainly on Android with React Native. Enthusiastic about new technologies and acquiring new skills.';

export const experience: ISectionData[] = [
	{
		title: 'Senior Full Stack Developer',
		info: [
			{
				icon: mdiCalendar,
				text: 'April 2021 - Present',
			},
			{
				icon: mdiDomain,
				text: 'Sngular',
			},
			{
				icon: mdiWrench,
				text: 'Worked with a customer in the banking sector. The project required a high functional knowledge of the product, as the goal was to organize and standardize the internal development processes of the company. The tech stack mainly included Typescript and Vue, running in a Kubernetes cluster in GCP.',
			},
		],
	},
	{
		title: 'Full Stack Developer',
		info: [
			{
				icon: mdiCalendar,
				text: 'October 2018 - April 2021',
			},
			{
				icon: mdiDomain,
				text: 'Inetum',
			},
			{
				icon: mdiWrench,
				text: 'Worked in several projects, including an upgrade to a booking system into a microservice architecture in Java, and the development of a meeting rooms and working desks management system, using React.js and a serverless back-end in Node.js.',
			},
		],
	},
];

export const trainingData: ISectionData[] = [
	{
		title: 'Associate Degree on Web Application Development',
		info: [
			{
				icon: mdiCalendar,
				text: 'May 2019 - May 2021',
			},
			{
				icon: mdiSchool,
				text: 'Open exams, IES El Cañaveral',
			},
		],
	},
	{
		title: 'Associate Degree on IT Systems Management',
		info: [
			{
				icon: mdiCalendar,
				text: 'September 2017 - May 2019',
			},
			{
				icon: mdiSchool,
				text: 'IES Clara del Rey',
			},
		],
	},
];

export const certData: ISectionData[] = [
	{
		title: 'Google Professional Cloud Architect',
		info: [
			{
				icon: mdiCalendar,
				text: 'December 2019 - December 2023',
			},
		],
	},
	{
		title: 'Google Professional Cloud Security Engineer',
		info: [
			{
				icon: mdiCalendar,
				text: 'December 2019 - December 2023',
			},
		],
	},
	{
		title: 'Microsoft Azure Fundamentals',
		info: [
			{
				icon: mdiCalendar,
				text: 'December 2020 - December 2022',
			},
		],
	},
	{
		title: 'Vocational Education Olympics - Silver Medal',
		info: [
			{
				icon: mdiCalendar,
				text: 'March 2019',
			},
			{
				icon: mdiTrophy,
				text: 'IT Network Systems Administration',
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
				text: 'December 2019 - Present',
			},
			{
				icon: mdiInformationOutline,
				text: 'PoC for a microblogging social network, mainly for learning purposes. Includes a mobile app developed with React Native, and a monolithic back-end with Go using a DDD approach. May upgrade to a microservice architecture in the future, using event sourcing.',
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
	{ title: 'Reactive programming' },
	{ title: 'Kubernetes' },
	{ title: 'Node.js' },
];

export const languages: { title: string; subtitle: string }[] = [
	{
		title: 'Spanish',
		subtitle: 'Native',
	},
	{
		title: 'English',
		subtitle: 'High level',
	},
];
