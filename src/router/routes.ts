import { RouteConfig } from 'vue-router'
const routes: RouteConfig[] = [
  {
    path: '/',
    component: () => import('src/layouts/Default.vue'),
    children: [
      { path: '', component: () => import('src/pages/Index.vue') },
      { path: 'about', component: () => import('src/pages/About.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('src/pages/Error404.vue')
  })
}

export default routes
