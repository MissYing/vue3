import { createStore } from 'vuex'
import example from './apps/example'

// vuex模块扩展，以modules中的key做命名空间
const modules = {
  example
}

for(const key in modules) { // 统一启用命名空间
  modules[key].namespaced = true
}

// 启用vuex
export default createStore({
  modules
})