const mutations = {
  changeCurrentUser (state, currentUser) {
    let cpCurrentUser = Object.create(state.userList[currentUser])
    cpCurrentUser.user = currentUser
    state.currentUser = cpCurrentUser
  },
  changeCurrentBlockNo (state, blockNo) {
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
  }
}

export default mutations
