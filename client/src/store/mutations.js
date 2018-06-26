import Vue from 'vue'

const mutations = {
  changeCurrentUser (state, currentUser) {
    // let cpCurrentUser = Object.create()
    state.userList[currentUser].user = currentUser
    // cpCurrentUser.user = currentUser
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
    state.userList = userList
  },
  saveAdmin (state, username) {
    state.loginUser.username = username
  },
  clear (state) {
    state.userList = {}
    state.currentUser = {}
    state.currentBlockNo = -1
    Vue.set(state.loginUser, 'username', '')
  },
  updateUserList (state, newUserList) {
    // 对比length
    let oldHeight = state.userList[state.currentUser.user].height
    let newHeight = newUserList[state.currentUser.user].height
    if (oldHeight < newHeight) {
      let sub = newHeight - oldHeight
      for (let i = 0; i < sub; i++) {
        // vue 内置 push
        state.userList[state.currentUser.user].blocks.push(newUserList[state.currentUser.user].blocks[i])
      }
    }
  }
}

export default mutations
