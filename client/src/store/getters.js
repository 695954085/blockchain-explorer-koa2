const getters = {
  currentUserBlocks (state, getters) {
    return state.currentUser.blocks
  },
  userListSelectOptions (state) {
    return state.userList.map(value => {
      return value.username
    })
  }
}

export default getters
