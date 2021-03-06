import axios from 'axios'
import local from '@/utils/local'
import Config from '@/setting'
import router from '@/router'
import { Message } from 'ant-design-vue'

function startLoading () {
  Message.loading({
    content: '加载中...'
  })
}

function endLoading () {
  Message.destroy()
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
    const token = local.get('token')
    config.headers.token = token || ''
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
        Message.warn({ content: '请重新登录' })
        router.push('/login')
        local.clear()
      } else if (response.data.code !== 200) {
        Message.warn({ content: response.data.msg })
      }
    }
    return response
  },
  error => {
    return Promise.reject(error)
  }
)

export default instance
