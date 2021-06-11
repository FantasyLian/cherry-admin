export const columns = [
  {
    title: '订单编号',
    dataIndex: 'orderId',
    key: 'orderId'
  },
  {
    title: '购买商品',
    dataIndex: 'product',
    key: 'product',
    width: 90
  },
  {
    title: '买家联系方式',
    dataIndex: 'buyerContact',
    key: 'buyerContact',
    ellipsis: true
  },
  {
    title: '创建时间',
    dataIndex: 'createTime',
    key: 'createTime',
    ellipsis: true
  },
  {
    title: '交易时间',
    dataIndex: 'tradingTime',
    key: 'tradingTime',
    ellipsis: true
  },
  {
    title: '收货账号',
    dataIndex: 'account',
    key: 'account',
    ellipsis: true
  },
  {
    title: '数量（颗）',
    dataIndex: 'quantity',
    key: 'quantity',
    ellipsis: true
  },
  {
    title: '单价（元/颗）',
    dataIndex: 'unitPrice',
    key: 'unitPrice',
    ellipsis: true
  },
  {
    title: '总价',
    dataIndex: 'totalPrice',
    key: 'totalPrice',
    ellipsis: true
  },
  {
    title: '状态',
    dataIndex: 'status',
    key: 'status',
    scopedSlots: { customRender: 'status' },
    width: 90
  }
]
