const state = {
  test: 'test'
}

const getters = {
  test: state => state.test
}

const mutations = {
  setTest (state, test) {
    state.test = test
  }
}

const actions = {
  setTest ({ commit }, value) {
    setTimeout(() => {
      commit('setTest', value)
    }, 100)
  }
}

export default {
  state, // 变量
  actions, // 提交mutations,可做异步操作
  getters, // 对数据进行一些操作
  mutations, // 对状态做更改(同步)
}