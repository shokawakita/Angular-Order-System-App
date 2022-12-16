import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteEventAutoAlertComponent } from './delete-event-auto-alert.component';

describe('DeleteEventAutoAlertComponent', () => {
  let component: DeleteEventAutoAlertComponent;
  let fixture: ComponentFixture<DeleteEventAutoAlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteEventAutoAlertComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteEventAutoAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
