export const columns = [
  {
    title: '用户手机号',
    dataIndex: 'mobileNo',
    key: 'mobileNo'
  },
  {
    title: '认证信息',
    dataIndex: 'facePass',
    key: 'facePass',
    scopedSlots: { customRender: 'auth' }
  },
  {
    title: '身份证号',
    dataIndex: 'certNo',
    key: 'certNo',
    ellipsis: true
  },
  {
    title: '出售次数',
    dataIndex: 'sellCount',
    key: 'sellCount'
  },
  {
    title: '购买次数',
    dataIndex: 'buyCount',
    key: 'buyCount',
    ellipsis: true
  },
  {
    title: '订单收入',
    dataIndex: 'totalOrderIncome',
    key: 'totalOrderIncome',
    ellipsis: true
  },
  {
    title: '累计提现',
    dataIndex: 'totalWithdrawal',
    key: 'totalWithdrawal',
    ellipsis: true
  }
]
