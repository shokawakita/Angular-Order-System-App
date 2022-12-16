import { Component } from '@angular/core';
import { AppService } from '../app.service';

import { Item } from '../items';

@Component({
  selector: 'app-list-form',
  templateUrl: './list-form.component.html',
  styleUrls: ['./list-form.component.scss']
})
export class ListFormComponent {
  currentPage: number = -1;
  registerList!: Item[][];
  menuType!: string;

  constructor(
    private appService: AppService,
  ) {}

  ngOnInit() {
    this.currentPage = this.appService.getCurrentPage()
    this.registerList = this.appService.getRegisterList()
    this.menuType = this.appService.getMenuType(1)
  }

  // ボタンクリック時に指定ページに移動
  currentPageMoveEvent(items: Item[]) {
    let pos: number = -1;
    for(let i = 0; i < this.registerList.length; i++){
      if(this.registerList[i] == items){
        pos = i;
      }
    }
    this.currentPage = pos
    this.appService.scroll_to_top()
  }

  deleteUpdateItem(items: Item[][]) {
    this.registerList = items
    // order-managementでのリストを変更するためのsetter
    this.appService.setRegisterList
    (items)
  }
}
