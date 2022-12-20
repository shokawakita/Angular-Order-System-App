import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Item } from '../items';
import { AppService } from 'src/app/app.service';
import { Open } from '../items';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  @Input() currentPage!: number;
  @Input() registerList!: Item[][];
  @Input() unRegisterList!: Item[][];
  menuType: string = '';
  @Output() deleteUpdate: EventEmitter<Item[][]> = new EventEmitter

  // deleteItem!: Item;
  open!: Open;
  currentItem!: Item;

  constructor(
    private appService: AppService
  ) {}

  ngOnInit() {
    this.registerList = this.appService.getRegisterList()
    this.unRegisterList = this.appService.getUnRegisterList()
    this.currentPage = this.appService.getCurrentPage();
    this.open = this.appService.getOpen()
    this.menuType = this.appService.getMenuType()
  }

  timerAlert(item: Item){
    this.appService.timerAlert()
  }

  deleteUpdateItem(items: Item[][]){
    this.deleteUpdate.emit(items)
  }
}
