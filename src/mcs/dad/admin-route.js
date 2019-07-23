export default [
	{
    path: '/dad/dad-center',
    component: (resolve) => require(['./dad-center.vue'], resolve),
  },
	{
    path: '/dad/famil-info',
    component: (resolve) => require(['./family-info.vue'], resolve),
  },
	{
    path: '/dad/card-info',
    component: (resolve) => require(['./card-info.vue'], resolve),
  },
]