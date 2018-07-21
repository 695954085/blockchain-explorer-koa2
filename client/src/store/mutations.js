import Vue from 'vue'

const mutations = {
  changeCurrentUser (state, currentUser) {
    state.userList[currentUser].user = currentUser
    state.currentUser = state.userList[currentUser]
  },
  changeCurrentBlockNo (state, blockNo) {
    state.currentUser.blocks.forEach(value => {
      if (value.number === blockNo) {
        Vue.set(value, 'isSelected', true)
      } else {
        Vue.set(value, 'isSelected', false)
      }
    })
    state.currentBlockNo = blockNo
  },
  saveUserList (state, userList) {
    sessionStorage.setItem('userList', JSON.stringify(userList))
    state.userList = userList
  },
  saveAdmin (state, username) {
    state.loginUser.username = username
    state.isLogin = true
    sessionStorage.setItem('loginUser', JSON.stringify(state.loginUser))
    sessionStorage.setItem('isLogin', true)
  },
  clear (state) {
    state.userList = {}
    state.currentUser = {}
    state.currentBlockNo = -1
    state.isLogin = false
    Vue.set(state.loginUser, 'username', '')
    sessionStorage.removeItem('loginUser')
    sessionStorage.removeItem('userList')
    sessionStorage.removeItem('isLogin')
  },
  reStore (state) {
    state.isLogin = sessionStorage.getItem('isLogin')
    state.userList = JSON.parse(sessionStorage.getItem('userList'))
    state.loginUser = JSON.parse(sessionStorage.getItem('loginUser'))
  },
  updateUserList (state, newUserList) {
    // 对比length
    let oldHeight = state.userList[state.currentUser.user].height
    let newHeight = newUserList[state.currentUser.user].height
    Vue.set(state.userList[state.currentUser.user], 'height', newHeight)
    if (oldHeight < newHeight) {
      let sub = newHeight - oldHeight
      for (let i = sub - 1; i >= 0; i--) {
        // vue 内置 unshift
        state.userList[state.currentUser.user].blocks.unshift(newUserList[state.currentUser.user].blocks[i])
      }
      sessionStorage.setItem('userList', JSON.stringify(state.userList))
    }
  }
}

export default mutations
