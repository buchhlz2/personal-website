import React from 'react'
import { SiTwitter, SiGithub, SiLinkedin, SiMedium } from 'react-icons/si'

const SocialIcons = ({ style }) => {
	const { fontSize, margin } = style
	return (
		<div className='header-social'>
			<div className='vertical-align-social'>
				<a className='social-link' href='https://www.twitter.com/dtbuchholz' target='_blank' rel='noopener noreferrer'>
					<SiTwitter className='header-social-icons' style={{ fontSize: fontSize, margin: margin }} />
				</a>
				<a className='social-link' href='https://github.com/buchhlz2' target='_blank' rel='noopener noreferrer'>
					<SiGithub className='header-social-icons' style={{ fontSize: fontSize, margin: margin }} />
				</a>
				<a
					className='social-link'
					href='https://www.linkedin.com/in/dan-buchhol'
					target='_blank'
					rel='noopener noreferrer'
				>
					<SiLinkedin className='header-social-icons' style={{ fontSize: fontSize, margin: margin }} />
				</a>
				<a className='social-link' href='https://medium.com/@danbuchholz' target='_blank' rel='noopener noreferrer'>
					<SiMedium className='header-social-icons' style={{ fontSize: fontSize, margin: margin }} />
				</a>
			</div>
		</div>
	)
}

export default SocialIcons
