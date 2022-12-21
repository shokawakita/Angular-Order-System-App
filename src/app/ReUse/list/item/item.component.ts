import { Component, Input, Output, EventEmitter } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { Item, LogOrderItems, noImageUrl, OrderItem } from '../../../items';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent {
  @Input() items!: Item[][];
  @Input() item!: Item;
  menuType!: string;
  @Output() deleteUpdateItem: EventEmitter<Item> = new EventEmitter();

  constructor(private appService: AppService) {
  }
  ngOnInit() {
    this.menuType = this.appService.getMenuType()
  }

  // 削除イベント
  deleteEvent(deleteItem: Item) {
    // 削除後の説明イベントの呼び出し
    this.appService.timerAlert()
    this.deleteUpdateItem.emit(deleteItem)
  }

  submitItem(count: any) {
    if(count != 0){
      this.item.count -= count;
      this.appService.timerAlert()
    } else {
      return alert("1個以上の商品を追加してください")
    }
    this.appService.orderCount(count)
    this.appService.createOrderItem(this.item)
  }
}
