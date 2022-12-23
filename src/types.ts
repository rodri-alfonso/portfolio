export type IconEnum =
	| 'javascript'
	| 'typescript'
	| 'react'
	| 'html'
	| 'css'
	| 'vitejs'
	| 'figma'
	| 'astro'
	| 'sass'
	| 'deno'
	| 'nodejs'
	| 'nextjs'
	| 'git'
	| 'preact'
	| 'redux'
	| 'jest'

export interface IProjectCard {
	title: string
	description: string
	demoLink: string
	githubLink: string
}
