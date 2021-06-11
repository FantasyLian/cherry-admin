export const columns = [
  {
    title: '用户手机号',
    dataIndex: 'phoneNum',
    key: 'phoneNum',
    slots: { title: 'customTitle' },
    scopedSlots: { customRender: 'phoneNum' }
  },
  {
    title: '用户昵称',
    dataIndex: 'nickname',
    key: 'nickname'
  },
  {
    title: '身份证号',
    dataIndex: 'IDNumber',
    key: 'IDNumber',
    ellipsis: true
  },
  {
    title: '支付宝',
    dataIndex: 'alipay',
    key: 'alipay',
    ellipsis: true
  },
  {
    title: '认证信息',
    dataIndex: 'authentication',
    key: 'authentication',
    scopedSlots: { customRender: 'auth' }
  }
]
