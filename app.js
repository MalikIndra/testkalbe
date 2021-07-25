const routes=[
    {path:'/home',component:home},
    {path:'/customer',component:customer},
    {path:'/purchase',component:purchase},
    {path:'/invoice',component:invoice},
]

const router=new VueRouter({
    routes
})

const app = new Vue({
    router
}).$mount('#app')