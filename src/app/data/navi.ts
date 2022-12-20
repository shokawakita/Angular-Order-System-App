export type Navi = {
  url: string
  name: string
}

export const naviList: Navi[] = [
  {url: '/top', name: 'トップ'},
  {url: '/my-page', name: 'マイページ'},
  {url: '/order-management', name: '発注管理'},
  {url: '/list-form', name: '商品管理'},
  {url: '/search-item-form', name: '商品検索'},
  {url: '/purchase-log', name: '購入履歴'},
  {url: '/garbage', name: 'ゴミ箱'},
]
