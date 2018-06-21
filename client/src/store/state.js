const state = {
  userList: [{
    username: 'user1',
    blocks: [{
      no: 0,
      currentHash: '2a4bca9c1d2071d8df6989fe2bcebe034a62b2328ad4c224b08713d50bdbfa4f',
      previousHash: '3e6599d9096efb7583c2bc51dc5aa5547d90283cb513a4b969f424be294118d8',
      dataHash: '3a629f2db0d347a50c78ab5f9480002c13bb55217dcabee6f5ddc59c9562cbeb',
      txs: [{
        id: 'a42e738a8af95c9d7610e00d8a7f9455abba393d42265630b9481b9d2ba23ba0',
        timestamp: '2018-06-18 10:42:01.306',
        nonce: '6010cde94fd12c86dd609312b74f899a4322e1b6a652b477',
        content: {
          a: '10',
          b: '290'
        }
      }]
    }, {
      no: 1,
      currentHash: '3e6599d9096efb7583c2bc51dc5aa5547d90283cb513a4b969f424be294118d8',
      previousHash: 'fc7f920a8a859a406e13615613c6981b46d8eae507062712fcae3e978f1e3077',
      dataHash: '107cd58dd163c85227acb5da98b0b7c24089b8d9c814c1473beaad199467de49',
      txs: [{
        id: 'a42e738a8af95c9d7610e00d8a7f9455abba393d42265630b9481b9d2ba23ba0',
        timestamp: '2018-06-18 10:42:01.306',
        nonce: '6010cde94fd12c86dd609312b74f899a4322e1b6a652b477',
        content: {
          a: '10',
          b: '290'
        }
      }]
    }]
  }, {
    username: 'user2',
    blocks: [{
      no: 0,
      currentHash: '3e6599d9096efb7583c2bc51dc5aa5547d90283cb513a4b969f424be294118d8',
      previousHash: 'fc7f920a8a859a406e13615613c6981b46d8eae507062712fcae3e978f1e3077',
      dataHash: '107cd58dd163c85227acb5da98b0b7c24089b8d9c814c1473beaad199467de49',
      txs: [{
        id: 'a42e738a8af95c9d7610e00d8a7f9455abba393d42265630b9481b9d2ba23ba0',
        timestamp: '2018-06-18 10:42:01.306',
        nonce: '6010cde94fd12c86dd609312b74f899a4322e1b6a652b477',
        content: {
          a: '10',
          b: '290'
        }
      }]
    }, {
      no: 1,
      currentHash: '3e6599d9096efb7583c2bc51dc5aa5547d90283cb513a4b969f424be294118d8',
      previousHash: 'fc7f920a8a859a406e13615613c6981b46d8eae507062712fcae3e978f1e3077',
      dataHash: '107cd58dd163c85227acb5da98b0b7c24089b8d9c814c1473beaad199467de49',
      txs: [{
        id: 'a42e738a8af95c9d7610e00d8a7f9455abba393d42265630b9481b9d2ba23ba0',
        timestamp: '2018-06-18 10:42:01.306',
        nonce: '6010cde94fd12c86dd609312b74f899a4322e1b6a652b477',
        content: {
          a: '10',
          b: '290'
        }
      }]
    }, {
      no: 2,
      currentHash: '3e6599d9096efb7583c2bc51dc5aa5547d90283cb513a4b969f424be294118d8',
      previousHash: 'fc7f920a8a859a406e13615613c6981b46d8eae507062712fcae3e978f1e3077',
      dataHash: '107cd58dd163c85227acb5da98b0b7c24089b8d9c814c1473beaad199467de49',
      txs: [{
        id: 'a42e738a8af95c9d7610e00d8a7f9455abba393d42265630b9481b9d2ba23ba0',
        timestamp: '2018-06-18 10:42:01.306',
        nonce: '6010cde94fd12c86dd609312b74f899a4322e1b6a652b477',
        content: {
          a: '10',
          b: '290'
        }
      }]
    }, {
      no: 3,
      currentHash: '3e6599d9096efb7583c2bc51dc5aa5547d90283cb513a4b969f424be294118d8',
      previousHash: 'fc7f920a8a859a406e13615613c6981b46d8eae507062712fcae3e978f1e3077',
      dataHash: '107cd58dd163c85227acb5da98b0b7c24089b8d9c814c1473beaad199467de49',
      txs: [{
        id: 'a42e738a8af95c9d7610e00d8a7f9455abba393d42265630b9481b9d2ba23ba0',
        timestamp: '2018-06-18 10:42:01.306',
        nonce: '6010cde94fd12c86dd609312b74f899a4322e1b6a652b477',
        content: {
          a: '10',
          b: '290'
        }
      }]
    }]
  }],
  currentUser: {
  },
  loginUser: {
    username: 'admin'
  },
  currentBlockNo: -1
}

export default state
