export default [
	{
    path: '/dmd/dmd-need',
    component: (resolve) => require(['./dmd-need.vue'], resolve),
  },
  {
    path: '/dmd/process-view',
    component: (resolve) => require(['./process-view.vue'], resolve),
  },
  {
    path: '/dmd/process-desc',
    component: (resolve) => require(['./process-desc.vue'], resolve),
  },
  {
    path: '/dmd/apply-type',
    component: (resolve) => require(['./apply-type.vue'], resolve),
  },
  {
    path: '/dmd/ser-evaluation',
    component: (resolve) => require(['./ser-evaluation.vue'], resolve),
  },
  {
    path: '/dmd/jy-apply',
    component: (resolve) => require(['./jy-apply.vue'], resolve),
  },
  {
    path: '/dmd/jy-process',
    component: (resolve) => require(['./jy-process.vue'], resolve),
  },
  {
    path: '/dmd/apply-record',
    component: (resolve) => require(['./apply-record.vue'], resolve),
  },
]