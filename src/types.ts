export type IconEnum =
	| 'javascript'
	| 'brand'
	| 'typescript'
	| 'react'
	| 'html'
	| 'css'
	| 'github'
	| 'link'
	| 'vitejs'
	| 'figma'
	| 'astrobuild'
	| 'sass'
	| 'deno'
	| 'nodejs'
	| 'nextjs'
	| 'git'
	| 'preact'
	| 'redux'
	| 'jest'
	| 'linkedin'
	| 'source'

interface Origin {
	x: number
	y: number
}

export interface IConfettiProps {
	particleCount?: number
	startVelocity?: number
	gravity?: number
	spread?: number
	ticks?: number
	colors?: Array<string>
	origin?: Origin
}

export interface IProjectCard {
	title: string
	description: string
	demoLink: string
	githubLink: string
}

export interface IExperienceItem {
	title: string
	fromTo: string
	responsabilities: Array<string>
	accomplishments: Array<string>
}
