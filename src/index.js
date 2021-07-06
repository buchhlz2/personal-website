import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import App from './App'
import { HashRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

ReactDOM.render(
	<HashRouter>
		<App />
	</HashRouter>,
	document.getElementById('root')
)
