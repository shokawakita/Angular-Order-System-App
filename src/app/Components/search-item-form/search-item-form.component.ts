import { Component } from '@angular/core';
import { Item } from '../../items';
import { Router } from '@angular/router';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-search-item-form',
  templateUrl: './search-item-form.component.html',
  styleUrls: ['./search-item-form.component.scss']
})
export class SearchItemFormComponent {
  unRegisterList!: Item[][]; // 未登録の商品一覧を10個ずつに分ける配列

  constructor (
    private appService: AppService,
    private router: Router
  ) {} // 追加

  ngOnInit() {
    this.unRegisterList = this.appService.getUnRegisterList()
    this.appService.setMenuType('search-item')
  }
}


