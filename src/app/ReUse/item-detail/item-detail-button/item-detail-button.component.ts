import { Component, Input } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { Item } from 'src/app/items';

@Component({
  selector: 'app-item-detail-button',
  templateUrl: './item-detail-button.component.html',
  styleUrls: ['./item-detail-button.component.scss']
})
export class ItemDetailButtonComponent {
  @Input() item!: Item;
  menuType: string = ''

  constructor(private appService: AppService) {}

  ngOnInit(){
    this.setMenuType()
    this.menuType = this.appService.getMenuType()
  }

  setMenuType() {
    if(this.item.register) {
      this.appService.setMenuType('list-form')
    } else {
      this.appService.setMenuType('search-item')
    }
  }


  deleteItem(item: Item){
    this.appService.removeItem(item)
  }
}
