import Vue from 'vue'
import App from './App.vue'
import router from './route/index'
import {Card,Button,Progress,Menu,MenuItem,Icon,Input,Checkbox,Timeline,TimelineItem,Table,TableColumn,MessageBox} from 'element-ui'
Vue.config.productionTip = false
Vue.use(Card)
Vue.use(Button)
Vue.use(Progress)
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(Icon)
Vue.use(Input)
Vue.use(Checkbox)
Vue.use(Timeline)
Vue.use(TimelineItem)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(MessageBox)
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
