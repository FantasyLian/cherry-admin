import request from '@/utils/request'

/**
 * 获取验证码
 * @param {*} params
 * @returns
 */
export function getCaptcha (params) {
  return new Promise((resolve, reject) => {
    request({ url: '/code/send', method: 'GET', params }).then(res => {
      resolve(res.data)
    }).catch(err => {
      reject(err)
    })
  })
}

/**
 * 登录
 * @param {*} data
 * @returns
 */
export function login (data) {
  return new Promise((resolve, reject) => {
    request({ url: '/login', method: 'POST', data }).then(res => {
      resolve(res.data)
    }).catch(err => {
      reject(err)
    })
  })
}

/**
 * 买家订单列表
 * @param {*} params
 * @returns
 */
export function getBuyerOrder (params) {
  return new Promise((resolve, reject) => {
    request({ url: '/order/buy/list', method: 'GET', params }).then(res => {
      resolve(res.data)
    }).catch(err => {
      reject(err)
    })
  })
}
