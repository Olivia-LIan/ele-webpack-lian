import Vue from "vue"

import { Header,Swipe, SwipeItem } from 'mint-ui';
Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

import "./assets/mui-master/dist/css/mui.css"
import "./assets/mui-master/dist/css/icons-extra(1).css"
import "./assets/mui-master/dist/fonts/mui-icons-extra.ttf"

import app from "./app.vue"

import VueRouter from "vue-router";
Vue.use(VueRouter)
import router from "./router"

import VueResource from 'vue-resource'
Vue.use(VueResource)

var vm = new Vue({
    el:"#app",
    data:{},
    router,
    render:c=>c(app)
})