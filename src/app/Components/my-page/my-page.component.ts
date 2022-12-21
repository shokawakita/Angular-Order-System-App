import { Component } from '@angular/core';
import { AppService } from '../../app.service';
import { Item, noImageUrl } from '../../items';

@Component({
  selector: 'app-my-page',
  templateUrl: './my-page.component.html',
  styleUrls: ['./my-page.component.scss']
})
export class MyPageComponent {
  items!: Item[];
  noImageUrl: string = noImageUrl;

  constructor(private appService: AppService) {}

  ngOnInit() {
    this.items = this.appService.getItems();
  }

}
