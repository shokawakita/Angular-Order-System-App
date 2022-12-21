import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Item, noImageUrl } from '../../items';
import { ActivatedRoute } from '@angular/router';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.scss']
})
export class ItemDetailComponent {
  item!: Item;
  noImageUrl: string = noImageUrl

  constructor(
    private appService: AppService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {this.getItem()}

  // ◯URLから対象のアイテムのデータを取得
  getItem() {
    const id = Number(this.route.snapshot.paramMap.get('id'))
    this.item = this.appService.getItem(id)
  }
}
