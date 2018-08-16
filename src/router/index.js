import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ZY from '@/views/zy'
Vue.use(Router)


export default new Router({
  routes: [
    {
      path: '/helloworld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/',
      name: 'ZY',
      component: ZY
    },
  ],
    methods:{
        changeData(){
          alert('执行成功');
        }
    }
})
