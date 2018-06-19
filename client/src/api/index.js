import axios from 'axios'

export const requestLogin = params => axios.post('/users', params)
