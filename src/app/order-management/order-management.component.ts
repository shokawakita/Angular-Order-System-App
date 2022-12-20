import { Component } from '@angular/core';
import { Item } from '../items';
import { AppService } from '../app.service';
import { OrderItem } from '../items';


@Component({
  selector: 'app-order-management',
  templateUrl: './order-management.component.html',
  styleUrls: ['./order-management.component.scss']
})
export class OrderManagementComponent {
  currentPage: number = -1;
  registerList!: Item[][];
  orderItems: Item[] = [];
  count!: number;

  constructor(
    private appService: AppService
  ) {}

  ngOnInit() {
    this.registerList = this.appService.getRegisterList()
    this.currentPage = this.appService.getCurrentPage()
    this.appService.setMenuType('order-management')
  }

  // ボタンクリック時に指定ページに移動
  currentPageMoveEvent(item: Item[]) {
    let pos: number = -1;
    for(let i = 0; i < this.registerList.length; i++){
      if(this.registerList[i] == item){
        pos = i;
      }
    }
    this.currentPage = pos
    this.appService.scroll_to_top()
  }

  // 削除時のアイテムリストの更新
  // 現在イベント発生時に正常に実行されていない
  // deleteUpdateItem(item: Item) {
  //   this.registerList = item
  // }
}

// 【deleteUpdateItemが機能しない理由】
// 問題：itemコンポーネントで削除機能が実行されたときにdeleteUpdateItemが動かない（console.logが機能していないことからわかった）
// 予想　＠OutputではRouterのURLが違うと子コンポーネントで発生したイベントが実行されない
