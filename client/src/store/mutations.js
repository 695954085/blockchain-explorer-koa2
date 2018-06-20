const mutations = {
  changeCurrentUser (state, currentUser) {
    state.userList.forEach(function (value) {
      if (value.username === currentUser) {
        state.currentUser = value
        state.currentBlockNo = -1
        return false
      }
    })
  },
  changeCurrentBlockNo (state, blockNo) {
    state.currentBlockNo = blockNo
  }
}

export default mutations
