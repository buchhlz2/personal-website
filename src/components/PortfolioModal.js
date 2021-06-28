import React from 'react'

const PortfolioModal = (props) => {
	const languages = (langs) => {
		return `${langs.slice(0, langs.length - 1).join(', ')}, & ${langs[langs.length - 1]}`
	}

	return (
		<div>
			<div
				className='modal fade'
				id={`portfolio-item-modal-${props.index}`}
				tabIndex='-1'
				aria-labelledby='portfolioItemModalLabel'
				aria-hidden='true'
			>
				<div className='modal-dialog modal-dialog-centered'>
					<div className='modal-content'>
						<div className='modal-header'>
							<h5 className='modal-title' id='portfolioItemModalLabel'>
								{props.name}
							</h5>
							<button type='button' className='btn-close' data-bs-dismiss='modal' aria-label='Close'></button>
						</div>
						<div className='modal-body text-dark'>
							<div className='container-fluid'>
								<div className='row'>
									<div className='col-md-12'>
										<img src={props.img} className='card-img' alt='project-pic' />
									</div>
									<div className='col-md-12'>
										<p>
											<small>{props.description}</small>
										</p>
										<p>
											<small>
												<i>Built with {languages(props.languages)}</i>
											</small>
										</p>
									</div>
								</div>
							</div>
						</div>
						<div className='modal-footer'>
							<button type='button' className='btn btn-secondary portfolio-btn' data-bs-dismiss='modal'>
								Close
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default PortfolioModal
