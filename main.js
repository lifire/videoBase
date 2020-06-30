import Vue from 'vue'
import App from './App'

import uView from 'uview-ui'
Vue.use(uView)

//模拟数据
import Mock from 'mockjs'
Vue.prototype.$mock = Mock

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
