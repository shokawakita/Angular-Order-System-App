import { Component, Input } from '@angular/core';
import { Item } from '../items';
import { AppService } from '../app.service';

@Component({
  selector: 'app-delete-event-auto-alert',
  templateUrl: './delete-event-auto-alert.component.html',
  styleUrls: ['./delete-event-auto-alert.component.scss']
})
export class DeleteEventAutoAlertComponent {
  @Input() open!: boolean;

  constructor(private appService: AppService) {}

  ngOnInit() {}
}
