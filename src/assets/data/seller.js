export const columns = [
  {
    title: '订单编号',
    dataIndex: 'orderId',
    key: 'orderId'
  },
  {
    title: '出售商品',
    dataIndex: 'product',
    key: 'product',
    width: 90
  },
  {
    title: '卖家账号',
    dataIndex: 'sellerAccount',
    key: 'sellerAccount',
    ellipsis: true
  },
  {
    title: '创建时间',
    dataIndex: 'createTime',
    key: 'createTime'
  },
  {
    title: '售出时间',
    dataIndex: 'tradingTime',
    key: 'tradingTime'
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
    title: 'WGC账号',
    dataIndex: 'WGCAccount',
    key: 'WGCAccount',
    ellipsis: true
  },
  {
    title: '总价',
    dataIndex: 'totalPrice',
    key: 'totalPrice',
    ellipsis: true
  },
  {
    title: '实际收入',
    dataIndex: 'income',
    key: 'income',
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
