import React from 'react'
import PortfolioItem from './PortfolioItem'

const portfolioItems = [
	{
		name: 'Name #1',
		url: 'https://github.com/buchhlz2/',
		caption: 'caption 1',
		description: 'desc 1',
		img: 'https://cdn.pixabay.com/photo/2014/05/02/21/49/laptop-336373_1280.jpg',
	},
	{
		name: 'Name #2',
		url: 'https://github.com/buchhlz2/',
		caption: 'caption 2',
		description: 'desc 2',
		img: 'https://cdn.pixabay.com/photo/2015/07/17/22/43/student-849825_1280.jpg',
	},
	{
		name: 'Name #3',
		url: 'https://github.com/buchhlz2/',
		caption: 'caption 3',
		description: 'desc 3',
		img: 'https://cdn.pixabay.com/photo/2016/03/26/13/09/cup-of-coffee-1280537_1280.jpg',
	},
]

const Portfolio = (props) => {
	return (
		<div className='container-fluid px-5'>
			<div className='row gx-3 gy-3 mt-3'>
				{portfolioItems.map((item, index) => (
					<div className='col-lg-4' key={index}>
						<PortfolioItem
							name={item.name}
							url={item.url}
							caption={item.caption}
							description={item.description}
							img={item.img}
							index={index}
						/>
					</div>
				))}
			</div>
		</div>
	)
}

export default Portfolio
