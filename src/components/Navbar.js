import React, { useRef, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Navbar = (props) => {
	const { pathname } = useLocation()

	const collapsedNavMenu = useRef(null)
	const nav = useRef(null)
	const navToggleIcon = useRef(null)

	// make sure that 'hide-nav', 'show-nav', 'rotate', and 'rotate-opposite' are all added or
	// removed; ensures styling issue does not happen on screen resizing from <= md to larger
	useEffect(() => {
		function checkNavToggleBtnOnResize() {
			let btnIsShowing = !!collapsedNavMenu.current.clientHeight

			// if the toggle btn is showing & the window is resized, hide the nav
			if (btnIsShowing) {
				nav.current.classList.add('hide-nav')
				nav.current.classList.remove('show-nav')
			}

			// if the toggle btn has been rotated, make sure the direction is correct upon resize
			if (navToggleIcon.current.classList.contains('rotate')) {
				navToggleIcon.current.classList.add('rotate-opposite')
				navToggleIcon.current.classList.remove('rotate')
			}

			// if the toggle button is not showing, remove existing classes
			if (!btnIsShowing) {
				nav.current.classList.remove('hide-nav')
				nav.current.classList.remove('show-nav')
				navToggleIcon.current.classList.remove('rotate')
				navToggleIcon.current.classList.remove('rotate-opposite')
			}
		}

		window.addEventListener('resize', checkNavToggleBtnOnResize)
		checkNavToggleBtnOnResize()
		return () => window.removeEventListener('resize', checkNavToggleBtnOnResize)
	}, [])

	const navCollapsedClickHandler = () => {
		const navIsShowing = nav.current.classList.contains('show-nav')
		const navToggleBtnIsShowing = !!collapsedNavMenu.current.clientHeight

		if (navToggleBtnIsShowing) {
			if (navIsShowing) {
				navToggleIcon.current.classList.add('rotate-opposite')
				navToggleIcon.current.classList.remove('rotate')
				nav.current.classList.add('hide-nav')
				nav.current.classList.remove('show-nav')
			} else {
				navToggleIcon.current.classList.add('rotate')
				navToggleIcon.current.classList.remove('rotate-opposite')
				nav.current.classList.add('show-nav')
				nav.current.classList.remove('hide-nav')
			}
		}
	}

	return (
		<nav className='bg-light fixed-top'>
			<div className='row'>
				<div className='collapsed-nav-header text-center' ref={collapsedNavMenu}>
					<button onClick={navCollapsedClickHandler} id='nav-toggle-btn' ref={navToggleIcon}>
						<FontAwesomeIcon icon={faBars} style={{ fontSize: '180%' }} className='mx-auto' />
					</button>
					<h1 className='' id='name-title-expand'>
						Dan Buchholz
					</h1>
				</div>
				<h1 className='text-center mt-5 mb-3 d-inline' id='name-title-collapse'>
					Dan Buchholz
				</h1>
			</div>

			<div className='row'>
				<div className='col-md-12 normal-nav-custom' id='nav-list-items' ref={nav}>
					<ul className='nav justify-content-center'>
						<div className='row'>
							<li className='nav-item me-5 text-center'>
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
							<li className='nav-item me-5 text-center'>
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
							<li className='nav-item me-5 text-center'>
								<NavLink
									to='/experience'
									className='nav-link'
									isActive={() => ['/experience'].includes(pathname)}
									href='#'
									onClick={navCollapsedClickHandler}
								>
									Experience
								</NavLink>
							</li>
						</div>
						<div className='row'>
							<li className='nav-item me-5 text-center'>
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
					</ul>
				</div>
			</div>
		</nav>
	)
}

export default Navbar
