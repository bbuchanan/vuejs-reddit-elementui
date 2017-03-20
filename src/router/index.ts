import Vue from 'vue';
import Router from 'vue-router';
import Hello from '@/components/Hello'
import Another from '@/components/Another'
import HelloReddit from '@/components/HelloReddit.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

Vue.use(Router);
Vue.use(ElementUI)

export default new Router({
  routes: [
    {
      path: '/hello',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/another',
      name: 'Another',
      component: Another
    },
    {
      path: '/helloReddit',
      name: 'Hello Reddit',
      component: HelloReddit
    }
  ]
});
