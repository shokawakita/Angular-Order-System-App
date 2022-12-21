import { Component, Input } from '@angular/core';
import { OrderItem } from 'src/app/items';

@Component({
  selector: 'app-purchase-item',
  templateUrl: './purchase-item.component.html',
  styleUrls: ['./purchase-item.component.scss']
})
export class PurchaseItemComponent {
  @Input() item!: OrderItem;
}
