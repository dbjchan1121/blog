module.exports = {
	lang: 'zh-CN',
	title: '小陳同学',
	description: '日常瞎扯',
	base: '/blog/',
	home: '/index',
	themeConfig: {
		logo: 'https://cdn0.iconfinder.com/data/icons/hexagone-business-finance-set-1/128/BLOG_WRITING-512.png',
		navbar: [
			{
				text: 'Linux/OS X',
				link: '/system/'
			},
			{
				text: '读书笔记',
				children: [
					{
						text: '你不知道的JS（上）',
						link: '/reading/You-Dont-Know-JS-1st'
					}
				]
			},
			{
				text: '源码阅读',
				children: [
					{
						text: 'vue 2.x',
						link: '/analysis/vue2.x'
					},
					{
						text: 'vue 3.x',
						link: '/analysis/vue3.x'
					}
				]
			},
			{
				text: 'Github',
				link: 'https://github.com/dbjchan1121'
			}
		],
		// sidebar: [
		// 	{
		// 		text: 'JS',
		// 		link: '/JS/',
		// 		children: [
		// 			{
		// 				text: 'this',
		// 				link: 'this.md'
		// 			}
		// 		]
		// 	}
		// ]
	}
}