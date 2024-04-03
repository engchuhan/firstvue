// import {Button,Row} from 'element-ui';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Vue from 'vue';
import './api/mock';
import App from './App.vue';
import router from './router'; //引入router
import store from './store';

//按需引入
// Vue.use(Button)
// Vue.use(Row)

//全局引入
Vue.use(ElementUI)
Vue.config.productionTip = false

new Vue({
  router,//进行挂载
  store,
  render: h => h(App),
}).$mount('#app')
