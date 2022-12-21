import { Component, Input, Output, EventEmitter } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { Item } from '../../items';

@Component({
  selector: 'app-page-move-button',
  templateUrl: './page-move-button.component.html',
  styleUrls: ['./page-move-button.component.scss']
})
export class PageMoveButtonComponent {
  @Input() currentPage!: number;
  @Input() register!: boolean;
  registerList!: Item[][];
  unRegisterList!: Item[][];
  @Output() pageMoveEvent: EventEmitter<any> = new EventEmitter();

  constructor(private appService: AppService) {}

  ngOnInit() {
    this.currentPage = 0
    this.registerList = this.appService.getRegisterList()
    this.unRegisterList = this.appService.getUnRegisterList()
  }

  currentPageMoveEvent(i: number){
    this.pageMoveEvent.emit(i)
    this.currentPage = i;
  }
}
