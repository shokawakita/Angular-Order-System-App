import { Component, Input, Output, EventEmitter } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { Item, noImageUrl } from '../../items';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent {
  private deleteItem!: Item;
  @Input() items!: Item[][];
  @Input() item!: Item;
  @Output() isOpen: EventEmitter<Item> = new EventEmitter();
  @Output() detailOpen: EventEmitter<Item> = new EventEmitter();
  @Output() deleteUpdateItem: EventEmitter<Item[][]> = new EventEmitter();
  //　画像がない時のサンプル画像
  noImageUrl: string = noImageUrl;

  constructor(private appService: AppService) {}


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
}
