import Vue from 'vue'

const mutations = {
  changeCurrentUser (state, currentUser) {
    let cpCurrentUser = Object.create(state.userList[currentUser])
    cpCurrentUser.user = currentUser
    state.currentUser = cpCurrentUser
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
  }
}

export default mutations
