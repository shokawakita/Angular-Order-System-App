import { Component } from '@angular/core';
import { Item } from '../items';
import { Router } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-search-item-form',
  templateUrl: './search-item-form.component.html',
  styleUrls: ['./search-item-form.component.scss']
})
export class SearchItemFormComponent {
  unRegisterList!: Item[][]; // 未登録の商品一覧を10個ずつに分ける配列
  currentPage: number = -1;
  menuType: string = '';

  constructor (
    private appService: AppService,
    private router: Router
  ) {} // 追加

  ngOnInit() {
    this.currentPage = this.appService.getCurrentPage()
    this.unRegisterList = this.appService.getUnRegisterList()
    this.menuType = this.appService.getMenuType(0)
  }

  // ボタンクリック時に指定ページに移動
  currentPageMoveEvent(items: Item[]) {
    let pos: number = -1;
    for(let i = 0; i < this.unRegisterList.length; i++){
      if(this.unRegisterList[i] == items) {
        pos = i;
      }
    }
    this.currentPage = pos
    this.appService.scroll_to_top()
  }
}


