import { Component } from '@angular/core';
import {naviList, Navi} from '../data/navi'

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  naviList!: Navi[];
  ngOnInit() {
    this.naviList = naviList
  }
}
