import React, { useEffect } from 'react'
import { init } from 'ityped'
import profile from '../images/profile.png'

const BasicInfo = (props) => {
	useEffect(() => {
		const typingArea = document.querySelector('#typingArea')
		init(typingArea, {
			showCursor: false,
			strings: ['crypto altruist', 'biohacker', 'full-stack engineer', 'physics nerd', 'health fanatic'],
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
				<div className='row'>
					<a href='https://drive.google.com/file/d/1A-hcR9Qp1hUU_pUgriWzKyNg1xONSiub/view' target=' _blank'>
						<button className='btn' id='resume-btn'>
							Resume
						</button>
					</a>
				</div>
			</div>
		</div>
	)
}

export default BasicInfo
