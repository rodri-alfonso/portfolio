import { debounce } from 'utils'

const sectionsRef = Array.from(document.querySelectorAll('[section-query]')) as Array<HTMLElement>

let prevAnchorRef: HTMLAnchorElement | null
let prevId: string = ''

function handleObserver(entries: any) {
	debounce(() => {
		entries.forEach((entry: any) => {
			let id = entry.target.attributes['section-query'].value

			if (entry.intersectionRatio < 0.52) return
			if (prevId === id) return

			const anchorRef = document.getElementById(`link-${id}`) as HTMLAnchorElement
			// window.history.replaceState(null, '', '#' + id)

			if (prevAnchorRef) prevAnchorRef.classList.remove('active')
			anchorRef.classList.add('active')

			prevAnchorRef = anchorRef
			prevId = id
		})
	}, 160)
}

const observer = new IntersectionObserver(handleObserver, {
	threshold: Array.from({ length: 80 }, (_, x) => x / 80),
	rootMargin: `0px 0px -60px 0px`,
})

for (let section of sectionsRef) {
	observer.observe(section)
}
