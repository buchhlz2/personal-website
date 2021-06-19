import React, { useEffect } from 'react'
import { init } from 'ityped'

const About = (props) => {
	useEffect(() => {
		const myElement = document.querySelector('#myElement')
		init(myElement, {
			showCursor: false,
			strings: ['fullstack engineer', 'physics nerd', 'crypto altruist', 'bio-hacking one day at a time...'],
		})
	}, [])

	return <div className='container-fluid' id='myElement'></div>
}

export default About
