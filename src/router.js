import VueRouter from "vue-router";
import homeContainer from "./components/tabbar/homeContainer.vue"
import memberContainer from "./components/tabbar/memberContainer.vue"
import searchContainer from "./components/tabbar/searchContainer.vue"
import shopcarContainer from "./components/tabbar/shopcarContainer.vue"

var router = new VueRouter({
    routes: [
        {path:"/",redirect:"/home"},
        {path:"/home",component:homeContainer},
        {path:"/member",component:memberContainer},
        {path:"/shopcar",component:shopcarContainer},
        {path:"/search",component:searchContainer}
    ],
    linkActiveClass:"mui-active"
})

export default router