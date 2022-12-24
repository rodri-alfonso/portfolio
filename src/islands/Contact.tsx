import Alert from 'islands/Alert'
import { useState } from 'react'
import { createPortal } from 'react-dom'
import { copyToClipboard } from 'utils'
import { CONTACT_EMAIL } from 'config'

const HEADER_REFERENCE_ID = 'header-id'

function Contact({ ...props }) {
	const [modal, setModal] = useState(false)

	function handleCopy() {
		if (!modal) {
			copyToClipboard(CONTACT_EMAIL).then(() => {
				setModal(true)
			})
		}
	}

	return (
		<div onClick={handleCopy}>
			{props.children}
			{modal &&
				createPortal(
					<Alert isConffeti isEphemeral title='Copied email to clipboard!' onClose={() => setModal(false)} />,
					document.getElementById(HEADER_REFERENCE_ID) as HTMLElement
				)}
		</div>
	)
}

export default Contact
