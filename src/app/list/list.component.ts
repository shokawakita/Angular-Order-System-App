import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Item } from '../items';
import { AppService } from 'src/app/app.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  @Input() currentPage!: number;
  @Input() registerList!: Item[][];
  @Input() unRegisterList!: Item[][];
  @Input() menuType!: string;
  @Output() deleteUpdate: EventEmitter<Item[][]> = new EventEmitter

  // deleteItem!: Item;
  open: boolean = false;
  currentItem!: Item;

  constructor(
    private appService: AppService
  ) {}

  ngOnInit() {
    this.registerList = this.appService.getRegisterList()
    this.unRegisterList = this.appService.getUnRegisterList()
    this.currentPage = this.appService.getCurrentPage();
  }

  timerAlert(item: Item){
    setTimeout(() => this.open = true, 100)
    setTimeout(() => this.open = false, 8000)
  }

  deleteUpdateItem(items: Item[][]){
    this.deleteUpdate.emit(items)
  }
}
