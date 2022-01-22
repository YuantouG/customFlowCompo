/*
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2021-12-28 13:23:53
 * @LastEditors: sueRimn
 * @LastEditTime: 2022-01-22 13:10:47
 */

import APP from "./pages/app.vue";
import Vue from "vue";
import router from "./router";
import store from "./store";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import "../assets/font/iconfont.css";
import "../assets/icon/iconfont.css";
import AFTableColumn from 'af-table-column';
//过滤器
import filters  from "./util/filters";
// 跨域
import VueResource from 'vue-resource'
Vue.use(VueResource)

Vue.use(VideoPlayer);
Vue.use(filters);
Vue.component("ggn-image", ggnImage);
Vue.use(ElementUI);

Vue.use(AFTableColumn);
// 权限按钮
Vue.directive('permission', {
    componentUpdated: function (el, binding, vnode) {
        setTimeout(() => {
            if(store.state.menu.promise_button_list.indexOf(binding.value) >= 0 && true){
                el.parentNode && el.parentNode.appendChild(el);
            }else{
                el.parentNode &&  el.parentNode.removeChild(el);
            }
        }, 400)
    }
})

new Vue({
    store,
    router,
    render: h => h(APP)
}).$mount("#root");


