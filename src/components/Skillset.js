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
} from 'react-icons/si'

const Skillset = (props) => {
	return (
		<div className='container-fluid'>
			<div className='row'>
				<div className='col-8 mx-auto'>
					<div className='row my-4 align-items-center'>
						<div className='col-lg-5'>
							<h3 className='text-dark'>A Little on What I Can Do</h3>
							<div className='text-dark mt-4 mb-4 w-50'>
								<hr className='text-dark' />
							</div>
							<div className='d-flex justify-content-left flex-wrap mt-4 mb-5'>
								<ul className='skillset-list'>
									<li className='mb-1'>
										Full-stack generalist &#8212; can work with rendering data in the UI or help build backend APIs to
										get it there
									</li>
									<li className='mb-1'>asfdasfdasfd</li>
									<li className='mb-1'>asfdasfdasfd</li>
									<li className='mb-1'>asfdasfdasfd</li>
									<li className='mb-1'>asfdasfdasfd</li>
								</ul>
							</div>
						</div>
						<div className='col-lg-1 text-center p-0'></div>
						<div className='col-lg-1 text-center p-0'>
							<hr width='1' size='200' />
						</div>
						<div className='col-lg-5'>
							<div className='d-flex justify-content-center flex-wrap align-items-center'>
								<div className='skillset-logo' data-tip='JavaScript'>
									<SiJavascript style={{ color: '#323330' }} />
								</div>
								<div className='skillset-logo' data-tip='TypeScript'>
									<SiTypescript style={{ color: '#007acc' }} />
								</div>
								<div className='skillset-logo' data-tip='Python'>
									<SiPython style={{ color: '#4B8BBE' }} />
								</div>
								<div className='skillset-logo' data-tip='Solidity'>
									<SiEthereum style={{ color: '#3c3c3d' }} />
								</div>
								<div className='skillset-logo' data-tip='React'>
									<SiReact style={{ color: '#61dbfb' }} />
								</div>
								<div className='skillset-logo' data-tip='Node.js'>
									<SiNodeDotJs style={{ color: '#323330' }} />
								</div>
								<div className='skillset-logo' data-tip='Next.js'>
									<SiNextDotJs style={{ color: '#323330' }} />
								</div>
								<div className='skillset-logo' data-tip='PostegreSQL'>
									<SiPostgresql style={{ color: '#0064a5' }} />
								</div>
								<div className='skillset-logo' data-tip='GraphQL'>
									<SiGraphql style={{ color: '#0064a5' }} />
								</div>

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
