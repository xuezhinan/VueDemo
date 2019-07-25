
import Vue from 'vue'
import VueRouter from 'vue-router'
import About from '../commponts/About.vue'
import Home from '../commponts/Home.vue'
import News from '../commponts/News.vue'
import Messages from '../commponts/Messages.vue'

Vue.use(VueRouter);

export default new VueRouter({
    routes: [//是routes不是routers
      {
        path: '/about',
        component: About
      },
      {
        path: '/home',
        component: Home,
        children:[
          {
            path:'/home/news',
            component: News
          },
          {
            path:'messages',
            component:Messages
          },
          {
            path: '',
            redirect: '/home/news'
          }
        ]
      },
      {
        path: '/',
        redirect: '/about'
      }
    ]
});
