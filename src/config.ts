import type { IconEnum, IProjectCard, IExperienceItem, IConfettiProps } from 'types'

export const SITE_TITLE = 'My personal website.'
export const SITE_DESCRIPTION = 'Welcome to my website!'
export const CONTACT_EMAIL = 'rodrigo.alfonso.mm@gmail.com'

export const EXTERNAL_LINKS = {
	LINKEDIN: 'https://www.linkedin.com/in/rodrigo-alfonso-/',
	GITHUB: 'https://github.com/rodri-alfonso',
	BLOG: 'https://www.roalf.dev',
}

export const TECHNOLOGIES_ICONS_LIST: Array<IconEnum> = [
	'javascript',
	'typescript',
	'react',
	'nextjs',
	'html',
	'css',
	'sass',
	'git',
	'vitejs',
	'figma',
	'astrobuild',
	'deno',
	'nodejs',
	'preact',
	'redux',
	'jest',
	'firebase',
	'tailwindcss',
]

export const PROJECTS_LIST: Array<IProjectCard> = [
	{
		title: 'Pocket',
		description: 'A Scrum poker planner in real time for you agile teams.',
		demoLink: 'https://pocket-planning.vercel.app',
		githubLink: 'https://github.com/rodri-alfonso/pocket-planning',
		technologies: ['nextjs', 'tailwindcss', 'firebase'],
	},
	{
		title: 'notion avatar generator',
		description: 'Notion avatar generator by picture, using Cloudinary and IA recognition.',
		demoLink: 'https://notionify.vercel.app/',
		githubLink: 'https://github.com/juanespinola05/notionify',
		technologies: ['vitejs', 'typescript', 'tailwindcss'],
	},
	{
		title: 'tinder clone',
		description: 'Demo of Tinder web based on mobile only to swipe, match and chat in realtime.',
		demoLink: 'https://tinder-clone-pink.vercel.app/login',
		githubLink: 'https://github.com/rodri-alfonso/tinder-clone-public',
		technologies: ['nextjs', 'javascript', 'css', 'firebase'],
	},
	{
		title: 'instagram clone',
		description: 'Demo of the Instagram feed, login, logout. Also create a post, comment and like it.',
		demoLink: 'https://instagram-clone-liard-six.vercel.app',
		githubLink: 'https://github.com/rodri-alfonso/instagram-clone-public',
		technologies: ['nextjs', 'react', 'tailwindcss'],
	},
	{
		title: 'whatsapp clone',
		description: 'Demo of WhatsApp web to create a chat with any email and chat with messages in realtime.',
		demoLink: 'https://whatsapp-clone-private.vercel.app',
		githubLink: 'https://github.com/rodri-alfonso/whatsapp-clone-public',
		technologies: ['nextjs', 'css', 'firebase'],
	},
]

export const EXPERIENCES_LIST: Array<IExperienceItem> = [
	{
		title: 'Frontend Engineer at Movistar (+Applica)',
		fromTo: 'Nov, 2021 - Present',
		responsabilities: [
			'Proposal and delivery of functionalities in the "Mi Movistar" application in web and mobile platforms.',
			' Design, analysis and writing of scalable and reusable frontend interfaces.',
			'Continuous iteration on high impact functionalities for recurring users and experience optimization.',
			'Maintenance of UI components library, a design system, and tools for different teams.',
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
