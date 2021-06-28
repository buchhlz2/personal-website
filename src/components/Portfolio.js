import React, { useState, useEffect } from 'react'
import PortfolioItem from './PortfolioItem'
import decentrastackGif from '../images/demos/decentrastack.gif'
import crytpokittiesGif from '../images/demos/cryptokitties.gif'

const portfolioItems = [
	{
		name: 'name',
		url: 'https://github.com/buchhlz2/',
		caption: 'caption',
		description: 'description',
		languages: ['NodeJS', 'JavaScript', 'React'],
		demoUrl: '',
		img: 'https://cdn.pixabay.com/photo/2016/03/26/13/09/cup-of-coffee-1280537_1280.jpg',
	},
	{
		name: 'decentraStack',
		url: 'https://github.com/buchhlz2/decentraStack',
		caption: 'Ethereum-based publishing platform where each article is minted as an NFT (persisted via IPFS).',
		description:
			'Decentralized platform that allows wallet-enabled users to view all articles ever published, publish their own articles / posts, and subscribe to others (in-app). Each article is minted as an ERC-721 token, and the article data is pinned to IPFS for simple persistance. Contract live on the Ropsten testnet, and the website is hosted on IPFS as well.',
		languages: ['JavaScript', 'React', 'Solidity'],
		demoUrl: 'https://bafybeiahvztihe3zimh7g3nxpjdived5goyt5kmgdt2mdmsih6lzc7binq.ipfs.dweb.link/',
		img: decentrastackGif,
	},
	{
		name: 'CrytoKitties Analyzer',
		url: 'https://github.com/buchhlz2/crypto-kitty-analyzer',
		caption:
			'A simple dApp that allows you to query the Crypto Kitties smart contract and retrieve a basic set of live contract data.',
		description:
			'The CryptoKitties analyzer is built to query the Ethereum mainnet (using web3.js) and return a few live datapoints. Namely, input a starting / ending block, and data the matron with the most "births" during that period will be caculated & returned, along with other data about that specific matron.',
		languages: ['Javascript', 'React', 'Solidity'],
		demoUrl: 'https://angry-carson-3ff31e.netlify.app/',
		img: crytpokittiesGif,
	},
	{
		name: 'Name #3',
		url: 'https://github.com/buchhlz2/',
		caption: 'caption 3',
		description: 'desc 3',
		languages: ['JavaScript', 'React'],
		demoUrl: [
			'https://bafybeiahvztihe3zimh7g3nxpjdived5goyt5kmgdt2mdmsih6lzc7binq.ipfs.dweb.link/',
			'https://ropsten.etherscan.io/address/0x0511ad198d776Ed8D19fAf2C58E5109992f8AC73',
		],
		img: 'https://cdn.pixabay.com/photo/2016/03/26/13/09/cup-of-coffee-1280537_1280.jpg',
	},
]

const Portfolio = (props) => {
	const [formattedItems, setFormattedItems] = useState([])

	useEffect(() => {
		async function formatItemsToRows(items) {
			await items
			const rowToItemsObj = {}
			let rowNumber = 0
			const formattedRowsOfItems = []

			await items.map(async (item, index) => {
				if (index % 2 === 0) rowNumber++
				const i = (
					<PortfolioItem
						name={item.name}
						url={item.url}
						caption={item.caption}
						description={item.description}
						languages={item.languages}
						demoUrl={item.demoUrl}
						img={item.img}
						index={index}
						key={index}
					/>
				)
				rowToItemsObj[rowNumber] ? rowToItemsObj[rowNumber].push(i) : (rowToItemsObj[rowNumber] = [i])
			})

			for await (const [key, itemRow] of Object.entries(rowToItemsObj)) {
				formattedRowsOfItems.push(
					<div className='row gx-3 gy-3 mt-3' key={key}>
						{itemRow.map((item) => (
							<div className='col-md-6' key={item.key}>
								{item}
							</div>
						))}
					</div>
				)
			}

			setFormattedItems(formattedRowsOfItems)
		}

		formatItemsToRows(portfolioItems)
	}, [setFormattedItems])

	return (
		<div className='container-fluid px-5'>
			<div className='col-md-10 mx-auto'>{formattedItems.map((row) => row)}</div>
		</div>
	)
}

export default Portfolio
