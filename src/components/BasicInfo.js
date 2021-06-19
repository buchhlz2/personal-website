import React, { useEffect } from 'react'
import { init } from 'ityped'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faMedium } from '@fortawesome/free-brands-svg-icons'
import profile from '../images/profile.jpeg'

const BasicInfo = (props) => {
	useEffect(() => {
		const cursorTypingArea = document.querySelector('#cursorTypingArea')
		init(cursorTypingArea, {
			showCursor: false,
			strings: ['fullstack engineer', 'physics nerd', 'crypto altruist', 'bio-hacking one day at a time...'],
		})
	}, [])

	return (
		<div className='container-fluid d-flex'>
			<div>
				<div className='align-middle text-center header-social'>
					<div className='polaroid'>
						<span style={{ cursor: 'auto' }}>
							<img src={profile} alt='Avatar placeholder' />
						</span>
					</div>
					<div className='vertical-align-social'>
						<a
							className='social-link'
							href='https://www.twitter.com/dtbuchholz'
							target='_blank'
							rel='noopener noreferrer'
						>
							<FontAwesomeIcon
								className='header-social-icons'
								icon={faTwitter}
								style={{ fontSize: '200%', margin: '9% 5% 0 5%' }}
							/>
						</a>
						<a
							className='social-link'
							href='https://www.twitter.com/dtbuchholz'
							target='_blank'
							rel='noopener noreferrer'
						>
							<FontAwesomeIcon
								className='header-social-icons'
								icon={faGithub}
								style={{ fontSize: '200%', margin: '9% 5% 0 5%' }}
							/>
						</a>
						<a
							className='social-link'
							href='https://www.twitter.com/dtbuchholz'
							target='_blank'
							rel='noopener noreferrer'
						>
							<FontAwesomeIcon
								className='header-social-icons'
								icon={faLinkedin}
								style={{ fontSize: '200%', margin: '9% 5% 0 5%' }}
							/>
						</a>
						<a
							className='social-link'
							href='https://www.twitter.com/dtbuchholz'
							target='_blank'
							rel='noopener noreferrer'
						>
							<FontAwesomeIcon
								className='header-social-icons'
								icon={faMedium}
								style={{ fontSize: '200%', margin: '9% 5% 0 5%' }}
							/>
						</a>
					</div>
				</div>
			</div>
			<div id='cursorTypingArea'></div>
		</div>
	)
}

export default BasicInfo
