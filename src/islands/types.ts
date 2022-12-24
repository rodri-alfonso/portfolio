export interface IAlertProps {
	onClose: () => void
	title: string
	time?: number
	isEphemeral?: boolean
	isConffeti?: boolean
}
