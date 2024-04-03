import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Main from '../views/Main.vue'
import Mall from '../views/Mall.vue'
import PageOne from '../views/PageOne.vue'
import PageTwo from '../views/PageTwo.vue'
import User from '../views/User.vue'

Vue.use(VueRouter)
//1.创建路由组件
//2.将路由与组件进行映射
const routes = [
    //配置主路由
    {
        path:'/',
        component:Main,
        redirect:'/home',  //重定向，首页重复跳转时，重新跳转到home页面
        children:[//子路由
            { path: 'home', component: Home },
            { path: 'user', component: User },
            { path: 'mall', component: Mall },
            { path: 'page1', component: PageOne },
            { path: 'page2', component: PageTwo}
        ]
    }
    
  ]


//创建router实例
  const router = new VueRouter({
    routes // short for `routes: routes`
  })

//对外进行一个暴露
export default router
