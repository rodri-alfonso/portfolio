import { CONFETTI_URL_IMPORT } from 'config'
import type { IConfettiProps } from 'types'

export const addConfetti = (config?: IConfettiProps) => {
	import(CONFETTI_URL_IMPORT).then(({ default: CanvasConfetti }) => {
		CanvasConfetti(config)
	})
}

export const copyToClipboard = async (text: string) => {
	return navigator.clipboard.writeText(text)
}
