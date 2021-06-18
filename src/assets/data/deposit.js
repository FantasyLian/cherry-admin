export const columns = [
  {
    title: '账号',
    dataIndex: 'mobileNo',
    key: 'mobileNo'
  },
  {
    title: '用户昵称',
    dataIndex: 'name',
    key: 'name'
  },
  {
    title: '金额（元）',
    dataIndex: 'amount',
    key: 'amount',
    ellipsis: true
  },
  {
    title: '类型',
    dataIndex: 'typeVal',
    key: 'typeVal',
    ellipsis: true
  },
  {
    title: '支付宝账号',
    dataIndex: 'alipayUid',
    key: 'alipayUid',
    ellipsis: true,
    scopedSlots: {
      customRender: 'pay'
    }
  },
  {
    title: '时间',
    dataIndex: 'createTime',
    key: 'createTime'
  }
]
