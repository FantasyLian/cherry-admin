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

/**
 * 卖家订单列表
 * @param {*} params
 * @returns
 */
export function getSellerOrder (params) {
  return new Promise((resolve, reject) => {
    request({ url: '/order/sale/list', method: 'GET', params }).then(res => {
      resolve(res.data)
    }).catch(err => {
      reject(err)
    })
  })
}

/**
 * 余额明细
 * @param {*} params
 * @returns
 */
export function getBalance (params) {
  return new Promise((resolve, reject) => {
    request({ url: '/record/trade/list', method: 'GET', params }).then(res => {
      resolve(res.data)
    }).catch(err => {
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
    request({ url: '/record/earn/list', method: 'GET', params }).then(res => {
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
    request({ url: '/user/infoList', method: 'GET', params }).then(res => {
      resolve(res.data)
    }).catch(err => {
      reject(err)
    })
  })
}

/**
 * 首页
 * @param {*} params
 * @returns
 */
export function getHomeInfo () {
  return new Promise((resolve, reject) => {
    request({ url: '/home/info', method: 'GET' }).then(res => {
      resolve(res.data)
    }).catch(err => {
      reject(err)
    })
  })
}

/**
 * 每月充值统计数据
 * @param {*} params
 * @returns
 */
export function getMonthRecharge (params) {
  return new Promise((resolve, reject) => {
    request({ url: '/home/Statistic/recharge/month', method: 'GET', params }).then(res => {
      resolve(res.data)
    }).catch(err => {
      reject(err)
    })
  })
}
