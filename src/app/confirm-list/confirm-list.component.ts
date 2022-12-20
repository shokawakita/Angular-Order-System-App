import { Component, Input, Output, EventEmitter } from '@angular/core';
import { AppService } from '../app.service';
import { noImageUrl, OrderItem } from '../items';

@Component({
  selector: 'app-confirm-list',
  templateUrl: './confirm-list.component.html',
  styleUrls: ['./confirm-list.component.scss']
})
export class ConfirmListComponent {
  @Input() orderItems!: OrderItem[];
  @Output() createLogOrderItems: EventEmitter<OrderItem[]> = new EventEmitter()
  totalPrice: number = 0;

  noImageUrl = noImageUrl;

  constructor(private appService: AppService) {}

  ngOnInit() {
    this.appService.setMenuType('confirm-order')
    this.totalPrice = this.appService.getTotalPrice()
  }

  createLogOrderItemsEvent(){
    this.createLogOrderItems.emit(this.orderItems)
    this.timerAlert()
  }

  timerAlert() {
    this.appService.timerAlert()
  }
}
