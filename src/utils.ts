let DEBOUNCE_TIMER = 0

export const debounce = (callback: Function, time: number) => {
	window.clearTimeout(DEBOUNCE_TIMER)
	DEBOUNCE_TIMER = window.setTimeout(callback, time)
}
