import axios from 'axios'
import config from '../config'

export const requestLogin = params => axios.get(`http://${config.GoServerHost}:${config.GoServerPort}/blocks`, {
  params: params
})

export const requestRegister = params => axios.get(`http://${config.GoServerHost}:${config.GoServerPort}/create`, {
  params: params
})

export const invoke = params => axios.get(`http://${config.GoServerHost}:${config.GoServerPort}/invoke`, {
  params: params
})
