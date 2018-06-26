import axios from 'axios'
import config from '../config'

export const requestLogin = params => axios.get(`http://${config.GoServerHost}:${config.GoServerPort}/blocks`, {
  params: params,
  timeout: 3000
})

export const requestRegister = params => axios.get(`http://${config.GoServerHost}:${config.GoServerPort}/create`, {
  params: params,
  timeout: 3000
})

export const invoke = params => axios.get(`http://${config.GoServerHost}:${config.GoServerPort}//invoke`, {
  params: params,
  timeout: 5000
})
