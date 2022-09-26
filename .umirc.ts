import { defineConfig } from 'umi';
export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    {
      path: '/',
      component: 'index',
      routes:[
        {
          path: 'action',
          component: 'action',
          routes: [
            { path: 'study', component: 'action/study'
            
           },
            { path: 'movie', component: 'action/movie' },
          ]
        },
      ]
    },
  ],
  fastRefresh: {},
  proxy: {
    '/api': {
      target: 'http://localhost:8081/',
      changeOrigin: true,
      pathRewrite: { '^/api': ' ' },
    },
  }

});
