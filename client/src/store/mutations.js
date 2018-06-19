const mutations = {
  changeCurrentUser (state, currentUser) {
    state.userList.forEach(function (value) {
      console.log(value.username);
      if (value.username === currentUser) {
        state.currentUser = value
        return false
      }
    })
  }
}

export default mutations
