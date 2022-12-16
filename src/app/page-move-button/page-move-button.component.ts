import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Item } from '../items';

@Component({
  selector: 'app-page-move-button',
  templateUrl: './page-move-button.component.html',
  styleUrls: ['./page-move-button.component.scss']
})
export class PageMoveButtonComponent {
  @Input() currentPage!: number;
  @Input() registerList!: Item[][];
  @Input() unRegisterList!: Item[][];
  @Output() pageMoveEvent: EventEmitter<any> = new EventEmitter();

  ngOnInit() {}
  currentPageMoveEvent(items: Item[]){
    this.pageMoveEvent.emit(items)
  }
}
