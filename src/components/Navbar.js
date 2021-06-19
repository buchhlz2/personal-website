import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'

const Navbar = (props) => {
	const { pathname } = useLocation()

	return (
		<nav className='navbar navbar-expand-lg navbar-light bg-light'>
			<a className='navbar-brand col-sm-3 col-md-2 p-2 h-1' href='#'>
				Dan Buchholz
			</a>
			<button
				className='navbar-toggler'
				type='button'
				data-bs-toggle='collapse'
				data-bs-target='#navbarSupportedContent'
				aria-controls='navbarSupportedContent'
				aria-expanded='false'
				aria-label='Toggle navigation'
			>
				<span className='navbar-toggler-icon'></span>
			</button>

			<div className='collapse navbar-collapse mt-3' id='navbarSupportedContent'>
				<ul className='navbar-nav'>
					<li className='nav-item'>
						<NavLink to='/about' className='nav-link' isActive={() => ['/', '/header'].includes(pathname)} href='#'>
							About
						</NavLink>
					</li>
					<li className='nav-item'>
						<NavLink to='/skillset' className='nav-link' href='#'>
							Skillset
						</NavLink>
					</li>
					<li className='nav-item'>
						<NavLink to='/portfolio' className='nav-link' href='#'>
							Portfolio
						</NavLink>
					</li>
				</ul>
				{/* <ul className='navbar-nav mt-4'>
					<li>
						<hr />
					</li>
				</ul> */}
			</div>
		</nav>
	)
}

export default Navbar
