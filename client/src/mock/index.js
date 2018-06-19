import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

export default {
  init: function () {
    // This sets the mock adapter on the default instance
    var mock = new MockAdapter(axios)

    // Mock any GET request to /users
    // arguments for reply are (status, data, headers)
    // mock.onPost('/users').reply(200, {
    //   users: [
    //     { id: 1, name: 'John Smith' }
    //   ]
    // })
  }
}
