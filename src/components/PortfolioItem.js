import React from 'react'
import PortfolioModal from './PortfolioModal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

const PortfolioItem = (props) => {
	return (
		<div>
			<div
				className='card p-3 portfolio-item mx-auto'
				data-bs-toggle='modal'
				data-bs-target={`#portfolio-item-modal-${props.index}`}
			>
				<div className='card-body'>
					<h5 className='portfolio-card-title'>{props.name}</h5>
					<img src={props.img} className='card-img' alt='project-pic' />
					<p className='card-text'>{props.caption}</p>
				</div>
				<div className='row'>
					<div className='col'>
						<div className='d-flex flex-row justify-content-start h-100'>
							<div className='me-2 align-self-center'>
								<FontAwesomeIcon icon={faGithub} />
							</div>
							<div className='me-2 align-self-center'>
								<FontAwesomeIcon icon={faGithub} />
							</div>
							<div className='me-2 align-self-center'>
								<FontAwesomeIcon icon={faGithub} />
							</div>
						</div>
					</div>
					<div className='col'>
						<div className='d-flex flex-row justify-content-end h-100'>
							<div className='me-2 align-self-center'>
								<FontAwesomeIcon icon={faGithub} className='' />
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
		</div>
	)
}

export default PortfolioItem
