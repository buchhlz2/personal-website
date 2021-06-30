import React, { useEffect } from 'react'
import { init } from 'ityped'
import profile from '../images/profile.png'

const BasicInfo = (props) => {
	useEffect(() => {
		const typingArea = document.querySelector('#typingArea')
		init(typingArea, {
			showCursor: false,
			strings: ['full-stack engineer', 'physics nerd', 'crypto altruist', 'health fanatic', 'biohacker'],
		})
	}, [])

	return (
		<div className='col-md-4 mb-4'>
			<div className='align-middle text-center'>
				<div className='row'>
					<div className='polaroid'>
						<span style={{ cursor: 'auto' }}>
							<img src={profile} alt='Avatar placeholder' />
						</span>
					</div>
				</div>
				<div className='row'>
					<div id='typingAreaContainer'>
						<div id='typingAreaDiv'>
							<div id='terminalSymbol'>
								<b>$ </b>
							</div>
							<div id='typingArea'></div>
							<div id='typingCursor'></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default BasicInfo
