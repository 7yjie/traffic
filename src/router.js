import Vue from 'vue'
import Route from 'vue-router'

Vue.use(Route);

let router  = new Route({
    mode:"hash",
    base:process.env.BASE_URL,
    routes:[
        {
          name:"main",
          path:"/",
          redirect:"/login",
          component:()=>import('./pages/login/index.vue')
        },
        {
            name:"login",
            path:"/login",
            component:()=>import('./pages/login/index.vue')
        },
        {
            path:"/reg",
            name:"reg",
            component:()=>import("./pages/reg/index.vue")
        },
        {
            path:"/main",
            name:"main",
            component:()=>import("./pages/main/main.vue")
        }
    ]
});
export default router;