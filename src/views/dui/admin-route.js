
export default [
	{
		path: '/dui',
		component: (resolve) => require(['./admin-index.vue'], resolve),
		redirect: '/dui/home',
		children: [
			{
				path: 'home',
				component: (resolve) => require(['./home.vue'], resolve)
			},
			{
				path: 'work',
				component: (resolve) => require(['./work.vue'], resolve)
			},
			{
				path: 'me',
				component: (resolve) => require(['./me.vue'], resolve)
			}
		]
  }
]