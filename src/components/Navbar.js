import React, { useRef, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

const Navbar = (props) => {
	const { pathname } = useLocation()

	const collapsedNavMenu = useRef(null)
	const nav = useRef(null)

	// make sure that 'hide-nav' & 'show-nav' are removed, on screen resizing from small to large
	useEffect(() => {
		function checkNavToggleBtnOnResize() {
			let btnIsShowing = !!collapsedNavMenu.current.clientHeight
			if (!btnIsShowing) {
				nav.current.classList.remove('hide-nav')
				nav.current.classList.remove('show-nav')
			}
		}

		window.addEventListener('resize', checkNavToggleBtnOnResize)
		checkNavToggleBtnOnResize()
		return () => window.removeEventListener('resize', checkNavToggleBtnOnResize)
	}, [])

	const navCollapsedClickHandler = () => {
		const navIsShowing = nav.current.classList.contains('show-nav')
		const navToggleBtnIsShowings = !!collapsedNavMenu.current.clientHeight

		if (navToggleBtnIsShowings) {
			if (navIsShowing) {
				nav.current.classList.add('hide-nav')
				nav.current.classList.remove('show-nav')
			} else {
				nav.current.classList.add('show-nav')
				nav.current.classList.remove('hide-nav')
			}
		}
	}

	return (
		<nav className='bg-light fixed-top'>
			<div className='row'>
				<div className='collapsed-nav-custom text-center' ref={collapsedNavMenu}>
					<button onClick={navCollapsedClickHandler} id='nav-toggle-btn'>
						<FontAwesomeIcon icon={faBars} style={{ fontSize: '180%' }} className='mx-auto' />
					</button>
					<h1 className='font-weight-bold text-uppercase' id='name-title-expand'>
						<b>Dan Buchholz</b>
					</h1>
				</div>
				<h1 className='text-center mt-5 mb-3 font-weight-bold text-uppercase d-inline' id='name-title-collapse'>
					<b>Dan Buchholz</b>
				</h1>
			</div>

			<div className='row'>
				<div className='col-md-12 normal-nav-custom' id='nav-list-items' ref={nav}>
					<ul className='nav justify-content-center'>
						<div className='row'>
							<li className='nav-item mx-5'>
								<NavLink
									to='/about'
									className='nav-link'
									isActive={() => ['/', '/about'].includes(pathname)}
									href='#'
									onClick={navCollapsedClickHandler}
								>
									About
								</NavLink>
							</li>
						</div>
						<div className='row'>
							<li className='nav-item mx-5'>
								<NavLink
									to='/skillset'
									className='nav-link'
									isActive={() => ['/skillset'].includes(pathname)}
									href='#'
									onClick={navCollapsedClickHandler}
								>
									Skillset
								</NavLink>
							</li>
						</div>
						<div className='row'>
							<li className='nav-item mx-5'>
								<NavLink
									to='/portfolio'
									className='nav-link'
									isActive={() => ['/portfolio'].includes(pathname)}
									href='#'
									onClick={navCollapsedClickHandler}
								>
									Portfolio
								</NavLink>
							</li>
						</div>
						{/* <div className='row'>
							<button className='btn-close-custom ml-auto' onClick={navCollapsedClickHandler}>
								<FontAwesomeIcon
									icon={faTimes}
									style={{ fontSize: '200%', height: '100%' }}
									className=''
									id='nav-close'
								/>
							</button>
						</div> */}
					</ul>
				</div>
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
