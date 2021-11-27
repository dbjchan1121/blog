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
				text: '前端',
				children: [
					{
						text: 'Vue',
						children: [
							{
								text: 'Vue Router',
								link: '/front-end/vue/vue-router/index.md',
								activeMatch: '/front-end/vue/vue-router/',
							},
							{
								text: 'Vuex',
								link: '/front-end/vue/vuex/index.md'
							}
						]
					},
					{
						text: 'Flutter/Dart',
						link: '/front-end/Flutter&Dart/index.md',
						activeMatch: '/front-end/Flutter&Dart/',
					}
				]
			},
			{
				text: '后端',
				link: '/back-end/'
			},
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
					},
					{
						text: '你不知道的JS（中）',
						link: '/reading/You-Dont-Know-JS-2nd'
					},
					{
						text: '你不知道的JS（下）',
						link: '/reading/You-Dont-Know-JS-3rd'
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
					},
					{
						text: 'axios',
						link: '/analysis/axios'
					}
				]
			},
			{
				text: 'Github',
				link: 'https://github.com/dbjchan1121'
			}
		],
		// 侧边栏配置
		sidebar: {
			'/system/': [
				{
					text: 'Bash',
					children: [
						'/system/Bash/path.md'
					]
				}
			],
			'/front-end/vue/vue-router/': [
				{
					text: 'Vue Router',
					children: [
						'/front-end/vue/vue-router/index.md',
						'/front-end/vue/vue-router/router1.md',
						'/front-end/vue/vue-router/router2.md'
					]
				}
			],
			'/front-end/Flutter&Dart/': [
				{
					text: 'Flutter 原理',
					children: [
						'/front-end/Flutter&Dart/index.md'
					]
				},
				{
					text: 'Flutter 路由',
					children: [
						'/front-end/Flutter&Dart/flutter-route.md'
					]
				}
			]
		}
	}
}