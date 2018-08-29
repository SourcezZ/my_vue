// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
import func from './function/func'

Vue.config.productionTip = false

Vue.use(ElementUI,{ size: 'small', zIndex: 3000 });
Vue.use(func);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render:h => h(App),
  components: { App },
  template: '<App/>',
}),
Vue.component('todo-item', {
  template: '<li>这是个待办项</li>'
})
