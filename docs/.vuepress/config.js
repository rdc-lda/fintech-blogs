module.exports = {
	title: 'RDC FinTech Blogs',
	description: 'Sharing our knowledge with the world',
	dest: './dist',
	themeConfig: {
		logo: '/images/rdclogo.png',
		lastUpdated: 'Last Updated',
		nav: [
			{ text: 'Guides', link: '/guides/' },
			{ text: 'Tools', link: '/tools/' }, 
			{ text: 'Opinions', link: '/tools/' }, 
			{ text: 'Team', link: '/team/' },
			{ text: 'Contact', link: '/contact/' },
		
		],
		sidebar: 
		{
			'/guides/': [
				'/',
				"./howto",
				"./snippets",
				"./design",
				"./tutorials"
			],
			"/": [
				'/'
			]
			
		}
	}
}