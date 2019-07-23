export default [
  {
    path: '/law/law-list',
    component: (resolve) => require(['./law-list.vue'], resolve),
  },
  {
    path: '/law/law-view',
    component: (resolve) => require(['./law-view.vue'], resolve),
  },
]