module.exports = {
	title: 'RDC FinTech Blogs',
	description: 'Sharing our knowledge with the world',
	dest: './dist',
	head: [
		['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' }],
		['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' }],
		['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' }],
		['link', { rel: 'mask-icon', color: '#5bbad5', href: '/safari-pinned-tab.svg' }],
		['link', { rel: 'manifest', href: '/manifest.json' }],
		['meta', { name: 'msapplication-TileColor', content: '#2d89ef' }],
		['meta', { name: 'theme-color', content: '#ffffff' }]
	],
	themeConfig: {
		logo: '/images/rdclogo.png',
		lastUpdated: 'Last Updated',
		nav: [
			{ text: 'Guides', link: '/guides/' },
			{ text: 'Tools', link: '/tools/' }, 
			{ text: 'Opinions', link: '/opinions/' }, 
			{ text: 'Meetups', link: '/meetups/' }
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