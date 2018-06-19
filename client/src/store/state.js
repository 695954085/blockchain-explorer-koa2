const state = {
  userList: [{
    username: 'user1',
    blocks: [{
      no: 1
    }, {
      no: 2
    }]
  }, {
    username: 'user2',
    blocks: [{
      no: 1,
      txs: {
        1: {

        },
        2: {

        }
      }
    }, {
      no: 2
    }, {
      no: 3
    }, {
      no: 4
    }]
  }],
  currentUser: {
    username: 'user1',
    blocks: [{
      no: 1
    }, {
      no: 2
    }]
  },
  loginUser: {
    username: 'admin'
  }
}

export default state
