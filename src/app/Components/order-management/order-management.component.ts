import { Component } from '@angular/core';
import { Item } from '../../items';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-order-management',
  templateUrl: './order-management.component.html',
  styleUrls: ['./order-management.component.scss']
})
export class OrderManagementComponent {
  registerList!: Item[][];

  constructor(private appService: AppService) {}

  ngOnInit() {
    this.registerList = this.appService.getRegisterList()
    this.appService.setMenuType('order-management')
    this.registerList = this.appService.assetFormalArrayList(this.registerList)
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
