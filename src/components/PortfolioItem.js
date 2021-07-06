import React from 'react'
import PortfolioModal from './PortfolioModal'
import { FaInfoCircle, FaGithub } from 'react-icons/fa'
import {
	SiTypescript,
	SiJavascript,
	SiReact,
	SiPostgresql,
	SiGraphql,
	SiEthereum,
	SiNodeDotJs,
	SiNextDotJs,
	SiPython,
	SiRuby,
} from 'react-icons/si'

const PortfolioItem = (props) => {
	const languageIcon = (iconName) => {
		switch (iconName.toLowerCase().replace(/[^\w]/, '')) {
			case 'javascript':
				return <SiJavascript />
			case 'typescript':
				return <SiTypescript />
			case 'nodejs':
				return <SiNodeDotJs />
			case 'nextjs':
				return <SiNextDotJs />
			case 'react':
				return <SiReact />
			case 'solidity':
				return <SiEthereum />
			case 'postgresql':
				return <SiPostgresql />
			case 'graphql':
				return <SiGraphql />
			case 'python':
				return <SiPython />
			case 'ruby':
				return <SiRuby />
			default:
				return ''
		}
	}

	const extensionConverter = (language) => {
		let query = '/search?q=extension:'
		switch (language.toLowerCase().replace(/[^\w]/, '')) {
			case 'javascript':
			case 'nodejs':
			case 'nextjs':
			case 'react':
				query += 'js'
				break
			case 'typescript':
				query += 'ts'
				break
			case 'solidity':
				query += 'sol'
				break
			case 'python':
				query += 'py'
				break
			case 'ruby':
				query += 'rb'
				break
			case 'graphql':
				query += 'graphql'
				break
			default:
				return ''
		}
		return query
	}

	return (
		<>
			<div className='card p-3 portfolio-item mx-auto'>
				<div className='card-body'>
					<h5 className='portfolio-card-title'>{props.name}</h5>
					<p className='card-text'>{props.caption}</p>
					<div className='d-flex flex-row align-middle justify-content-center'>
						<div className='col text-center mt-1'>
							<div className='d-flex flex-row align-middle justify-content-between'>
								<a
									className='badge bg-light badge-custom d-flex flex-row align-middle'
									href={`https://github.com/buchhlz2/${props.githubRepo}`}
									target=' _blank'
								>
									View on <FaGithub className='ms-1 align-self-center' />
								</a>
								<a className='badge badge-custom bg-light' href={props.demoUrl} target=' _blank'>
									Live demo
								</a>
							</div>
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
										href={`https://github.com/buchhlz2/${props.githubRepo}${extensionConverter(language)}`}
										target=' _blank'
										key={props.index}
									>
										{languageIcon(language)}
									</a>
								</div>
							))}
						</div>
					</div>
					<div className='col'>
						<div className='d-flex flex-row justify-content-end h-100'>
							<button
								className='btn m-0 py-1 px-2 portfolio-btn-custom d-flex flex-row align-middle'
								data-bs-toggle='modal'
								data-bs-target={`#portfolio-item-modal-${props.index}`}
								style={{ fontSize: '12px' }}
							>
								Details <FaInfoCircle className='ms-1 align-self-center' />
							</button>
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
