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
    return state.currentUser.height
  },
  userListSelectOptions (state) {
    if (!_.isEmpty(state.userList)) {
      return Object.keys(state.userList)
    }
    return []
  }
}

export default getters
