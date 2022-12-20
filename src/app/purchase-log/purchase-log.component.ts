import { Component } from '@angular/core';
import { AppService } from '../app.service';
import { OrderItem } from '../items';
import { LogOrderItems } from '../items';

@Component({
  selector: 'app-purchase-log',
  templateUrl: './purchase-log.component.html',
  styleUrls: ['./purchase-log.component.scss']
})
export class PurchaseLogComponent {
  logOrderItems: LogOrderItems[] = [];
  currentLog!: number;

  constructor(private appService: AppService) {}

  ngOnInit() {
    this.logOrderItems = this.appService.getLogOrderItems()
  }
}
