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
