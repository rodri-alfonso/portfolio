import { useEffect } from 'preact/hooks'
import { observer, sectionsRef } from 'scripts/sections-observer'

export default function Observer() {
	useEffect(() => {
		for (let section of sectionsRef) {
			observer.observe(section)
		}
		return () => observer.disconnect()
	}, [])
}
