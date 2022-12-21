import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Item } from '../../items';
import { AppService } from 'src/app/app.service';
import { Open } from '../../items';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  @Input() register!: boolean;
  currentPage!: number;
  @Input() registerList!: Item[][];
  @Input() unRegisterList!: Item[][];

  constructor(
    private appService: AppService
  ) {}

  ngOnInit() {
    this.registerList = this.appService.getRegisterList()
    this.unRegisterList = this.appService.getUnRegisterList()
    this.currentPage = 0
  }

  deleteUpdateItem(item: Item){
    this.appService.removeItem(item)
    this.registerList = this.appService.getRegisterList()
  }

  pageMoveEvent(i: number){
    this.appService.PageMoveEvent(i)
    this.currentPage = i;
  }
}
