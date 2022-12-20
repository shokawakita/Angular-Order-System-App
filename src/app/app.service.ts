import { Injectable } from '@angular/core';
import { Item, items, Open } from './items';
import { OrderItem } from './items';
import { LogOrderItems } from './items';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private items: Item[] = items;
  private currentPage: number = 0;
  private orderItems: OrderItem[] = [];
  private logOrderItems: LogOrderItems[] = [];
  private count!: number;
  private totalPrice: number = 0;
  private registerList: Item[][] = this.createJudgeRegisterList(this.items, true); //上記と同じ理由でまとめた
  private unRegisterList: Item[][] = this.createJudgeRegisterList(this.items, false); //冗長のため関数にまとめた
  private menuType: string = '';
  private open: Open = {
    isOpen: false,
    option: ''
  }

  constructor() { }

  // getters
  getItem(id: number): Item {
    const item = this.items.find((h: Item) => h.id === id)!;
    return item;
  }
  getItems(): Item[] {
    return this.items
  }
  getOrderItems(): OrderItem[] {
    return this.orderItems
  }
  getLogOrderItems(): LogOrderItems[] {
    return this.logOrderItems
  }
  getMenuType(): string {
    return this.menuType
  }
  getCurrentPage(): number {
    return this.currentPage
  }
  getRegisterList(): Item[][] {
    return this.registerList
  }
  getUnRegisterList(): Item[][] {
    return this.unRegisterList
  }
  getOpen(): Open {
    return this.open
  }
  getTotalPrice(): number {
    return this.totalPrice
  }

  // ◯登録or未登録の商品を10個単位の配列で取得
  // isRegisterで登録の判断をする
  createJudgeRegisterList(items: Item[], isRegister: boolean): Item[][] {
    const i = items.filter(item => {
      return item.register == isRegister
    })
    return this.assetArrayList(i)
  }

  // setter
  setRegisterList(registerList: Item[][]){
    this.registerList = registerList
  }
  setMenuType(menuType: string){
    this.menuType = menuType
  }

  // ◯アイテムの削除
  removeItem(deleteItem: Item): Item[][] {
    // this.deleteItem = deleteItem;
    // [[], [], [],...]形式のため2つのインデックス（はじめの配列の順番とその配列の中でどこにあるか）が必要
    let pos1: number = -1;//削除する配列の順番の取得
    let pos2: number = -1;//削除する配列の中の対象アイテムの順番の取得
    // 削除するアイテムのインデックスを取得する操作
    for(let i = 0; i < this.registerList.length; i++) {
      this.registerList.map((list: Item[], index1: number) => {
        list.map((item: Item, index2: number) => {
          if(item == deleteItem){
            pos1 = index1
            pos2 = index2
          }
        })
      })
    }
    // 対象のアイテムの削除の実行
    this.registerList[pos1].splice(pos2, 1)

    // [[], [], []...]形式で一つの配列の要素数が10個になる配列を戻り値として取得するための関数を実行する
    return this.assetFormalArrayList(this.registerList);
  }

  // ◯[{}, {}, {}...]の配列を[[], [], []...]形式の形に10個単位に直すための関数
  assetArrayList(targetList: Item[]): Item[][] {
    let blockList: any = [];
    for(let i = 0; i < targetList.length / 10; i++){
      let extractList: Item[];

      // 10個単位で商品を抽出するための操作
      extractList = (targetList.filter((item: Item, index: number) => {
          return index >= 10 * i && index < (i + 1) * 10
        })
      )
      // 10個単位の商品の配列をblockListに配列として入れてあげる操作
      blockList[i] = (extractList)
    }
    return blockList
  }

  // ◯[],[],[]...]の配列を[{}, {}, {}...]の形式にするための関数
  assetSimpleArrayList(targetList: Item[][]): Item[] {
    let simpleArrayList: Item[] = [];
    targetList.forEach((items: Item[], e1: number) => {
      return items.forEach((item: Item, e2: number) => {
        simpleArrayList.push(targetList[e1][e2])
        return simpleArrayList
      })
    })
    return simpleArrayList
  }

  // [[], [], [], ...]を自動で10個単位の配列に調整する
  // assetSimpleArrayList + assetArrayList機能
  assetFormalArrayList(targetList: any) {
    return this.assetArrayList(this.assetSimpleArrayList(targetList))
  }

  //◯トップにスクロール
  scroll_to_top(){
    window.scroll({top: 0, behavior: 'auto'});
  };

  createOrderItem(item: Item) {
    const newItem: OrderItem = {
      id: item.id,
      name: item.name,
      category: item.category,
      price: item.price,
      maker: {name: item.maker.name, adress: item.maker.adress},
      url: item.url,
      isFavo: item.isFavo,
      register: item.register,
      orderCount: this.count
    }
    // newItem.orderCount = this.count
    this.orderItems.push(newItem)
  }
  orderCount(count: number) {
    this.count = count
  }
  createLogOrderItems(items: OrderItem[]) {
    this.logOrderItems.push({
      orderItems: items,
      order: new Date().toLocaleString(),
      open: false
    })
    this.orderItems = [];
  }

  timerAlert(){
    setTimeout(() => {
      this.open.isOpen = true
      if(this.menuType == 'list-form'){
        this.open.option = 'delete'
      } else if(this.menuType == 'order-management') {
        this.open.option = 'go-cart'
      } else if(this.menuType == 'confirm-order') {
        this.open.option = 'order'
      }
    }, 100)
    setTimeout(() =>{
      this.open.isOpen = false
      this.open.option = ''
    }, 8000)
  }

  calculateTotalPrice() {
    this.orderItems.forEach(item => {
      this.totalPrice += item.orderCount * item.price
    })
  }
}
