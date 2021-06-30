import React from 'react'
import PortfolioModal from './PortfolioModal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import { faJs } from '@fortawesome/free-brands-svg-icons'
import { faNodeJs } from '@fortawesome/free-brands-svg-icons'
import { faReact } from '@fortawesome/free-brands-svg-icons'
import { faEthereum } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

const PortfolioItem = (props) => {
	const langageIcon = (iconName) => {
		switch (iconName.toLowerCase().replace(/[^\w]/, '')) {
			case 'javascript':
				return faJs
			case 'nodejs':
				return faNodeJs
			case 'react':
				return faReact
			case 'solidity':
				return faEthereum
			default:
				return ''
		}
	}

	const extensionConverter = (language) => {
		switch (language.toLowerCase().replace(/[^\w]/, '')) {
			case 'javascript':
				return 'js'
			case 'nodejs':
				return 'js'
			case 'react':
				return 'js'
			case 'solidity':
				return 'sol'
			default:
				return ''
		}
	}

	return (
		<>
			<div className='card p-3 portfolio-item mx-auto'>
				<div className='card-body'>
					<h5 className='portfolio-card-title'>{props.name}</h5>
					<p className='card-text'>{props.caption}</p>
					<div className='row'>
						<div className='col text-center mt-1'>
							<a
								className='badge bg-light badge-custom'
								href={`https://github.com/buchhlz2/${props.githubRepo}`}
								target=' _blank'
							>
								View on <FontAwesomeIcon icon={faGithub} />
							</a>
						</div>
						<div className='col text-center mt-1'>
							<a className='badge badge-custom bg-light' href={props.demoUrl} target=' _blank'>
								Live demo
							</a>
						</div>
					</div>
				</div>
				<hr className='mt-0' />
				<div className='row'>
					<div className='col'>
						<div className='d-flex flex-row justify-content-start h-100'>
							{props.languages.map((language, key = 0) => (
								<div className='me-2 align-self-center' key={key++}>
									<a
										className=''
										href={`https://github.com/buchhlz2/${props.githubRepo}/search?q=extension:${extensionConverter(
											language
										)}`}
										target=' _blank'
										key={props.index}
									>
										<FontAwesomeIcon icon={langageIcon(language)} />
									</a>
								</div>
							))}
						</div>
					</div>
					<div className='col'>
						<div className='d-flex flex-row justify-content-end h-100'>
							<div className='me-2 align-self-center'>
								<button
									className='btn m-0 py-0 px-2 portfolio-btn-custom'
									data-bs-toggle='modal'
									data-bs-target={`#portfolio-item-modal-${props.index}`}
									style={{ fontSize: '12px' }}
								>
									Details <FontAwesomeIcon icon={faInfoCircle} className='' />
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
				languages={props.languages}
				demoUrls={props.demoUrls}
				img={props.img}
				index={props.index}
			/>
		</>
	)
}

export default PortfolioItem
