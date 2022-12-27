import type { IconEnum, IProjectCard, IExperienceItem } from 'types'

export const SITE_TITLE = 'My personal website.'
export const SITE_DESCRIPTION = 'Welcome to my website!'
export const CONTACT_EMAIL = 'rodrigo.alfonso.mm@gmail.com'
export const CONFETTI_URL_IMPORT =
	'https://cdn.skypack.dev/pin/canvas-confetti@v1.6.0-t438JJTXIbBReqvLtDua/mode=imports,min/optimized/canvas-confetti.js'

export const TECHNOLOGIES_ICONS_LIST: Array<IconEnum> = [
	'javascript',
	'typescript',
	'react',
	'html',
	'css',
	'vitejs',
	'figma',
	'astro',
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
		title: 'tinder clone',
		description: 'DEMO Tinder clone. You can match with someone and chat in realtime ',
		demoLink: 'https://github.com/rodri-alfonso',
		githubLink: 'https://github.com/rodri-alfonso',
	},
	{
		title: 'tinder clone',
		description: 'DEMO Tinder clone. You can match with someone and chat in realtime ',
		demoLink: 'https://github.com/rodri-alfonso',
		githubLink: 'https://github.com/rodri-alfonso',
	},
	{
		title: 'tinder clone',
		description: 'DEMO Tinder clone. You can match with someone and chat in realtime ',
		demoLink: 'https://github.com/rodri-alfonso',
		githubLink: 'https://github.com/rodri-alfonso',
	},
	{
		title: 'tinder clone',
		description: 'DEMO Tinder clone. You can match with someone and chat in realtime ',
		demoLink: 'https://github.com/rodri-alfonso',
		githubLink: 'https://github.com/rodri-alfonso',
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
