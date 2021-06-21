import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Navbar = (props) => {
	const { pathname } = useLocation()

	const clickHandler = () => {
		const nav = document.getElementById('nav-content')
		if (nav.classList.contains('show-nav')) {
			nav.classList.remove('show-nav')
		} else {
			nav.classList.add('show-nav')
		}
	}

	return (
		<nav className='bg-light fixed-top'>
			<h1 className='text-center mt-5 mb-4 font-weight-bold text-uppercase'>
				<b>Dan Buchholz</b>
			</h1>

			<div className='expand-nav-custom ms-3'>
				<button className='btn-toggle-custom' onClick={clickHandler}>
					<FontAwesomeIcon icon={faBars} style={{ fontSize: '200%' }} className='mx-auto' />
				</button>
			</div>

			<div className='col-md-12 collapse-nav-custom' id='nav-content'>
				<ul className='nav justify-content-center'>
					<div className='row'>
						<li className='nav-item ps-3 pe-3'>
							<NavLink to='/about' className='nav-link' isActive={() => ['/', '/header'].includes(pathname)} href='#'>
								About
							</NavLink>
						</li>
					</div>
					<div className='row'>
						<li className='nav-item ps-3 pe-3'>
							<NavLink to='/skillset' className='nav-link' isActive={() => ['/skillset'].includes(pathname)} href='#'>
								Skillset
							</NavLink>
						</li>
					</div>
					<div className='row'>
						<li className='nav-item ps-3 pe-3'>
							<NavLink to='/portfolio' className='nav-link' isActive={() => ['/portfolio'].includes(pathname)} href='#'>
								Portfolio
							</NavLink>
						</li>
					</div>
				</ul>
			</div>
		</nav>
	)

	// return (
	// 	<nav className='navbar navbar-expand-lg navbar-light bg-light'>
	// 		<a className='navbar-brand col-sm-3 col-md-2 p-2 h-1' href='#'>
	// 			Dan Buchholz
	// 		</a>
	// 		<button
	// 			className='navbar-toggler'
	// 			type='button'
	// 			data-bs-toggle='collapse'
	// 			data-bs-target='#navbarSupportedContent'
	// 			aria-controls='navbarSupportedContent'
	// 			aria-expanded='false'
	// 			aria-label='Toggle navigation'
	// 		>
	// 			<span className='navbar-toggler-icon'></span>
	// 		</button>

	// 		<div className='collapse navbar-collapse mt-3' id='navbarSupportedContent'>
	// 			<ul className='navbar-nav'>
	// 				<li className='nav-item'>
	// 					<NavLink to='/about' className='nav-link' isActive={() => ['/', '/header'].includes(pathname)} href='#'>
	// 						About
	// 					</NavLink>
	// 				</li>
	// 				<li className='nav-item'>
	// 					<NavLink to='/skillset' className='nav-link' href='#'>
	// 						Skillset
	// 					</NavLink>
	// 				</li>
	// 				<li className='nav-item'>
	// 					<NavLink to='/portfolio' className='nav-link' href='#'>
	// 						Portfolio
	// 					</NavLink>
	// 				</li>
	// 			</ul>
	// 			{/* <ul className='navbar-nav mt-4'>
	// 				<li>
	// 					<hr />
	// 				</li>
	// 			</ul> */}
	// 		</div>
	// 	</nav>
	// )
}

export default Navbar
