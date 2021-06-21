import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faMedium } from '@fortawesome/free-brands-svg-icons'

const SocialIcons = ({ style }) => {
	const { fontSize, margin } = style
	return (
		<div className='header-social'>
			<div className='vertical-align-social'>
				<a className='social-link' href='https://www.twitter.com/dtbuchholz' target='_blank' rel='noopener noreferrer'>
					<FontAwesomeIcon
						className='header-social-icons'
						icon={faTwitter}
						style={{ fontSize: fontSize, margin: margin }}
					/>
				</a>
				<a className='social-link' href='https://github.com/buchhlz2' target='_blank' rel='noopener noreferrer'>
					<FontAwesomeIcon
						className='header-social-icons'
						icon={faGithub}
						style={{ fontSize: fontSize, margin: margin }}
					/>
				</a>
				<a
					className='social-link'
					href='https://www.linkedin.com/in/dan-buchhol'
					target='_blank'
					rel='noopener noreferrer'
				>
					<FontAwesomeIcon
						className='header-social-icons'
						icon={faLinkedin}
						style={{ fontSize: fontSize, margin: margin }}
					/>
				</a>
				<a className='social-link' href='https://medium.com/@danbuchholz' target='_blank' rel='noopener noreferrer'>
					<FontAwesomeIcon
						className='header-social-icons'
						icon={faMedium}
						style={{ fontSize: fontSize, margin: margin }}
					/>
				</a>
			</div>
		</div>
	)
}

export default SocialIcons
