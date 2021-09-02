import React from 'react'
import BasicInfo from './BasicInfo'
import { Icon } from '@iconify/react'
import redCircle from '@iconify/icons-emojione/red-circle'
import yellowCircle from '@iconify/icons-twemoji/yellow-circle'
import greenCircle from '@iconify/icons-twemoji/green-circle'

const About = (props) => {
	return (
		<div className='container-fluid'>
			<div className='row'>
				<div className='col-md-10 mx-auto'>
					<div className='row'>
						<BasicInfo />
						<div className='col-md-8 mt-3'>
							<div className='col-md-10 mx-auto'>
								<div className='card' id='about-me-card'>
									<div
										className='card-header d-flex'
										id='about-me-card-header'
										style={{
											background: '#6d6d6d',
											color: 'white',
											height: '2em',
										}}
									>
										<div id='about-icon-div' style={{ position: 'absolute' }}>
											<Icon icon={redCircle} />
											&nbsp;
											<Icon icon={yellowCircle} />
											&nbsp;
											<Icon icon={greenCircle} />
											&nbsp;
										</div>
										<div className='d-flex justify-content-center' style={{ width: '100%' }}>
											~/.env
										</div>
									</div>
									<div className='card-body font-trebuchet text-justify ml-3 mr-3' id='about-me-content'>
										<p>
											<b>NAME</b>="Dan Buchholz"{' '}
											<span id='pronounciation' className='fw-lighter'>
												{' '}
												# pronounced: BOO-KOLTS
											</span>
										</p>

										<p>
											<b>DESCRIPTION</b>="Passion for startups and all things tech &#8212; Chicago native, currently
											based in San Francisco. Engineering alumn of the{' '}
											<a
												href='https://en.wikipedia.org/wiki/Grainger_College_of_Engineering'
												target='_blank'
												rel='noopener noreferrer'
											>
												University of Illinois at Urbana-Champaign
											</a>{' '}
											and self-taught programmer."
										</p>
										<p>
											<b>INTERESTS</b>="Intrigued by crypto, biohacking, physics, the Universe, math, food science,
											fitness, and music. Essentially, a slight obsession with 'the science of' why things exist as they
											do."
										</p>
										<p>
											<b>OBJECTIVE</b>="Looking to{' '}
											<a
												href='https://a16z.com/2020/04/18/its-time-to-build/'
												target='_blank'
												rel='noopener noreferrer'
											>
												#build
											</a>{' '}
											something special."
										</p>
										<p>
											<b>CONTACT</b>="Say hi on{' '}
											<a href='https://www.twitter.com/dtbuchholz' target='_blank' rel='noopener noreferrer'>
												Twitter
											</a>{' '}
											or any of the social platforms below."
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default About
