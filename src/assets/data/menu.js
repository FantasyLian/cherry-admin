export const menuList = [
  {
    id: '0',
    title: '首页',
    icon: 'home',
    pageUrl: '/home',
    children: []
  },
  {
    id: '1',
    title: '订单',
    icon: 'ordered-list',
    pageUrl: '/buyer',
    children: [
      { id: '1-1', title: '买家订单', pageUrl: '/buyer' },
      { id: '1-2', title: '卖家订单', pageUrl: '/seller' }
    ]
  },
  {
    id: '2',
    title: '明细',
    icon: 'pic-left',
    pageUrl: '/balance',
    children: [
      { id: '2-1', title: '余额明细', pageUrl: '/balance' },
      { id: '2-2', title: '提现明细', pageUrl: '/deposit' }
    ]
  },
  {
    id: '3',
    title: '用户',
    icon: 'user',
    pageUrl: '/user',
    children: []
  }
]
