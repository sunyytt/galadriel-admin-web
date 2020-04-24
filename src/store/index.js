import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
/**
 * vuex 是状态管理
 * 为什么要用？
 *这种某几个状态数据不断被其子组件以及后代组件使用的状况，可以考虑使用状态管理来解耦，可能使代码更加简洁。
 *https://segmentfault.com/a/1190000019751331?utm_source=tag-newest
 */
Vue.use(Vuex)

// https://webpack.js.org/guides/dependency-management/#requirecontext
const modulesFiles = require.context('./modules', true, /\.js$/)

// you do not need `import app from './modules/app'`
// it will auto require all vuex module from modules file
const modules = modulesFiles.keys().reduce((modules, modulePath) => {
  // set './app.js' => 'app'
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
  const value = modulesFiles(modulePath)
  modules[moduleName] = value.default
  return modules
}, {})

const store = new Vuex.Store({
  modules,
  getters
})

export default store
