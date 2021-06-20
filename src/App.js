import Navbar from './components/Navbar'
import BasicInfo from './components/BasicInfo'
import About from './components/About'
import Skillset from './components/Skillset'
import Portfolio from './components/Portfolio'
import Footer from './components/Footer'
import { Route, Switch } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.scss'

function App() {
	return (
		<div className='App d-flex flex-column min-vh-100'>
			<Navbar />
			<div className='wrapper flex-grow-1'>
				<Switch>
					<Route path='/(/|about|)/' render={(props) => <About {...props} />} />
					<Route path='/(/|skillset|)/' render={(props) => <Skillset {...props} />} />
					<Route path='/(/|portfolio|)/' render={(props) => <Portfolio {...props} />} />
				</Switch>
			</div>
			<Footer />
		</div>
	)
}

export default App
