import { debounce } from 'utils'

const DEBOUNCE_TIME = 100
const SECTION_QUERY_INDEX = 2
const HERO_HASH = 'hero'

const sectionsRef = Array.from(document.querySelectorAll('[section-query]')) as Array<HTMLElement>

let prevAnchorRef: HTMLAnchorElement | null
let prevHash: string = ''

function handleObserver(entries: Array<IntersectionObserverEntry>) {
	debounce(() => {
		entries.forEach((entry: IntersectionObserverEntry) => {
			let hash: string = entry.target.attributes[SECTION_QUERY_INDEX].value

			const isOverHero = hash === HERO_HASH
			const isOutIntersection = entry.intersectionRatio === 0

			if (prevHash === hash) return prevAnchorRef && prevAnchorRef.classList.add('active')
			if (isOverHero) prevAnchorRef && prevAnchorRef.classList.remove('active')
			if (isOutIntersection || isOverHero) {
				window.history.replaceState(null, '', '/')
				return
			}

			const anchorRef = document.getElementById(`link-${hash}`) as HTMLAnchorElement

			window.history.replaceState(null, '', '#' + hash)

			if (prevAnchorRef) prevAnchorRef.classList.remove('active')
			anchorRef.classList.add('active')

			prevAnchorRef = anchorRef
			prevHash = hash
		})
	}, DEBOUNCE_TIME)
}

const observer = new IntersectionObserver(handleObserver, {
	threshold: Array.from({ length: 100 }, (_, x) => x / 100),
	rootMargin: '-200px 0px -470px 0px',
})

for (let section of sectionsRef) {
	observer.observe(section)
}
