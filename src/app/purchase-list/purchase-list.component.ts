import { Component, Input } from '@angular/core';
import { AppService } from '../app.service';
import { LogOrderItems } from '../items';

@Component({
  selector: 'app-purchase-list',
  templateUrl: './purchase-list.component.html',
  styleUrls: ['./purchase-list.component.scss']
})
export class PurchaseListComponent {
  @Input() items!: LogOrderItems;
  @Input() index!: number;
  totalPrice: number = 0;

  constructor(private appService: AppService) {}

  ngOnInit(){
    this.totalPrice = this.appService.getTotalPrice()
    this.appService.calculateTotalPrice()
  }
}
