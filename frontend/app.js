const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes: [
    {path: '/home',component:home},
    {path: '/department',component:department},
    {path: '/employee',component:employee}
    ]
});

const app = Vue.createApp({router})

app.use(router)
app.mount('#app')