import React from 'react'
import BasicInfo from './BasicInfo'
import { Icon, InlineIcon } from '@iconify/react'
import redCircle from '@iconify/icons-emojione/red-circle'
import yellowCircle from '@iconify/icons-twemoji/yellow-circle'
import greenCircle from '@iconify/icons-twemoji/green-circle'

const About = (props) => {
	return (
		<div className='container-fluid'>
			<div className='col-md-12'>
				<BasicInfo />
				<div className='col-md-8 center'>
					<div className='col-md-10'>
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
								I'm dan........
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default About
