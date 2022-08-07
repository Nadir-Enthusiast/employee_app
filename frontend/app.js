const routes = [
  {path: '/home',component:home},
  {path: '/department',component:department},
  {path: '/employee',component:employee}
]

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes,
});

const app = Vue.createApp({router})

app.use(router)
app.mount('#app')