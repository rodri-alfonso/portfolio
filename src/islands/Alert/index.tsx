import styles from './styles.module.css'
import { useEffect } from 'react'
import { addConfetti } from 'utils'
import type { IAlertProps } from 'islands/types'
import type { IConfettiProps } from 'types'

const DEFAULT_MAX_LIFE_TIME = 2000

function Alert(props: IAlertProps) {
	const { onClose, isEphemeral, isConffeti, title, time = DEFAULT_MAX_LIFE_TIME } = props

	const confettiConfig: IConfettiProps = {
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

	useEffect(() => {
		if (isConffeti) addConfetti(confettiConfig)

		if (isEphemeral) {
			setTimeout(() => {
				onClose()
			}, time)
		}
	}, [])

	return (
		<div className={styles.modal_container}>
			<div className={styles.modal_content}>
				<p>{title}</p>
				{!isEphemeral && (
					<span onClick={onClose}>
						<CloseIcon />
					</span>
				)}
			</div>
		</div>
	)
}

export default Alert

const CloseIcon = () => {
	return (
		<svg fill='currentColor' viewBox='0 0 20 20' width='16px' height='16px' xmlns='http://www.w3.org/2000/svg'>
			<path
				fillRule='evenodd'
				d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
				clipRule='evenodd'
			></path>
		</svg>
	)
}
