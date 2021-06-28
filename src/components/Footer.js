import React from 'react'
import SocialIcons from './SocialIcons'

const socialIconsStyle = {
	fontSize: '160%',
	margin: '0 0.8em',
}

const Footer = (props) => {
	return (
		<footer>
			<div className='copyright py-4 text-center'>
				<div className='container'>
					<SocialIcons style={socialIconsStyle} />
					<span className='mt-2 d-inline-block'>
						<small>Copyright &copy; Dan Buchholz</small>
					</span>
				</div>
			</div>
		</footer>
	)
}

export default Footer
