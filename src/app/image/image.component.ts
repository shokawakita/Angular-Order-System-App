import { Component, Input } from '@angular/core';
import { Item, noImageUrl, OrderItem } from '../items';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent {
  @Input() item!: Item | OrderItem;
  @Input() size!: number;
  noImageUrl: string = noImageUrl;
}
