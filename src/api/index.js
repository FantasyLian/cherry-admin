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
 * 获取用户信息列表
 * @param {*} params
 * @returns
 */
export function getUserInfo (params) {
  return new Promise((resolve, reject) => {
    request({ url: '/user/infoList', method: 'GET', params })
      .then(res => {
        resolve(res.data)
      })
      .catch(err => {
        reject(err)
      })
  })
}
/**
 * 提现明细
 * @param {*} params
 * @returns
 */
export function getWithdrawal (params) {
  return new Promise((resolve, reject) => {
    request({ url: '/record/earn/list', method: 'GET', params })
      .then(res => {
        resolve(res.data)
      })
      .catch(err => {
        reject(err)
      })
  })
}
