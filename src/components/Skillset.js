import React from 'react'
import ReactTooltip from 'react-tooltip'
import {
	SiTypescript,
	SiJavascript,
	SiReact,
	SiPostgresql,
	SiGraphql,
	SiEthereum,
	SiNodeDotJs,
	SiNextDotJs,
	SiPython,
	SiRuby,
} from 'react-icons/si'

const Skillset = (props) => {
	const logos = [
		{ icon: SiJavascript, color: '#323330', language: 'JavaScript' },
		{ icon: SiTypescript, color: '#007acc', language: 'TypeScript' },
		{ icon: SiEthereum, color: '#3c3c3d', language: 'Solidity' },
		{ icon: SiPython, color: '#4B8BBE', language: 'Python' },
		{ icon: SiRuby, color: '#cc0000', language: 'Ruby' },
		{ icon: SiReact, color: '#61dbfb', language: 'React' },
		{ icon: SiNodeDotJs, color: '#323330', language: 'Node.js' },
		{ icon: SiNextDotJs, color: '#323330', language: 'Next.js' },
		{ icon: SiPostgresql, color: '#0064a5', language: 'PostgreSQL' },
		{ icon: SiGraphql, color: '#0064a5', language: 'GraphQL' },
	]

	const skills = [
		'Full-stack generalist — can build the UI to render data or help create backend APIs to get it there',
		'Polyglot with primary experience using JavaScript & React',
		'Experience with early stage startups & strong understanding of building user-centric products',
		"Foundation in engineering principles & problem solving — throw anything at me, and I'll figure it out",
	]

	return (
		<div className='container-fluid'>
			<div className='row'>
				<div className='col-10 mx-auto'>
					<div className='row mt-4 align-items-center'>
						<div className='col-lg-6'>
							<h3 className='text-dark'>A Little on What I Can Do</h3>
							<div className='text-dark mt-4 mb-4 w-50'>
								<hr className='text-dark' />
							</div>
							<div className='d-flex justify-content-left flex-wrap mt-4 pe-5'>
								<ul className='skillset-list'>
									{skills.map((skill) => (
										<li className='mb-1'>{skill}</li>
									))}
								</ul>
							</div>
						</div>
						<div className='col-lg-1 text-center p-0 vertical-divider'>
							<hr width='1' size='200' />
						</div>
						<div className='col-lg-6'>
							<div className='d-flex justify-content-center flex-wrap align-items-center px-4'>
								{logos.map((logo, key = 0) => (
									<div className='skillset-logo' data-tip={logo.language} key={key++}>
										<logo.icon style={{ color: logo.color }} />
									</div>
								))}

								<ReactTooltip place='bottom' effect='solid' />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Skillset
