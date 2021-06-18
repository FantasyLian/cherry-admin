export const columns = [
  {
    title: '订单编号',
    dataIndex: 'productId',
    key: 'productId'
  },
  {
    title: '出售商品',
    dataIndex: 'product',
    key: 'product'
  },
  {
    title: '卖家账号',
    dataIndex: 'userId',
    key: 'userId'
  },
  {
    title: '创建时间',
    dataIndex: 'createTime',
    key: 'createTime'
  },
  {
    title: '售出时间',
    dataIndex: 'finishTime',
    key: 'finishTime'
  },
  {
    title: '数量（颗）',
    dataIndex: 'gemNum',
    key: 'gemNum'
  },
  {
    title: '单价（元/颗）',
    dataIndex: 'unitPrice',
    key: 'unitPrice'
  },
  {
    title: 'WGC账号',
    dataIndex: 'wgcId',
    key: 'wgcId'
  },
  {
    title: '总价',
    dataIndex: 'price',
    key: 'price'
  },
  {
    title: '实际收入',
    dataIndex: 'realPrice',
    key: 'realPrice'
  },
  {
    title: '状态',
    dataIndex: 'statusVal',
    key: 'statusVal',
    scopedSlots: { customRender: 'status' },
    width: 90
  }
]
