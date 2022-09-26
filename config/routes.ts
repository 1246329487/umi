export default [
  {
    path: '/',
    name: '首页',
    component: '@/pages/index',
  },
  {
    path: '/redux',
    name: 'redex',
    routes: [
      {
        path: 'study',
        name: '学习',
        component: 'action/study',
      },
      { path: 'movie', name: '电影', component: 'action/movie' },
    ],
  },
];
