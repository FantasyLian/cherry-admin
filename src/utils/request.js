import axios from 'axios'
import { Toast } from 'vant'
import { judgeAPP, getToken, getLogout, getDeviceInfo } from '@/utils/auth'
import Config from '@/setting'
import md5 from 'js-md5'

function startLoading () {
  Toast.loading({
    message: '加载中...',
    loadingType: 'spinner'
  })
}

function endLoading () {
  Toast.clear()
}

const instance = axios.create({
  baseURL: process.env.NODE_ENV === 'production' ? process.env.VUE_APP_BASE_API : '/api', // api 的 base_url
  timeout: Config.timeout,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  }
})

// 请求拦截
instance.interceptors.request.use(
  config => {
    startLoading()
    const token = getToken()
    const timestamp = new Date().getTime()
    config.headers.token = token
    config.headers.sign = md5(token + getDeviceInfo().os + getDeviceInfo().deviceId + timestamp)
    config.headers.os = getDeviceInfo().os
    config.headers.deviceId = getDeviceInfo().deviceId
    config.headers.timestamp = timestamp
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// 响应拦截
instance.interceptors.response.use(
  response => {
    endLoading()
    const { status } = response
    if (status === 200) {
      if (response.data.code === 600) {
        Toast({ message: '请重新登录', duration: 1500 })
        getLogout()
      } if (response.data.code === 700 || response.data.code === 800) {
        try {
          if (judgeAPP() === 'iOS') {
            window.webkit.messageHandlers.showVerify().postMessage(response.data.code)
          }
        } catch (e) {
          window.wishtree.showVerify(response.data.code)
        }
      } else if (response.data.code !== 200) {
        Toast({ message: response.data.msg, duration: 1500 })
      }
    }
    return response
  },
  error => {
    return Promise.reject(error)
  }
)

export default instance
