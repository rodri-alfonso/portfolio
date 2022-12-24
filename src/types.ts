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

export interface IConfettiProps {
	particleCount?: number
	startVelocity?: number
	gravity?: number
	spread?: number
	ticks?: number
	colors?: Array<string>
}
