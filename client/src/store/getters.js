import _ from 'lodash'

const getters = {
  currentUserBlocks (state, getters) {
    if (_.isEmpty(state.currentUser)) {
      return []
    }
    return state.currentUser.blocks
  },
  currentUserBlocksLength (state, getters) {
    if (_.isEmpty(state.currentUser)) {
      return 0
    }
    return state.currentUser.blocks.length
  },
  userListSelectOptions (state) {
    return state.userList.map(value => {
      return value.username
    })
  }
}

export default getters
