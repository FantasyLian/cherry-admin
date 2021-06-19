export const columns = [
  {
    title: '用户手机号',
    dataIndex: 'mobileNo',
    key: 'mobileNo',
    scopedSlots: {
      customRender: 'mobileNo'
    }
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
    ellipsis: true,
    scopedSlots: {
      customRender: 'certNo'
    }
  },
  {
    title: '出售次数',
    dataIndex: 'sellCount',
    key: 'sellCount',
    scopedSlots: {
      customRender: 'sellCount'
    }
  },
  {
    title: '购买次数',
    dataIndex: 'buyCount',
    key: 'buyCount',
    ellipsis: true,
    scopedSlots: {
      customRender: 'buyCount'
    }
  },
  {
    title: '订单收入',
    dataIndex: 'totalOrderIncome',
    key: 'totalOrderIncome',
    ellipsis: true,
    scopedSlots: {
      customRender: 'totalOrderIncome'
    }
  },
  {
    title: '累计提现',
    dataIndex: 'totalWithdrawal',
    key: 'totalWithdrawal',
    ellipsis: true,
    scopedSlots: {
      customRender: 'totalWithdrawal'
    }
  }
]
