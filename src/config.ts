import type { IconEnum, IProjectCard, IExperienceItem, IConfettiProps } from 'types'

export const SITE_TITLE = 'My personal website.'
export const SITE_DESCRIPTION = 'Welcome to my website!'
export const CONTACT_EMAIL = 'rodrigo.alfonso.mm@gmail.com'

export const DEFAULT_ALERT_LIFETIME = 2000
export const DEFAULT_CONFETTI_CONFIG: IConfettiProps = {
	particleCount: 32,
	startVelocity: 38,
	gravity: 0.5,
	spread: 70,
	ticks: 140,
	origin: {
		y: 0.3,
		x: 0.5,
	},
}

export const TECHNOLOGIES_ICONS_LIST: Array<IconEnum> = [
	'javascript',
	'typescript',
	'react',
	'html',
	'css',
	'vitejs',
	'figma',
	'astrobuild',
	'sass',
	'deno',
	'nodejs',
	'nextjs',
	'git',
	'preact',
	'redux',
	'jest',
]

export const PROJECTS_LIST: Array<IProjectCard> = [
	{
		title: 'notion avatar generator',
		description: 'Notion avatar generator by picture, using Cloudinary and IA recognition.',
		demoLink: 'https://notionify.vercel.app/',
		githubLink: 'https://github.com/juanespinola05/notionify',
	},
	{
		title: 'tinder clone',
		description: 'Demo of Tinder web based on mobile only to swipe, match and chat in realtime.',
		demoLink: 'https://tinder-clone-pink.vercel.app/login',
		githubLink: 'https://github.com/rodri-alfonso/tinder-clone-public',
	},
	{
		title: 'instagram clone',
		description: 'Demo of the Instagram feed, login, logout. Also create a post, comment and like it.',
		demoLink: 'https://instagram-clone-liard-six.vercel.app',
		githubLink: 'https://github.com/rodri-alfonso/instagram-clone-public',
	},
	{
		title: 'whatsapp clone',
		description: 'Demo of WhatsApp web to create a chat with any email and chat with messages in realtime.',
		demoLink: 'https://whatsapp-clone-private.vercel.app',
		githubLink: 'https://github.com/rodri-alfonso/whatsapp-clone-public',
	},
]

export const EXPERIENCES_LIST: Array<IExperienceItem> = [
	{
		title: 'Frontend Engineer at Movistar',
		fromTo: 'Nov, 2021 - Present',
		responsabilities: [
			'Planning, development, and delivery of B2C functionalities in the "Mi Movistar" application on web and mobile platforms.',
			'Design, analysis and coding of intuitive, scalable and reusable frontend interfaces.',
			'Continuous iteration on functionalities with high user concurrences and optimization of experiences based on NPS metrics',
		],
		accomplishments: [],
	},
	{
		title: 'Frontend developer at Applica',
		fromTo: 'Aug, 2021',
		responsabilities: [
			'SEO friendly and accessible frontend development. Using interfaces with "server side rendering" to optimize response waiting times along with the user experience in a reference application of social networks on a web platform.',
			'Building responsive and user-friendly features with modern CSS code standards.',
		],
		accomplishments: [],
	},
	{
		title: 'UI developer at Appia',
		fromTo: 'Sep, 2020',
		responsabilities: [
			'End-to-end frontend development and delivery of functionalities for a personalization and property management application on a web platform.',
			'Creating reusable components and writing code with SOLID principles.',
			'Generation and iteration of product flows and interfaces together with the design team.',
		],
		accomplishments: [],
	},
]
