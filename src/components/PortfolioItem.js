import React from 'react'
import PortfolioModal from './PortfolioModal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

const PortfolioItem = (props) => {
	return (
		<>
			<div className='card p-3 portfolio-item mx-auto'>
				<div className='card-body'>
					<h5 className='portfolio-card-title'>{props.name}</h5>
					<p className='card-text'>{props.caption}</p>
				</div>
				<hr />
				<div className='row'>
					<div className='col'>
						<div className='d-flex flex-row justify-content-start h-100'>
							<div className='me-2 align-self-center'>
								<FontAwesomeIcon icon={faGithub} />
							</div>
							<div>
								<a
									className='badge badge-secondary text-dark card-link'
									href='https://github.com/hashirshoaeb/home/search?l=JavaScript'
									target=' _blank'
								>
									JavaScript: 53 %
								</a>
							</div>
							<div className='me-2 align-self-center'>
								<FontAwesomeIcon icon={faGithub} />
							</div>
						</div>
					</div>
					<div className='col'>
						<div className='d-flex flex-row justify-content-end h-100'>
							<div className='me-2 align-self-center'>
								<button
									className='btn m-0 py-0 px-2 info-btn-custom'
									data-bs-toggle='modal'
									data-bs-target={`#portfolio-item-modal-${props.index}`}
								>
									<FontAwesomeIcon icon={faInfoCircle} className='' />
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
			<PortfolioModal
				name={props.name}
				url={props.url}
				description={props.description}
				img={props.img}
				index={props.index}
			/>
		</>
	)
}

export default PortfolioItem
