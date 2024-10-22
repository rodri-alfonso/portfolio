export default function ButttonResume() {
  const NAVIGATOR_LANG = window.navigator.language.includes('es') ? 'ES' : 'EN'

  return (
    <a
      target='_blank'
      // href={`/${NAVIGATOR_LANG}_CV_RODRIGO_ALFONSO.pdf`}
      href={`/EN_CV_RODRIGO_ALFONSO.pdf`}
      class='px-3 py-2 rounded-lg uppercase bg-gray-800 hover:bg-white hover:text-black border-2 border-gray-800 text-white font-semibold transition-all active:scale-95'
    >
      <p>check full resume</p>
    </a>
  )
}
