import { EXTERNAL_LINKS } from 'config'
import { useState } from 'preact/hooks'

export default function BurguerMenu() {
	const [isModalOpen, setIsModalOpen] = useState(false)
	const genericHamburgerLine = `h-0.5 w-7 my-1 rounded-full bg-gray-800 ${
		isModalOpen ? 'bg-white' : ''
	} transition ease transform duration-300`

	const MenuItem = ({ label, ...props }: any) => (
		<a class='hover:bg-gray-700 py-2 px-6 rounded-lg transition-all active:scale-95' {...props}>
			{label}
		</a>
	)

	return (
		<>
			<button
				className={`flex flex-col  rounded-lg justify-center items-center group hover:bg-gray-200 p-1 ${
					isModalOpen ? 'bg-gray-800 hover:bg-gray-800' : ''
				}`}
				onClick={() => setIsModalOpen(!isModalOpen)}
			>
				<div
					className={`${genericHamburgerLine} ${
						isModalOpen ? 'rotate-45 translate-y-3  group-hover:opacity-100' : ' group-hover:opacity-100'
					}`}
				/>
				<div className={`${genericHamburgerLine} ${isModalOpen ? 'opacity-0' : ' group-hover:opacity-100'}`} />
				<div
					className={`${genericHamburgerLine} ${
						isModalOpen ? '-rotate-45 -translate-y-2  group-hover:opacity-100' : ' group-hover:opacity-100'
					}`}
				/>
			</button>
			{isModalOpen && (
				<div class='absolute left-0 w-full top-14 bg-white bg-opacity-80 backdrop-blur-sm h-screen'>
					<nav class='grid gap-4 place-items-center rounded-lg p-6 text-white bg-gray-800 text-3xl font-black uppercase'>
						<MenuItem href='/#about' label='About' />
						<MenuItem href='/#experience' label='Experience' />
						<MenuItem href='/#projects' label='Projects' />
						{/* <MenuItem href={EXTERNAL_LINKS.BLOG} target='_blank' rel='noopener noreferrer' label='Blog' /> */}
						<MenuItem href={EXTERNAL_LINKS.LINKEDIN} target='_blank' rel='noopener noreferrer' label='Linkedin' />
					</nav>
				</div>
			)}
		</>
	)
}
