import { Component, Input, Output, EventEmitter } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { Item, LogOrderItems, noImageUrl, OrderItem } from '../../items';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent {
  private deleteItem!: Item;
  count: number[] = [];
  @Input() items!: Item[][];
  @Input() item!: Item;
  @Input() menuType!: string;
  @Output() isOpen: EventEmitter<Item> = new EventEmitter();
  @Output() detailOpen: EventEmitter<Item> = new EventEmitter();
  @Output() deleteUpdateItem: EventEmitter<Item[][]> = new EventEmitter();
  //　画像がない時のサンプル画像
  noImageUrl: string = noImageUrl;
  value: number = -1;
  constructor(private appService: AppService) {
  }

  getLength(){
    return this.appService.
    assetSimpleArrayList(this.items).length
  }
  getCount(item: Item) {
    this.count = []
    for(let i = 0; i <= item.count; i++){
      this.count.push(i)
    }
  }
  // 削除イベント
  deleteEvent(deleteItem: Item) {
    if(!confirm(`「${deleteItem.name}」をリストから削除してもよろしいでしょうか？
    削除したリストは「ゴミ箱」からもとに戻すことが可能です。`)){ return }
    // 削除後の説明イベントの呼び出し
    this.checkCautionEvent(deleteItem)
    // 削除した時に10個を保つための配列調整のための関数(itme->list->list-formコンポーネント間でつながっている)
    this.deleteUpdateItem.emit(this.appService.removeItem(deleteItem))
  }

  // 削除時、自動で補足説明の表示・非表示を行なうためのイベント
  checkCautionEvent(item: Item){
    this.isOpen.emit(item)
  }

  // 商品の詳細ページに移動するためのイベント
  detailItem(item: Item){
    this.detailOpen.emit(item)
  }

  submitItem(count: any) {
    if(count != 0){
      this.item.count -= count;
      this.checkCautionEvent(this.item)
    } else {
      return alert("1個以上の商品を追加してください")
    }
    this.appService.orderCount(count)
    this.appService.createOrderItem(this.item)
    // this.orderCount.emit(count)
    // this.createOrderItem.emit(this.item)
  }
}
