import { mdiEmail, mdiGithub, mdiHome, mdiLinkedin, mdiPhone } from '@mdi/js';
export interface IPersonalData {
	icon: string;
	content: string;
	link?: string;
}

export interface SectionData {
	title: string;
	subtitle?: string;
	links?: { text: string; link: string }[];
	info: { icon?: string; text: string }[];
}

export const personalData: IPersonalData[] = [
	{
		icon: mdiHome,
		content: 'Madrid, Spain',
	},
	{
		icon: mdiPhone,
		content: '(+34) 611 490 147',
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
	'Software Engineer based in Madrid, with over 5 years of experience in the software industry. Skilled in microservice development, mainly using Node.js and Go, and front-end development with React.js.';

export const experience: SectionData[] = [
	{
		title: 'Senior Software Engineer',
		subtitle: 'Sngular, 2021 - Present',
		info: [
			{
				text: `Worked with a customer in the banking sector, helping organize and standardize the internal software development processes of the company. This involved maintaining some high-availability services and coordinating with teams in other countries. The tech stack included Typescript and React.js, and some smaller services in Golang, running in our own K8S cluster.`,
			},
		],
	},
	{
		title: 'Software Engineer',
		subtitle: 'Inetum, 2018 - 2021',
		info: [
			{
				text: `Worked in several projects, from the development of a prototype for a meeting rooms and working desks management system, to working with a customer on the travel sector, upgrading their booking system to a microservice architecture and implementing a BPMN workflow engine. Some of the technologies used included React.js, Node.js, and Spring Boot.`,
			},
		],
	},
];

export const recognitionData: SectionData[] = [
	{
		title: 'DevOps & Cloud Expert',
		subtitle: 'Universidad Internacional de La Rioja, 2021 - 2022',
		info: [],
	},
	{
		title: 'Google Professional Cloud Architect',
		subtitle: '2019 - 2023',
		info: [],
	},
	{
		title: 'Google Professional Cloud Security Engineer',
		subtitle: '2019 - 2023',
		info: [],
	},
	{
		title: 'Vocational Education Olympics - Silver Medal',
		subtitle: 'IT Network Systems Administration category, 2019',
		info: [],
	},
	{
		title: 'Associate Degree on Web Application Development',
		subtitle: 'IES El Cañaveral, 2019 - 2021',
		info: [],
	},
	{
		title: 'Associate Degree on IT Systems Management',
		subtitle: 'IES Clara del Rey, 2017 - 2019',
		info: [],
	},
];

export const languages: { title: string; subtitle: string }[] = [
	{
		title: 'Spanish',
		subtitle: 'Native',
	},
	{
		title: 'Catalan',
		subtitle: 'Native',
	},
	{
		title: 'English',
		subtitle: 'Proficient',
	},
];

export const skills: SectionData[] = [
	{
		title: 'Typescript',
		info: [
			{
				text: `My "native" programming language, I've worked with it for over 5 years. I've used it in the front-end with React.js and Redux, in the back-end for APIs with Node, Express and gRPC, and for testing automation using Mocha and, later on, Jest.`,
			},
		],
	},
	{
		title: 'Golang',
		info: [
			{
				text: `I've been learning Go for the past couple years and I become more interested the more I use it. I think it's the way to go for most back-end services right now. I've mostly used it without any popular frameworks or libraries (and that's what I like the most of it: I don't need them!).`,
			},
		],
	},
	{
		title: 'React.js',
		info: [
			{
				text: `One of the first libraries I learned about. I mostly use it along with Redux for global state management, and I've recently discovered the wonders of SSR with Next.js. I also have some knowledge about using React Native for developing mobile apps.`,
			},
		],
	},
	// {
	// 	title: 'Cloud Computing',
	// 	info: [
	// 		{
	// 			text: `I'm well versed on the definition and implementation of cloud-native architectures. I have experience working with GCP (where I hold two certifications), and AWS, looking forward to get a certification on the latter too.`,
	// 		},
	// 	],
	// },
];
