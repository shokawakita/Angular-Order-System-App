export type Form = {
  name: string
  distribution: string
}

export const   form: Form[] = [
  {
    name: "delete",
    distribution: "商品を削除しました。(削除した商品は「ゴミ箱」から戻すことが可能です)"
  },
  {
    name: "go-cart",
    distribution: "商品をカートに追加しました"
  },
  {
    name: "order",
    distribution: "この度は購入いただき誠にありがとうございます。商品を発注しました。納品までしばらくお待ち下さい！"
  }
]
