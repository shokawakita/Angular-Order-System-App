import { Component, Input } from '@angular/core';
import { AppService } from '../../app.service';
import { Open } from '../../items';
import { form, Form } from '../../Data/form';

@Component({
  selector: 'app-delete-event-auto-alert',
  templateUrl: './delete-event-auto-alert.component.html',
  styleUrls: ['./delete-event-auto-alert.component.scss']
})
export class DeleteEventAutoAlertComponent {
  form!: Form[];
  open: Open = {
    isOpen: false,
    option: ''
  }

  constructor(private appService: AppService) {}

  ngOnInit() {
    this.open = this.appService.getOpen()
    this.form = form;
  }
}
