export const columns = [
  {
    title: '用户手机号',
    dataIndex: 'phoneNum',
    key: 'phoneNum'
  },
  {
    title: '认证信息',
    dataIndex: 'authentication',
    key: 'authentication',
    scopedSlots: { customRender: 'auth' }
  },
  {
    title: '身份证号',
    dataIndex: 'IDNumber',
    key: 'IDNumber',
    ellipsis: true
  },
  {
    title: '出售次数',
    dataIndex: 'sellTimes',
    key: 'sellTimes'
  },
  {
    title: '购买次数',
    dataIndex: 'buyTimes',
    key: 'buyTimes',
    ellipsis: true
  },
  {
    title: '订单收入',
    dataIndex: 'orderIncome',
    key: 'orderIncome',
    ellipsis: true
  },
  {
    title: '累计提现',
    dataIndex: 'totalWithdraw',
    key: 'totalWithdraw',
    ellipsis: true
  }
]
