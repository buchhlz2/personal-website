import React from 'react'

const NotFoundError = (props) => {
	return (
		<div className='container-fluid'>
			<div className='row'>
				<div className='col mx-auto'>
					<div className='d-flex justify-content-center text-center mt-5 pt-4'>
						<h2>Oops! This page does not exist.</h2>
					</div>
				</div>
			</div>
		</div>
	)
}

export default NotFoundError
