import type { IConfettiProps } from 'types'
import CanvasConfetti from 'canvas-confetti'
import { DEFAULT_CONFETTI_CONFIG, DEFAULT_ALERT_LIFETIME } from 'config'

export const createConfetti = (config: IConfettiProps = DEFAULT_CONFETTI_CONFIG) => {
	CanvasConfetti(config)
}

export const copyToClipboard = async (text: string) => {
	return navigator.clipboard.writeText(text)
}

export const openAlertOnButtonClick = (buttonRef: HTMLButtonElement, alertRef: HTMLDialogElement) => {
	buttonRef.addEventListener('click', () => {
		buttonRef.disabled = true
		alertRef.open = true
		createConfetti()

		setTimeout(() => {
			alertRef.open = false
			buttonRef.disabled = false
		}, DEFAULT_ALERT_LIFETIME)
	})
}

let DEBOUNCE_TIMER = 0

export const debounce = (callback: Function, time: number) => {
	window.clearTimeout(DEBOUNCE_TIMER)
	DEBOUNCE_TIMER = window.setTimeout(callback, time)
}
