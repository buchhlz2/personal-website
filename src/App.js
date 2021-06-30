import Navbar from './components/Navbar'
import About from './components/About'
import Experience from './components/Experience'
import Skillset from './components/Skillset'
import Portfolio from './components/Portfolio'
import Footer from './components/Footer'
import { Route, Switch } from 'react-router-dom'
import { useState, useEffect } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.scss'

function App() {
	const [animate, setAnimate] = useState(true)

	// upon initial app loading (and no re-renders), fade in the app (styling)
	useEffect(() => {
		if (window.sessionStorage.getItem('initalAppMount') === null) {
			setAnimate(true)
			window.sessionStorage.setItem('initalAppMount', 1)
		} else {
			setAnimate(false)
		}
	}, [setAnimate])

	return (
		<>
			<div
				className={animate ? 'App d-flex flex-column min-vh-100 intial-page-load' : 'App d-flex flex-column min-vh-100'}
			>
				<Navbar />
				<div className='wrapper flex-grow-1' id='main-content'>
					<Switch>
						<Route path='/(/|about|)/' render={(props) => <About {...props} />} />
						<Route path='/(/|experience|)/' render={(props) => <Experience {...props} />} />
						<Route path='/(/|skillset|)/' render={(props) => <Skillset {...props} />} />
						<Route path='/(/|portfolio|)/' render={(props) => <Portfolio {...props} />} />
					</Switch>
				</div>
				<Footer />
			</div>
		</>
	)
}

export default App
