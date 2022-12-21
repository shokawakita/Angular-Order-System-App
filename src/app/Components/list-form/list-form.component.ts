import { Component } from '@angular/core';
import { AppService } from '../../app.service';

import { Item } from '../../items';

@Component({
  selector: 'app-list-form',
  templateUrl: './list-form.component.html',
  styleUrls: ['./list-form.component.scss']
})
export class ListFormComponent {
  registerList!: Item[][];

  constructor(
    private appService: AppService,
  ) {}

  ngOnInit() {
    this.registerList = this.appService.getRegisterList()
    this.appService.setMenuType('list-form')
  }
}
