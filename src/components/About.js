import React from 'react'
import BasicInfo from './BasicInfo'
import { Icon, InlineIcon } from '@iconify/react'
import redCircle from '@iconify/icons-emojione/red-circle'
import yellowCircle from '@iconify/icons-twemoji/yellow-circle'
import greenCircle from '@iconify/icons-twemoji/green-circle'

const About = (props) => {
	return (
		<div className='container-fluid'>
			<div className='row'>
				<BasicInfo />
				<div className='col-md-8 mt-3'>
					<div className='col-md-10 mx-auto'>
						<div className='card' id='aboutMeCard'>
							<div
								className='card-header'
								style={{
									background: '#6d6d6d',
									color: 'white',
									height: '2em',
								}}
							>
								<div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
									<Icon icon={redCircle} />
									&nbsp;
									<Icon icon={yellowCircle} />
									&nbsp;
									<Icon icon={greenCircle} />
									&nbsp;
								</div>
							</div>
							<div
								className='card-body font-trebuchet text-justify ml-3 mr-3'
								style={{
									height: 'auto',

									background: 'white',
								}}
							>
								Hi, I'm Dan.
								<br />
								<br />
								<p>
									Passion for startups and all things tech &#8212; Chicago native, currently based in San Francisco.
									Engineering alumn of the{' '}
									<a
										href='https://en.wikipedia.org/wiki/Grainger_College_of_Engineering'
										target='_blank'
										rel='noopener noreferrer'
									>
										University of Illinois at Urbana-Champaign.
									</a>
								</p>
								<p>
									Intrigued by all things physics, biohacking, crypto, the Universe, math, and music. Essentially, a
									slight obsession with "the science of" why things exist as they do.
								</p>
								<p>
									Looking to{' '}
									<a href='https://a16z.com/2020/04/18/its-time-to-build/' target='_blank' rel='noopener noreferrer'>
										#build
									</a>{' '}
									something special.
								</p>
								<p>
									Say hi on{' '}
									<a href='https://www.twitter.com/dtbuchholz' target='_blank' rel='noopener noreferrer'>
										Twitter
									</a>{' '}
									or any of the social platforms below.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default About
