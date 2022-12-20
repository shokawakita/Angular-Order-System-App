import { Component } from '@angular/core';
import { AppService } from '../app.service';
import { OrderItem } from '../items';

@Component({
  selector: 'app-confirm-order',
  templateUrl: './confirm-order.component.html',
  styleUrls: ['./confirm-order.component.scss']
})
export class ConfirmOrderComponent {
  orderItems: OrderItem[] = [];

  constructor(private appService: AppService){ }

  ngOnInit(){
    this.orderItems = this.appService.getOrderItems()
    this.calculateTotalPrice()
  }

  calculateTotalPrice() {
    this.appService.calculateTotalPrice()
  }

  createLogOrderItems(items: OrderItem[]){
    this.appService.createLogOrderItems(this.orderItems)
    this.orderItems = []
  }
}
